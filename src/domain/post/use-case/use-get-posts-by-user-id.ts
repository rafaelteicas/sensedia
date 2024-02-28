import { useQuery } from "@tanstack/react-query";
import { postService } from "../post-service";

export function useGetPostsByUserId(userId: string) {
    const query = useQuery({
        queryKey: ["getPostsByUserId", userId],
        queryFn: () => postService.getPostsByUserId(userId),
        retry: false,
    });

    return {
        posts: query.data,
        isError: query.isError,
        isLoading: query.isLoading,
    };
}
