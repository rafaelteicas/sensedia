import { useMutation } from "@tanstack/react-query";
import { RegisterUserType } from "../user-types";
import { userService } from "../user-service";
import { MutationOptions } from "@/types/mutation-types";

export function useRegisterUser(options?: MutationOptions) {
    const mutation = useMutation<void, Error, RegisterUserType>({
        mutationFn: (data) => userService.registerUser(data),
        onSuccess: () => {
            if (options?.onSuccess) {
                options.onSuccess();
            }
        },
        onError: () => {
            if (options?.onError) {
                options.onError();
            }
        },
    });

    return {
        registerUser: (data: RegisterUserType) => mutation.mutate(data),
        isPending: mutation.isPending,
    };
}
