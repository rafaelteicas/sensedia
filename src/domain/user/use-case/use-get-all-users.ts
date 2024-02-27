import { useQuery } from "@tanstack/react-query";
import { userService } from "../user-service";

export function useGetAllUsers({ search }: { search: string }) {
    const query = useQuery({
        queryKey: ["getAllUsers", search],
        retry: false,
        queryFn: () => {
            const data = userService.getAllUsers();
            if (search) {
                const searchResult = data.then((agents) =>
                    agents.filter((agent) =>
                        agent.name.toLowerCase().includes(search.toLowerCase())
                    )
                );

                return searchResult;
            } else {
                return data;
            }
        },
    });

    return {
        data: query.data,
        isLoading: query.isLoading,
        isError: query.isError,
        isFetching: query.isFetching,
        refetch: query.refetch,
    };
}
