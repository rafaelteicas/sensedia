import { useQuery } from "@tanstack/react-query";
import { userService } from "../user-service";

export function useGetAllUsers() {
    const query = useQuery({
        queryKey: ["getAllUsers"],
        queryFn: () => userService.getAllUsers(),
    });

    return {
        data: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        isFetching: query.isFetching,
        refetch: query.refetch,
    };
}
