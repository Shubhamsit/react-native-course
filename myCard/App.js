import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import Card1 from "./Cards/Card1";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => data.products)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {products.map((product) => (
          <Card1 key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: "white",
    flex: 1,
  },
});
