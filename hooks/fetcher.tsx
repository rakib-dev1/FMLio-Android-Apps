import axiosPublic from "@/services/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useProducts = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('https://fakestoreapi.com/products'),
    });
    console.log(data?.data);
    return [ data?.data, isLoading, error ];
}
export const useBanners = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['banner'],
        queryFn: () => axiosPublic.get('/banner?q=top-banner'),
    });
    return [ data?.data, isLoading, error ];
}