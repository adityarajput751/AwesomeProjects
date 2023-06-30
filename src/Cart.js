import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Cart = ({ route }) => {
  const { cartItems } = route.params;
  const [cartItemsState, setCartItems] = useState(cartItems);

  const removeItem = (itemId) => {
    const updatedItems = cartItemsState.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
      {cartItemsState.map((item) => (
        <View
          key={item.id}
          style={{ padding: 10, backgroundColor: "blue", marginBottom: 10 }}
        >
          <Text style={{ color: "white" }}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Text style={{ color: "blue", alignSelf:'flex-end' , width: 60, backgroundColor:'white'}}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Cart;
