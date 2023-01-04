import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import {
  addressListJotai,
  cart,
  shippingMethodsJotai,
} from "../../stores/user";
import { useAtom } from "jotai";

const ShippingAddressScreen = ({ navigation }: any) => {
  const [shippingMethods, setShippingMethods] = useAtom(shippingMethodsJotai);
  const [addressData, setAddressData] = useAtom(addressListJotai);
  const [addToCart, setAddToCart] = useAtom(cart);
  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.data.price;
  }, 0);
  const methods = [
    {
      id: 1,
      price: 0,
      text1: "Free",
      text2: "Pickup at GEMSEN",
    },
    {
      id: 2,
      price: 0,
      text1: "Free Ground",
      text2: "Ground",
    },
    {
      id: 3,
      price: 0,
      text1: "Freight ",
      text2: "Air",
    },
  ];

  const addressList = [
    {
      id: 1,
      text1: "Staff purchase 1",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
    },
    {
      id: 2,
      text1: "Staff purchase 2",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
    },
    {
      id: 3,
      text1: "Staff purchase 3",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{}}>
          <View style={{ backgroundColor: "#f4f4f4", padding: 20 }}>
            <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 19 }}>
              Estimated Total
            </Text>
            <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 16 }}>
              ${totalPrice}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 19,
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            Shipping Address
          </Text>

          <View
            style={{
              // width: "90%",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            {addressList?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setAddressData(item);
                  }}
                  key={item.id}
                  style={{
                    width: "45%",
                    borderWidth: 0.5,
                    borderColor:
                      item.id === addressData?.id
                        ? theme.colors.btncolor
                        : "#ccc",
                    marginHorizontal: 10,
                    padding: 10,
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
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text2}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text3}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text4}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: theme.font.fontLight, fontSize: 19 }}>
            Shipping Address
          </Text>
          <View
            style={{ backgroundColor: "#f4f4f4", padding: 10, marginTop: 10 }}
          >
            {methods?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setShippingMethods(item);
                  }}
                  key={item.id}
                  style={{ flexDirection: "row", paddingVertical: 10 }}
                >
                  <Ionicons
                    name={
                      shippingMethods?.id === item.id
                        ? "stop-circle"
                        : "ellipse-outline"
                    }
                    color={
                      shippingMethods?.id === item.id
                        ? theme.colors.btncolor
                        : "#000"
                    }
                    size={20}
                  />
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    ${item.price?.toFixed(2)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.text2}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PaymentMethodScreen");
          }}
          style={{
            backgroundColor: theme.colors.btncolor,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 18,
              color: "#fff",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;
