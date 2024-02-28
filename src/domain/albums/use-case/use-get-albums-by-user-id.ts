import { useQuery } from "@tanstack/react-query";
import { albumsService } from "../albums-service";

export function useGetAlbumsByUserId(userId: string) {
    const query = useQuery({
        queryKey: ["getAlbumsByUserId", userId],
        queryFn: () => albumsService.getAlbumsByUserId(userId),
        retry: false,
    });

    return {
        albums: query.data,
        isError: query.isError,
        isLoading: query.isLoading,
    };
}
