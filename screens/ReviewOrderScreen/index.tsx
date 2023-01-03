import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import { cart } from "../../stores/user";
import { useAtom } from "jotai";
import theme from "../../theme";

const ReviewOrderScreen = () => {
  const [addToCart] = useAtom(cart);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 18 }}>
            Order Summary
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontLight,
                fontSize: 17,
                marginRight: 5,
              }}
            >
              {addToCart?.length}
            </Text>
            <Text style={{ fontFamily: theme.font.fontLight, fontSize: 17 }}>
              items in cart
            </Text>
          </View>
        </View>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewOrderScreen;
