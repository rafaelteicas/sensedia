import { postAdapter } from "./post-adapter";
import { postAPI } from "./post-api";
import { PostType } from "./post-types";

async function getPostsByUserId(userId: string): Promise<PostType[]> {
    const response = await postAPI.getPostsByUserId(userId);
    return response.map((post) => postAdapter.toPost(post));
}

export const postService = {
    getPostsByUserId,
};
