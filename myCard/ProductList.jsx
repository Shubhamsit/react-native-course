import { ScrollView, StyleSheet, View, Text ,StatusBar} from "react-native";
import { useEffect, useState } from "react";
import Card1 from "./Cards/Card1";


export default function ProductList() {
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
      <StatusBar hidden={false}/>
      <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems:'center'}}>
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
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  scrollView: {
    backgroundColor: "white",
    flex: 1,
    flexGrow:1,
    width:'100%',
   
  },
});
