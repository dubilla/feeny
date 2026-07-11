#!/usr/bin/env python3
"""SVG → SwiftUI Path compiler — the Feeny character pipeline.

Characters are authored as SVG (a drawing tool; preview in any browser),
then compiled into resolution-independent SwiftUI paths. Only the rig
(blink, bob, wave anchors) is hand-coded, in the character's View.

Usage:
  python3 ios/tools/svg2shape.py ios/DesignAssets/feeny.svg \
      ios/Feeny/Core/UI/Characters/FeenyPaths.swift FeenyPaths

Rules for author SVGs (kept strict so this stays small):
  - every drawable element needs an id (it becomes the Swift method name)
  - supported elements: path, circle, ellipse
  - path data: absolute M/C/L/Q/Z commands only
  - fills must be #rrggbb (plus optional opacity="0..1")
Coordinates are normalized against the viewBox, so callers draw into any
rect (use `aspectRatio` to keep proportions).

Output per layer: a `Path` method, plus a paint-order `layers` array carrying
the authored fills. Static characters (Feenlings) are drawn straight from
`layers` by FeenlingSprite; rigged characters (FeenyMascot) ignore the fills
and color each layer from Theme tokens by hand.
"""
import re
import sys
import xml.etree.ElementTree as ET

FLOAT = r"[-+]?[0-9]*\.?[0-9]+"


def fmt(v):
    return f"{v:.4f}".rstrip("0").rstrip(".")


def parse_path(d, w, h):
    """Yield Swift path-building lines for absolute M/C/L/Q/Z data."""
    tokens = re.findall(rf"[MCLQZ]|{FLOAT}", d)
    lines = []
    i = 0

    def take(n):
        nonlocal i
        vals = [float(tokens[i + k]) for k in range(n)]
        i += n
        return vals

    while i < len(tokens):
        cmd = tokens[i]
        i += 1
        if cmd == "M":
            x, y = take(2)
            lines.append(f"p.move(to: pt({fmt(x / w)}, {fmt(y / h)}, rect))")
        elif cmd == "L":
            x, y = take(2)
            lines.append(f"p.addLine(to: pt({fmt(x / w)}, {fmt(y / h)}, rect))")
        elif cmd == "C":
            x1, y1, x2, y2, x, y = take(6)
            lines.append(
                f"p.addCurve(to: pt({fmt(x / w)}, {fmt(y / h)}, rect), "
                f"control1: pt({fmt(x1 / w)}, {fmt(y1 / h)}, rect), "
                f"control2: pt({fmt(x2 / w)}, {fmt(y2 / h)}, rect))"
            )
        elif cmd == "Q":
            x1, y1, x, y = take(4)
            lines.append(
                f"p.addQuadCurve(to: pt({fmt(x / w)}, {fmt(y / h)}, rect), "
                f"control: pt({fmt(x1 / w)}, {fmt(y1 / h)}, rect))"
            )
        elif cmd == "Z":
            lines.append("p.closeSubpath()")
        else:
            raise SystemExit(f"unsupported path command {cmd!r} (absolute M/C/L/Q/Z only)")
    return lines


def parse_ellipse(el, w, h):
    cx, cy = float(el.get("cx")), float(el.get("cy"))
    if el.tag.endswith("circle"):
        rx = ry = float(el.get("r"))
    else:
        rx, ry = float(el.get("rx")), float(el.get("ry"))
    return [
        "p.addEllipse(in: CGRect("
        f"x: rect.minX + {fmt((cx - rx) / w)} * rect.width, "
        f"y: rect.minY + {fmt((cy - ry) / h)} * rect.height, "
        f"width: {fmt(2 * rx / w)} * rect.width, "
        f"height: {fmt(2 * ry / h)} * rect.height))"
    ]


def parse_fill(el, name):
    fill = el.get("fill")
    if not fill or not re.fullmatch(r"#[0-9a-fA-F]{6}", fill):
        raise SystemExit(f"#{name}: fill must be #rrggbb (got {fill!r})")
    r, g, b = (int(fill[i:i + 2], 16) / 255 for i in (1, 3, 5))
    opacity = float(el.get("opacity", "1"))
    color = f"Color(red: {fmt(r)}, green: {fmt(g)}, blue: {fmt(b)})"
    return f"CharacterLayer(path: {name}, color: {color}" + (
        f", opacity: {fmt(opacity)})" if opacity != 1 else ")"
    )


def compile_svg(svg_path, out_path, enum_name):
    root = ET.parse(svg_path).getroot()
    vb = [float(v) for v in root.get("viewBox").split()]
    w, h = vb[2], vb[3]

    methods = []
    names = []
    layer_lines = []
    for el in root.iter():
        tag = el.tag.split("}")[-1]
        if tag not in ("path", "circle", "ellipse"):
            continue
        name = el.get("id")
        if not name:
            raise SystemExit(f"every drawable needs an id ({tag} without one)")
        if el.get("transform"):
            raise SystemExit(f"#{name}: transforms aren't compiled — bake them into the coordinates")
        if tag == "path":
            body = parse_path(el.get("d"), w, h)
        else:
            body = parse_ellipse(el, w, h)
        names.append(name)
        layer_lines.append(f"        {parse_fill(el, name)},")
        indented = "\n".join(f"        {line}" for line in body)
        methods.append(
            f"    static func {name}(in rect: CGRect) -> Path {{\n"
            f"        var p = Path()\n{indented}\n        return p\n    }}"
        )
    layers_block = (
        "    /// Paint-order layers with the authored fills.\n"
        "    static let layers: [CharacterLayer] = [\n"
        + "\n".join(layer_lines)
        + "\n    ]"
    )
    methods.append(layers_block)

    swift = (
        f"// GENERATED by ios/tools/svg2shape.py from {svg_path} — DO NOT EDIT.\n"
        f"// Edit the SVG, preview in a browser, then rerun the script.\n"
        f"import SwiftUI\n\n"
        f"/// Layers of the character, unit-normalized from the SVG viewBox.\n"
        f"/// Draw into a rect with `aspectRatio` to keep proportions.\n"
        f"enum {enum_name} {{\n"
        f"    static let aspectRatio: CGFloat = {fmt(w / h)}\n\n"
        + "\n\n".join(methods)
        + "\n\n    private static func pt(_ x: CGFloat, _ y: CGFloat, _ rect: CGRect) -> CGPoint {\n"
        "        CGPoint(x: rect.minX + x * rect.width, y: rect.minY + y * rect.height)\n"
        "    }\n"
        "}\n"
    )
    with open(out_path, "w") as f:
        f.write(swift)
    print(f"wrote {out_path} ({len(names)} layers: {', '.join(names)})")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        raise SystemExit(__doc__)
    compile_svg(*sys.argv[1:])
