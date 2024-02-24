import { UserResponseType, UserType } from "./user-types";

function toUser(user: UserResponseType): UserType {
    return {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        posts: user.posts,
        albums: user.albums,
        city: user.city,
        days: user.days,
    };
}

export const userAdapter = {
    toUser,
};
