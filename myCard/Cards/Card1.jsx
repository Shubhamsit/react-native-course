import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Card1 = ({ product }) => {
  const imgurl = product.images[0];
  return (
    <View style={[styles.container]}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: imgurl }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text
          style={[
            styles.title,
            { color: "#131842", marginTop: 30, fontSize: 30 },
          ]}
        >
          {" "}
          ${product.price}
        </Text>
        <Text
          style={[
            styles.title,
            { color: "#CD5C08", marginTop: 10, fontSize: 20 },
          ]}
        >
          {" "}
          {product.rating}☆
        </Text>

        <TouchableOpacity onPress={() => {}} style={styles.btnContainer}>
          <View>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CAF4FF",
    minHeight: 250,
    width: 400,
    padding: 7,
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    marginRight: 5,
    color: "black",
  },
  btnContainer: {
    backgroundColor: "#FFF0F5",
    padding: 10,
    borderRadius: 20,
    width: 150,
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    top: 2,
    right: 1,
  },
  btnText: {
    color: "#1A5319",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
});
