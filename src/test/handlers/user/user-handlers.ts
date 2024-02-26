import { USER_PATH } from "@/domain/user/user-api";
import { mockedData } from "./mock";
import { http, HttpResponse } from "msw";

const BASE_URL = process.env.API_URL;

export const FULL_URL = `${BASE_URL}${USER_PATH}`;

let inMemoryData = { ...mockedData.userAPI };

export const userHandlers = [
    http.get(FULL_URL, async () => {
        const response = inMemoryData;

        return HttpResponse.json(response, { status: 200 });
    }),
];
