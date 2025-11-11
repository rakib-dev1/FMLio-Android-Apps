import { StyleSheet, Text } from "react-native";
import Skeleton from "react-native-reanimated-skeleton";

const styles = StyleSheet.create({
    normalText: {
        fontSize: 16,
        color: 'black',
    },
});
const ProductCardSkeleton = () => {
    return (
        <Skeleton
      containerStyle={{ flex: 1, width: 300 }}
      isLoading={false}
      layout={[
        { key: "someId", width: 220, height: 20, marginBottom: 6 },
        { key: "someOtherId", width: 180, height: 20, marginBottom: 6 },
      ]}
    >
      <Text style={styles.normalText}>Your content</Text>
      <Text style={styles.normalText}>Other content</Text>
    </Skeleton>
    )
}

export default ProductCardSkeleton;