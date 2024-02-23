import { userAdapter } from "./user-adapter";
import { userAPI } from "./user-api";

async function getAllUsers() {
    const response = await userAPI.getAllUsers();
    const users = userAdapter.toUser(response);
    return users;
}

async function removeUser(id: string) {
    await userAPI.removeUser(id);
}

export const userService = {
    getAllUsers,
    removeUser,
};
