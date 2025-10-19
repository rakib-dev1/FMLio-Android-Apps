import { useProducts } from "@/hooks/fetcher";
import { Text, ToastAndroid, View } from "react-native";
import ProductCard from "../shared/card/productCard";

export default function Products() {
const [data,isLoading,error] = useProducts();
if(isLoading) return <Text>Loading...</Text>;
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Products:{data?.length}</Text>
           <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {data?.map((item: any) => (
                    <ProductCard
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onPress={() => ToastAndroid.show('Product clicked!', ToastAndroid.SHORT)}
                    key={item.id}
                  />
                  
                ))}
           </View>
        </View>    );
}