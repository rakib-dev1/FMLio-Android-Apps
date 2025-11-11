import axiosPublic from "@/services/axiosPublic";
import { useQuery } from "@tanstack/react-query";



export const useProducts = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => axiosPublic.get('/products'),
    });
    return [ data?.data.data, isLoading, error ];
}
export const useBanners = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['banner'],
        queryFn: () => axiosPublic.get('/banner?q=top-banner'),
    });
    return [ data?.data, isLoading, error ];
}