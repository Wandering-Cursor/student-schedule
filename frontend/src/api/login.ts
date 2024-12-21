import { api } from "@/api/base.ts";
import type { Client as StudentScheduleClient } from "@/api/openapi.d.ts";

async function login(params: { username: string, password: string }) {
    const client = await api.getClient<StudentScheduleClient>();
    return await client.auth_login_create(
        null,
        params,
    )
}

export { login };