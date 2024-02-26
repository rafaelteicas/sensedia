import { api } from "@/api/api-config";
import { RegisterUserType, UserResponseType } from "./user-types";

export const USER_PATH = "/users";

async function getAllUsers(): Promise<UserResponseType[]> {
    const response = await api.get(USER_PATH);

    return response.data.users;
}

async function removeUser(id: string): Promise<void> {
    await api.delete(`${USER_PATH}/${id}`, {
        params: { id },
    });
}

async function getUserById(userId: string): Promise<UserResponseType> {
    const response = await api.get(`${USER_PATH}/${userId}`);
    return response.data.user;
}

async function registerUser(data: RegisterUserType): Promise<void> {
    await api.post(`${USER_PATH}/create`, data);
}

export const userAPI = {
    getAllUsers,
    removeUser,
    registerUser,
    getUserById,
};
