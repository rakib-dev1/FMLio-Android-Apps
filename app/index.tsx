import Products from "@/components/products/products";
import Banner from "@/components/shared/banner/banner";
import Screen from "@/components/shared/layout/Screen";

export default function App() {
  return (
    <Screen>
      <Banner />
      <Products />
    </Screen>
  );
}