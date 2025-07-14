import { Advocate } from "@/app/entities/advocate";
import { Advocate as AdvocateDataModel} from "@/db/dataModels/advocate"

export const adaptRequestToDataModel = (data: Advocate): AdvocateDataModel => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    city: data.city,
    degree: data.degree,
    specialties: JSON.stringify(data.specialties),
    yearsOfExperience: data.yearsOfExperience,
    phoneNumber: data.phoneNumber,
    createdAt: new Date()
  }
}