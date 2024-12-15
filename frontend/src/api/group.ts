import { OpenAPIClientAxios } from "openapi-client-axios/client";
import type { Client as StudentScheduleClient } from "./openapi.d.ts";

const api = new OpenAPIClientAxios({
  definition: "http://localhost:8000/api/schema/",
  axiosConfigDefaults: {
    baseURL: "http://localhost:8000",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }
});
api.init();


async function getGroups(params: {name?: string, page?: number, specialty?: string} | null) {
  const client = await api.getClient<StudentScheduleClient>();
  return await client.org_group_list(params)
}

export { getGroups };
