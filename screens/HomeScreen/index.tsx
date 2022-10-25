import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
const { width } = Dimensions.get("window");
const HomeScreen = () => {
  const [indexValue, setIndexValue] = useState(0);
  const imageScroller = [
    {
      id: 1, //0
      img: "https://gemsen.com/media/wysiwyg/MobileAudio_1518x516_2_1.jpg",
    },
    {
      id: 2, //1
      img: "https://gemsen.com/media/wysiwyg/marine.jpg",
    },
    {
      id: 3, //2
      img: "https://gemsen.com/media/wysiwyg/powersports.jpg",
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
      <View style={{ marginTop: 30 }}>
        <ScrollView
          scrollEventThrottle={14}
          onScroll={(e: any) => {
            const indexValue = e.nativeEvent.contentOffset.x / width;
            setIndexValue(Math.round(indexValue));
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{}}
        >
          {imageScroller?.map((item, index) => {
            return (
              <View key={item?.id}>
                <View
                  style={{
                    width: width * 0.9,
                    marginHorizontal: 20,
                    alignSelf: "center",
                    height: 100,
                  }}
                >
                  <Image
                    source={{ uri: item.img }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ alignSelf: "center", marginTop: 10 }}
        >
          {imageScroller?.map((item, index) => {
            return (
              <View key={item?.id}>
                <View
                  style={{
                    marginHorizontal: 5,
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    color={indexValue === index ? theme.colors.primary : "#000"}
                    size={12}
                    name={
                      indexValue === index ? "ellipse-sharp" : "ellipse-outline"
                    }
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: theme.font.fontSpaceMono,
            color: theme.colors.primary,
          }}
        >
          Welcome to Gemsen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
