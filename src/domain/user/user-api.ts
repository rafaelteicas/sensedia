import { api } from "@/api/api-config";
import { UserResponseType } from "./user-types";

const USER_PATH = "/users";

async function getAllUsers(): Promise<UserResponseType> {
    const response = await api.get(USER_PATH);
    return response.data;
}

async function removeUser(id: string): Promise<void> {
    await api.delete(`${USER_PATH}/${id}`, {
        params: { id },
    });
}

export const userAPI = {
    getAllUsers,
    removeUser,
};
