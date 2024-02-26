import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "../user-service";
import { MutationOptions } from "@/types/mutation-types";

export function useRemoveUser(options?: MutationOptions) {
    const queryClient = useQueryClient();
    const mutation = useMutation<void, Error, string>({
        mutationKey: ["removeUser"],
        mutationFn: (id) => userService.removeUser(id),
        onSuccess: () => {
            if (options?.onSuccess) {
                options.onSuccess();
            }
            queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
        },
        onError: () => {
            if (options?.onError) {
                options.onError();
            }
        },
        onSettled: () => {
            if (options?.onSettled) {
                options.onSettled();
            }
        }
    });
    return {
        remove: (id: string) => mutation.mutate(id),
    };
}
