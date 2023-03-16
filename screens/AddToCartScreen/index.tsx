import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
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
import { deleteCart, getCart } from "../../store/services/cart";

const AddToCartScreen = ({ navigation }: any) => {
  const [addToCart, setAddToCart] = useAtom(cart);
  const [coupleData, setCoupleData] = useState("");
  const [userData, setUserData] = useAtom(user);

  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.productDetails?.price;
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

        {addToCart?.map((item) => {
          return (
            <View
              key={item?._id}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <View style={{}}>
                <Image
                  source={{
                    uri: "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
                  }}
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
                  {item?.productDetails?.name}
                </Text>
                <Text
                  style={{
                    fontFamily: theme.font.fontLight,
                    fontSize: 18,
                  }}
                >
                  ${item?.productDetails?.price}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item?._id);
                      const updatedQuantity = addToCart?.map((i) => {
                        if (i?._id === item?._id) {
                          if (item.quantity - 1 > 0) {
                            return {
                              ...i,
                              quantity: i.quantity - 1,
                            };
                          }
                          return i;
                        }
                        return i;
                      });
                      setAddToCart(updatedQuantity);
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
                    {item?.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      const updatedQuantity = addToCart?.map((i) => {
                        if (i?._id === item?._id) {
                          return {
                            ...i,
                            quantity: i.quantity + 1,
                          };
                        }
                        return i;
                      });
                      setAddToCart(updatedQuantity);
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
                  onPress={() => {
                    Alert.alert(
                      "",
                      "Are you sure you want delete this product from cart",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel",
                        },
                        {
                          text: "OK",
                          onPress: () => {
                            deleteCart({
                              pathParams: {
                                id: item?._id,
                              },
                            }).then(() => {
                              getCart().then((res: any) => {
                                setAddToCart(res?.cartDetails || []);
                              });
                            });
                          },
                        },
                      ]
                    );
                  }}
                  style={{ alignSelf: "flex-end" }}
                  // onPress={() => {
                  //   const deletedData = counter?.filter(
                  //     (item: any) => item.data.id !== addToCartItem?.data?.id
                  //   );
                  //   console.log(deletedData);
                  //   setCounter(deletedData);
                  //   setAddToCart(deletedData);
                  // }}
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
