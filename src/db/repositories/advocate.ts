import { Repository } from "./interfaces/repository";
import { Advocate } from "../dataModels/advocate";
import { advocatesTable } from "../schema";
import db from "..";
import { adaptAdvocateValuesForInsert } from "./adapters/adaptAdvocateValuesForInsert";

export const AdvocateRepositoryPostgres: Repository<Advocate> = {
    findAll: async () => {
      return db.select().from(advocatesTable) as unknown as Advocate[];
    },
    create: async (data: Advocate) => {
      const values = adaptAdvocateValuesForInsert(data);
      console.log('Insert values: ', values)
      return db.insert(advocatesTable).values(values).returning() as unknown as Advocate;
    }
  }