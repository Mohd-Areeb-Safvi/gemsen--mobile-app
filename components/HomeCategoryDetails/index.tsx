import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";

const HomeCategoryDetails = () => {
  const navigation: any = useNavigation();
  const data = [
    {
      id: 1,
      img: "https://gemsen.com/media/wysiwyg/3may.png",
      img2: "https://gemsen.com/media/wysiwyg/dynamat.jpg",
      txt: "Dynamate",
      link: "",
      desc: ", a Dynamic Control brand, is recognized by consumers around the world as a quality product for solutions to unwanted noise and vibration. The Dynamat brand maintains the dominant market share in Car Audio and Automotive Restoration acoustic solutions. Dynamic Control also provides a broad range of unique product solutions for home acoustics, computers, appliances, and Original Equipment Manufacturers.",
    },
    {
      id: 2,
      img: "https://gemsen.com/media/wysiwyg/elipsonlogo.png",
      img2: "https://gemsen.com/media/wysiwyg/dynamat.jpg",
      txt: "Elipson",
      link: "",
      desc: " With more than 50 years in the speaker industry, Elipson now offers a wide range of products that will suit any customers needs. From the Planet L speaker based on their legendary design from 1960 to their integrated Music System carved from a solid Aluminium disc, Elipson products will please your eyes as much as your ears.",
    },
    {
      id: 3,
      img: "https://gemsen.com/media/wysiwyg/3may.png",
      img2: "https://gemsen.com/media/wysiwyg/dynamat.jpg",
      txt: "JL Audio",
      desc: ", a Dynamic Control brand, is recognized by consumers around the world as a quality product for solutions to unwanted noise and vibration. The Dynamat brand maintains the dominant market share in Car Audio and Automotive Restoration acoustic solutions. Dynamic Control also provides a broad range of unique product solutions for home acoustics, computers, appliances, and Original Equipment Manufacturers.",
    },
    {
      id: 4,
      img: "https://gemsen.com/media/wysiwyg/3may.png",
      img2: "https://gemsen.com/media/wysiwyg/dynamat.jpg",
      txt: "Kanto",
      desc: ", a Dynamic Control brand, is recognized by consumers around the world as a quality product for solutions to unwanted noise and vibration. The Dynamat brand maintains the dominant market share in Car Audio and Automotive Restoration acoustic solutions. Dynamic Control also provides a broad range of unique product solutions for home acoustics, computers, appliances, and Original Equipment Manufacturers.",
    },
  ];
  return (
    <View style={{ marginVertical: 20 }}>
      <View
        style={{
          backgroundColor: "#0074c9",
          width: "90%",
          alignSelf: "center",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: theme.font.fontRobotoBlack,
            fontSize: 19,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Home Division
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          lineHeight: 25,
          color: "#0074c9",
          width: "95%",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        Gemsen’s Home division represents some of the finest brands in home
        audio/theatre products ranging from cables, turntables, speakers, A/V
        furniture and more.
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}
      >
        {data?.map((item: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BrandDetailsScreen", {
                  data: item,
                });
              }}
              key={item?.id}
              style={{
                width: "50%",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item?.img }}
                style={{ width: 100, height: 70, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default HomeCategoryDetails;
