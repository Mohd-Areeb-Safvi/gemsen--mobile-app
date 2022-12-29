import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import { cart } from "../../stores/user";
import { useAtom } from "jotai";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";

const AddToCartScreen = () => {
  const [addToCart, setAddToCart] = useAtom(cart);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    setCounter(addToCart);
    return () => {};
  }, []);

  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.data.price;
  }, 0);

  console.log(totalPrice);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />

      <Text
        style={{ fontFamily: theme.font.fontMedium, fontSize: 25, padding: 20 }}
      >
        Cart
      </Text>
      {counter?.map((addToCartItem: any) => {
        return (
          <View
            key={addToCartItem.data.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flex: 1 / 3,
              }}
            >
              <Image
                source={{ uri: addToCartItem?.data?.productImage[0] }}
                style={{
                  width: 100,
                  height: 150,
                  borderWidth: 0.5,
                  borderColor: theme.colors.text,
                }}
              />
            </View>

            <View style={{ flex: 1 / 3 }}>
              <Text>{addToCartItem.data.productName}</Text>
              <Text>${addToCartItem.data.price}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    const data: any = counter?.map((counterItem: any) => {
                      if (
                        counterItem.data.id === addToCartItem.data.id &&
                        counterItem?.quantity > 0
                      ) {
                        return {
                          ...counterItem,
                          quantity: counterItem.quantity - 1,
                        };
                      } else {
                        return counterItem;
                      }
                    });

                    setCounter(data);
                    setAddToCart(data);
                  }}
                  style={{
                    borderWidth: 0.2,
                    borderColor: "#545d63",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <Ionicons name="remove" size={30} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 18,
                    padding: 10,
                  }}
                >
                  {addToCartItem.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    const data: any = counter?.map((counterItem: any) => {
                      if (counterItem.data.id === addToCartItem.data.id) {
                        return {
                          ...counterItem,
                          quantity: counterItem.quantity + 1,
                        };
                      } else {
                        return counterItem;
                      }
                    });

                    setCounter(data);
                    setAddToCart(data);
                  }}
                  style={{
                    borderWidth: 0.2,
                    borderColor: "#545d63",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  }}
                >
                  <Ionicons name="add" size={30} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 / 3 }}>
              <TouchableOpacity
                style={{ alignSelf: "flex-end" }}
                onPress={() => {
                  const deletedData = counter?.filter(
                    (item: any) => item.data.id !== addToCartItem?.data?.id
                  );
                  console.log(deletedData);
                  setCounter(deletedData);
                  setAddToCart(deletedData);
                }}
              >
                <Ionicons name="trash-outline" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default AddToCartScreen;
