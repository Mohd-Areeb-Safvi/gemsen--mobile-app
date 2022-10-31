import { View, Text, Image } from "react-native";
import React from "react";
import theme from "../../theme";

const Header = ({ value }: any) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#222",
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={{
          uri: "https://gemsen.com/media/logo/stores/1/cropped-logo_1_.png",
        }}
        style={{ width: 50, height: 50, marginLeft: 20 }}
      />
      <Text
        style={{
          color: "#fff",
          fontFamily: theme.font.fontRobotoBold,
          fontSize: 20,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          color: "#222",
          fontSize: 20,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Header;
