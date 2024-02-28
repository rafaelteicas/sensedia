import { api } from "@/api/api-config";
import { PostResponseType } from "./post-types";

async function getPostsByUserId(userId: string): Promise<PostResponseType[]> {
    const response = await api.get(`/users/${userId}/posts`);
    return response.data.posts;
}

export const postAPI = {
    getPostsByUserId,
};
