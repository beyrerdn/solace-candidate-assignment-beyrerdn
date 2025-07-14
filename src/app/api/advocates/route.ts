import { AdvocateRepositoryPostgres } from "@/db/repositories/advocate";
import { AdvocateController } from '../controllers/advocates';
import { Advocate } from "@/app/entities/advocate";

export async function GET() {
  // Uncomment this line to use a database
  const data = await AdvocateController.list()

  return Response.json({ data });
}

export async function POST(request: Request) {
   const data = await request.json() as Advocate;
   const response = await AdvocateController.create(data);
   return Response.json({ data: response })
}
