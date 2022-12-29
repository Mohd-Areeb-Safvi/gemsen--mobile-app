import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { cart } from "../../stores/user";

const HeaderAfterLogin = ({ value, center, icon }: any) => {
  const navigation: any = useNavigation();
  const [addToCart, setAddToCart] = useAtom(cart);

  const totalcartLength = addToCart?.reduce(
    (prev: any, curr: any) => prev + curr.quantity,
    0
  );

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#222",
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 / 3 }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name={icon} color="#fff" size={30} />
      </TouchableOpacity>
      <View style={{ flex: 1 / 3 }}>
        <Image
          source={{
            uri: "https://gemsen.com/media/logo/stores/1/cropped-logo_1_.png",
          }}
          style={{
            width: 70,
            height: 70,
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1 / 3,
          justifyContent: "flex-end",
        }}
      >
        <Ionicons
          name="search"
          color="#fff"
          size={28}
          style={{ marginRight: 30 }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddToCartScreen");
          }}
        >
          <View
            style={{
              position: "absolute",
              right: 2,
              top: -4,
              backgroundColor: theme.colors.primary,
              paddingHorizontal: 3,
              zIndex: 10,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontFamily: theme.font.fontMedium }}>
              {totalcartLength}
            </Text>
          </View>

          <Ionicons name="cart" color="#fff" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderAfterLogin;
