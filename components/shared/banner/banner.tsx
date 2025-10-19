
import { useBanners } from '@/hooks/fetcher';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window'); // full width of screen
const HEIGHT = 200; // height of banner

export default function Banner() {
    const [ data, isLoading, error ] = useBanners();
    if (isLoading) return <Text>Loading...</Text>;
    return (
        <View style={styles.wrapper}>
            <PagerView style={styles.container} initialPage={0}>
                {data?.map((item: any) => (
                    <View key={item.id} style={styles.page}>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                ))}
            </PagerView>
         
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 0,
    },
    container: {
        width: width,
        height: HEIGHT,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: HEIGHT,
    },
    label: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
