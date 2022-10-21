import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
const HomeScreen = () => {
  const imageScroller = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          style={{ width: 50, height: 50, marginLeft: 20 }}
        />
      </View>
      <ScrollView horizontal style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", height: 40 }}>
          {imageScroller?.map((item) => {
            return (
              <View
                style={{
                  width: width,
                  backgroundColor: "red",
                }}
              >
                <Text>{item.id}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
