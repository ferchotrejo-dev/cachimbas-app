import { getUser } from "@/api/AuthAPI"
import { useQuery, useQueryClient } from "@tanstack/vue-query"

export const useAuth = () => {
    const queryClient = useQueryClient()

    queryClient.invalidateQueries({ queryKey: ['user'] })
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false
    })

    return { data, isLoading, isError }
}

