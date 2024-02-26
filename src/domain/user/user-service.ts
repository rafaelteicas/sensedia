import { userAdapter } from "./user-adapter";
import { userAPI } from "./user-api";
import { RegisterUserType, UserType } from "./user-types";

async function getAllUsers(): Promise<UserType[]> {
    const response = await userAPI.getAllUsers();
    return response.map((user) => userAdapter.toUser(user));
}

async function removeUser(id: string) {
    await userAPI.removeUser(id);
}

async function registerUser(data: RegisterUserType): Promise<void> {
    await userAPI.registerUser(data);
}

async function getUserById(userId: string): Promise<UserType> {
    const response = await userAPI.getUserById(userId);

    return userAdapter.toUser(response);
}

export const userService = {
    getAllUsers,
    removeUser,
    registerUser,
    getUserById,
};
