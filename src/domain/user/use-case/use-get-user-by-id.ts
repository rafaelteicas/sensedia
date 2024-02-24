import { useQuery } from "@tanstack/react-query";
import { userService } from "../user-service";

export function useGetUserById(userId: string) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["getUserById", userId],
        queryFn: () => userService.getUserById(userId),
    });

    return { data, isLoading, isError };
}
