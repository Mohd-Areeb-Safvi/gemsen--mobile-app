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
import { cart } from "../../stores/user";
import { useAtom } from "jotai";

const ShippingAddressScreen = () => {
  const [shippingMethods, setShippingMethods] = useState(1);
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View style={{ backgroundColor: "#f4f4f4", padding: 10 }}>
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
            }}
          >
            Shipping Address
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: theme.colors.btncolor,
              width: "90%",
              marginTop: 30,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.btncolor,
                textTransform: "uppercase",
                fontSize: 14,
                paddingVertical: 8,
              }}
            >
              Staff purchase
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.btncolor,
                textTransform: "uppercase",
                fontSize: 14,
                paddingVertical: 8,
              }}
            >
              Staff purchase
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.btncolor,
                textTransform: "uppercase",
                fontSize: 14,
                paddingVertical: 8,
              }}
            >
              Staff purchase
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                color: theme.colors.btncolor,
                textTransform: "uppercase",
                fontSize: 14,
                paddingVertical: 8,
              }}
            >
              Staff purchase
            </Text>
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
                    setShippingMethods(item.id);
                  }}
                  key={item.id}
                  style={{ flexDirection: "row", paddingVertical: 10 }}
                >
                  <Ionicons
                    name={
                      shippingMethods === item.id
                        ? "stop-circle"
                        : "ellipse-outline"
                    }
                    color={
                      shippingMethods === item.id
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
