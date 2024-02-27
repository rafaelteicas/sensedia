export type UserType = {
    id: string;
    username: string;
    name: string;
    email: string;
    posts: number;
    albums: number;
    city: string;
    days: string;
};

export type UserResponseType = {
    id: string; // "73da3b81-1978-47bc-b954-3feb13a74b88";
    username: string;
    name: string; // "User_1556468d-db10-462f-90ef-7236980c723f";
    email: string; //  "user_1556468d-db10-462f-90ef-7236980c723f@example.com";
    posts: number;
    albums: number;
    city: string;
    days: string;
    created_at: string; //  "2024-02-22T16:56:21.73754-03:00";
    updated_at: string; //  "2024-02-22T16:56:21.73754-03:00";
};

export type RegisterUserType = {
    name: string;
    email: string;
    username: string;
    city: string;
    days: string;
    password?: string;
};
