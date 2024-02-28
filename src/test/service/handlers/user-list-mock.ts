import { UserResponseType } from "@/domain";
import { http, HttpResponse } from "msw";

export const userListMock = http.get("/users", async () => {
    const response: UserResponseType = {
        id: "73da3b81-1978-47bc-b954-3feb13a74b88",
        username: "User_1556468d-db10-462f-90ef-7236980c723f",
        name: "User_1556468d-db10-462f-90ef-7236980c723f",
        email: "user_1556468d-db10-462f-90ef-7236980c723f@example.com",
        posts: 0,
        albums: 0,
        city: "",
        days: "",
        created_at: "2024-02-22T16:56:21.73754-03:00",
        updated_at: "2024-02-22T16:56:21.73754-03:00",
    };
    return HttpResponse.json({ users: [response] });
});
