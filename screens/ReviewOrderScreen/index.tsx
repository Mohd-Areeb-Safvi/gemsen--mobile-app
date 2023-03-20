import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import {
  addressListJotai,
  cart,
  counterValueJotai,
  shippingMethodsJotai,
  user,
} from "../../stores/user";
import { useAtom } from "jotai";
import theme from "../../theme";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addOrder } from "../../store/services/order";

const ReviewOrderScreen = ({ navigation }: any) => {
  const [addressData] = useAtom(addressListJotai);
  const [addToCart, setAddToCart] = useAtom(cart);
  const [userData, setUserData] = useAtom(user);
  const [shippingMethods] = useAtom(shippingMethodsJotai);
  const [counter, setCounter] = useAtom(counterValueJotai);

  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.productDetails?.price;
  }, 0);
  const taxAmount =
    addressData?.state === "Sdf"
      ? totalPrice * 0.13
      : addressData?.state === "ABC"
      ? totalPrice * 0.1
      : 0;
  const data = [
    {
      id: 1,
      text1: "Cart Subtotal",
      price: `$${totalPrice.toString()}`,
    },
    {
      id: 2,
      text1: "Customer Discount",
      price: "$0",
    },
    {
      id: 3,
      text1: "Shipping",
      price: `$${shippingMethods?.price}`,
    },
    {
      id: 4,
      text1: "Tax",
      price: `$${taxAmount}`,
    },
    {
      id: 5,
      text1: "Totol",
      price: `$${totalPrice + shippingMethods?.price + taxAmount}`,
    },
  ];

  const cartData = addToCart?.map((item) => {
    return {
      productId: item?.productId,
      quantity: item?.quantity,
    };
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 18 }}>
            Order Summary
          </Text>
          <List.Section>
            <List.Accordion
              title={
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 17,
                      marginRight: 5,
                    }}
                  >
                    {/* {addToCart?.length} */}
                  </Text>
                  <Text
                    style={{ fontFamily: theme.font.fontLight, fontSize: 17 }}
                  >
                    items in cart
                  </Text>
                </View>
              }
            >
              {addToCart?.map((item: any, index) => {
                console.log("price", item?.productDetails?.price);
                return (
                  <View
                    key={item?._id}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "#fff",
                      alignItems: "center",
                      paddingHorizontal: 20,
                    }}
                  >
                    <View>
                      <Image
                        source={{
                          uri: "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
                        }}
                        style={{ width: 50, height: 80, resizeMode: "repeat" }}
                      />
                    </View>
                    <View style={{ width: "60%" }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontFamily: theme.font.fontLight,
                          fontSize: 12,
                        }}
                      >
                        {item?.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: theme.font.fontMedium,
                          marginTop: 6,
                          fontSize: 12,
                        }}
                      >
                        QTY: {item?.quantity}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: theme.font.fontMedium,
                          fontSize: 14,
                        }}
                      >
                        ${item?.productDetails?.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </List.Accordion>
          </List.Section>
        </View>

        <View style={{ paddingHorizontal: 23 }}>
          {data?.map((item) => {
            return (
              <View key={item.id}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 15,
                    }}
                  >
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      fontSize: 15,
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        <View style={{ paddingHorizontal: 23, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,
              }}
            >
              {addressData?.type} address
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ShippingAddressScreen");
              }}
            >
              <Ionicons name="pencil-outline" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.black,

                fontSize: 14,
                paddingVertical: 4,
              }}
            >
              {addressData.address}
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.black,

                fontSize: 14,
                paddingVertical: 4,
              }}
            >
              {addressData.city}
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.black,

                fontSize: 14,
                paddingVertical: 4,
              }}
            >
              {addressData.state}
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.black,

                fontSize: 14,
                paddingVertical: 4,
              }}
            >
              {addressData.zipCode}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 23, marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,
              }}
            >
              Shipping Method
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ShippingAddressScreen");
              }}
            >
              <Ionicons name="pencil-outline" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.black,

                fontSize: 14,
                paddingVertical: 4,
              }}
            >
              {shippingMethods.text2}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            // await AsyncStorage.removeItem(`cart${userData.name}`);
            // setCounter([]);
            // setAddToCart([]);
            // navigation.navigate("SucessOrderScreen");

            addOrder({
              body: {
                cartData,
              },
            }).then((res) => {
              setAddToCart([]);
              navigation.navigate("SucessOrderScreen");
            });
          }}
          style={{
            backgroundColor: theme.colors.btncolor,
            paddingVertical: 9,
            width: 140,
            margin: 20,
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 15,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Place Order
          </Text>
        </TouchableOpacity>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewOrderScreen;
