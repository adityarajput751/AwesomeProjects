import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { itemData } from "./DB";

const ItemPage = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart", { cartItems })}
      >
        <Text
          style={{
            padding: 10,
            backgroundColor: "green",
            width: 60,
            color: "white",
          }}
        >
          Cart
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        {itemData.map((item) => {
          return (
            <View
              style={{
                height: 50,
                borderWidth: 1,
                marginBottom: 15,
                paddingHorizontal: 10,
              }}
              key={item.id}
            >
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Text style={{ alignSelf: "flex-end", color: "blue" }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ItemPage;