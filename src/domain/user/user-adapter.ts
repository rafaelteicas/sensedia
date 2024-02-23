import { UserResponseType, UserType } from "./user-types";

function toUser(userAPI: UserResponseType): UserType[] {
    const users = userAPI.users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            posts: user.posts,
            albums: user.albums,
            city: user.city,
            days: user.days,
        };
    });

    return users;
}

export const userAdapter = {
    toUser,
};
