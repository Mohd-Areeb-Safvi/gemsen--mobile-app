import { View, Text, Image } from "react-native";
import React from "react";
import theme from "../../theme";

const HeaderAfterLogin = ({ value, center }: any) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#222",
        paddingVertical: 20,
      }}
    >
      <Image
        source={{
          uri: "https://gemsen.com/media/logo/stores/1/cropped-logo_1_.png",
        }}
        style={{
          width: 70,
          height: 70,
          marginLeft: 20,
          alignSelf: "center",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default HeaderAfterLogin;
