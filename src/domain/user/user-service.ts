import { userAdapter } from "./user-adapter";
import { userAPI } from "./user-api";
import { RegisterUserType } from "./user-types";

async function getAllUsers() {
    const response = await userAPI.getAllUsers();
    const users = userAdapter.toUser(response);
    return users;
}

async function removeUser(id: string) {
    await userAPI.removeUser(id);
}

async function registerUser(data: RegisterUserType): Promise<void> {
    await userAPI.registerUser(data);
}

export const userService = {
    getAllUsers,
    removeUser,
    registerUser,
};
