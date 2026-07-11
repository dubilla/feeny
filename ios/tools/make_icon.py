#!/usr/bin/env python3
"""Compose the app icon from the mascot SVG and render it to PNG.

The icon is Feeny on a gold storybook sun over warm paper. Rerun after any
mascot geometry change:
  python3 ios/tools/make_icon.py
Rendering uses headless Chrome (the only SVG rasterizer on this machine).
"""
import os
import subprocess
import tempfile

ROOT = os.path.join(os.path.dirname(__file__), "..")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

svg = open(os.path.join(ROOT, "DesignAssets", "feeny.svg")).read()
inner = svg.split(">", 1)[1].rsplit("</svg>", 1)[0]
icon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" fill="#fff7eb"/>
  <circle cx="512" cy="575" r="385" fill="#ffe3a8"/>
  <g transform="translate(152,122) scale(3.6)">
{inner}
  </g>
</svg>'''

out = os.path.join(ROOT, "Feeny", "Assets.xcassets", "AppIcon.appiconset", "icon.png")
with tempfile.TemporaryDirectory() as td:
    svg_path = os.path.join(td, "icon.svg")
    html_path = os.path.join(td, "icon.html")
    open(svg_path, "w").write(icon)
    open(html_path, "w").write(
        '<!doctype html><html><head><style>body{margin:0}img{display:block}'
        '</style></head><body><img src="icon.svg" width="1024" height="1024"></body></html>'
    )
    subprocess.run(
        [CHROME, "--headless", "--disable-gpu", f"--screenshot={out}",
         "--window-size=1024,1024", "--hide-scrollbars", f"file://{html_path}"],
        check=True, capture_output=True,
    )
print(f"wrote {out}")
