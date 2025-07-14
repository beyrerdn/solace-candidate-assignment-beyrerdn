import { Advocate } from "@/app/entities/advocate";
import { AdvocateRepositoryPostgres } from "@/db/repositories/advocate";
import { adaptRequestToDataModel } from "./abstractions/adaptRequestToDataModel";

export const AdvocateController = {
  list: async () => {
    try {
      return AdvocateRepositoryPostgres.findAll();
    } catch(err) {
      console.log("Error listing advocates: ", err)
    }
  },
  create: async (data: Advocate) => {
    try {
        const dataModel = adaptRequestToDataModel(data);
        const res = await AdvocateRepositoryPostgres.create(dataModel);
        console.log("res: ", res)
        return res;
    } catch(err) {
      console.log("Error inserting an advocate: ", err)
    }
  }
}

