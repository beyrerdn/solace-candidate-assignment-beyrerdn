import { Param, sql } from "drizzle-orm";
import { Advocate } from "@/db/dataModels/advocate";

export const adaptAdvocateValuesForInsert = (dataModel: Advocate) => {
  return {
    ...dataModel,
    specialties: sql`${dataModel.specialties}::jsonb`,
  }
}