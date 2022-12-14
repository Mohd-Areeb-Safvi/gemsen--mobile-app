import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import { cart, counterValueJotai, user } from "../../stores/user";
import { useAtom } from "jotai";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "../SplashScreen";

const AddToCartScreen = ({ navigation }: any) => {
  const [addToCart, setAddToCart] = useAtom(cart);
  const [counter, setCounter] = useAtom(counterValueJotai);
  const [coupleData, setCoupleData] = useState("");
  const [userData, setUserData] = useAtom(user);
  useEffect(() => {
    setCounter(addToCart);
    return () => {};
  }, []);

  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.data.price;
  }, 0);
  const data = async () => {
    await AsyncStorage.setItem(
      `cart${userData.name}`,
      JSON.stringify({ cart: addToCart })
    );
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />
      <KeyboardAwareScrollView>
        <Text
          style={{
            fontFamily: theme.font.fontMedium,
            fontSize: 25,
            padding: 20,
          }}
        >
          Shopping Cart
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
              <View style={{}}>
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

              <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <Text
                  style={{
                    fontFamily: theme.font.fontLight,
                    fontSize: 13,
                  }}
                >
                  {addToCartItem.data.productName}
                </Text>
                <Text
                  style={{
                    fontFamily: theme.font.fontLight,
                    fontSize: 18,
                  }}
                >
                  ${addToCartItem.data.price}
                </Text>
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
              <View style={{}}>
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

        {addToCart?.length > 0 ? (
          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 20,
                borderWidth: 1,
                borderColor: theme.colors.primary,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <TextInput
                onChangeText={(e) => {
                  setCoupleData(e);
                }}
                placeholder="Enter Coupon code"
                placeholderTextColor={theme.colors.primary}
                style={{ fontFamily: theme.font.fontMedium }}
              />
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: theme.colors.primary,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 18,
                }}
              >
                SubTotal
              </Text>
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 18,
                }}
              >
                ${totalPrice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 18,
                }}
              >
                Promo Discount
              </Text>
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 18,
                }}
              >
                $0
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 18,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontFamily: theme.font.fontLight,
                  fontSize: 18,
                }}
              >
                ${totalPrice}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ShippingAddressScreen");
              }}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 10,
                backgroundColor: "#f36f3e",
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontMedium,
                  fontSize: 18,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Proceed to checkout
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text>You have no items in your shopping cart.</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Click</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text>here</Text>
              </TouchableOpacity>
              <Text>to continue shopping.</Text>
            </View>
          </>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddToCartScreen;
