import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderAfterLogin = ({ value, center, icon }: any) => {
  const navigation: any = useNavigation();
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
        <Ionicons name="cart" color="#fff" size={28} />
      </View>
    </View>
  );
};

export default HeaderAfterLogin;
