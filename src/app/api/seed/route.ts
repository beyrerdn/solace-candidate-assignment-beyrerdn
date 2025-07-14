import db from "../../../db";
import { advocatesTable } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function POST() {
  const records = await db.insert(advocatesTable).values(advocateData).returning();

  return Response.json({ advocates: records });
}
