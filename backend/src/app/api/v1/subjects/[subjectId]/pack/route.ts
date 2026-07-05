import { NextResponse } from "next/server";
import { buildSubjectPack } from "@/lib/pack-builder";

export const dynamic = "force-dynamic";

/** GET /api/v1/subjects/:subjectId/pack — whole-subject lesson pack, ETag'd by content version. */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ subjectId: string }> },
) {
  const { subjectId } = await params;
  const pack = await buildSubjectPack(subjectId);
  if (!pack) {
    return NextResponse.json({ error: `unknown subject: ${subjectId}` }, { status: 404 });
  }

  const etag = `"${subjectId}-v${pack.version}"`;
  if (request.headers.get("if-none-match") === etag) {
    return new Response(null, { status: 304, headers: { ETag: etag } });
  }

  return NextResponse.json(pack, { headers: { ETag: etag } });
}
