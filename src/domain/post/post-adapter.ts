import { PostResponseType, PostType } from "./post-types";

function toPost(post: PostResponseType): PostType {
    return {
        id: post.id,
        user_id: post.user_id,
        content: post.content,
    };
}

export const postAdapter = {
    toPost,
};
