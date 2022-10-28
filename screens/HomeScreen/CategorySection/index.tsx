import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";

const CategorySection = () => {
  const navigation = useNavigation();
  const category = [
    {
      id: 1,
      img: "https://gemsen.com/media/wysiwyg/marine400_1_1.jpg",
      category: "Home",
      description:
        "Gemsen’s Home division represents some of the finest brands in home audio/theatre products ranging from cables, turntables, speakers, A/V furniture and more.",
      route: "HomeCategoryScreen",
    },
    {
      id: 2,
      img: "https://gemsen.com/media/wysiwyg/marine400_1_1.jpg",

      category: "Marine",
      description:
        "Gemsen’s Marine division is home of the industry’s most popular brands in marine audio specializing in speakers, source units, processors and amplifiers.",
      route: "MarineScreen",
    },
    {
      id: 3,
      img: "https://gemsen.com/media/wysiwyg/marine400_1_1.jpg",

      category: "Mobile",
      description:
        "Gemsen’s Home division represents some of the finest brands in home audio/theatre products ranging from cables, turntables, speakers, A/V furniture and more.",
      route: "MobileCategoryScreen",
    },
    {
      id: 4,
      img: "https://gemsen.com/media/wysiwyg/marine400_1_1.jpg",

      category: "Power Sport",
      description:
        "Gemsen’s Home division represents some of the finest brands in home audio/theatre products ranging from cables, turntables, speakers, A/V furniture and more.",
      route: "PowerSportScreen",
    },
  ];
  return (
    <View style={{}}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 22,
          textTransform: "uppercase",
          fontFamily: theme.font.fontRobotoBold,
          marginVertical: 30,
        }}
      >
        Category Section
      </Text>
      <View></View>
      {category?.map((item: any) => {
        return (
          <View
            key={item?.id}
            style={{
              width: "80%",
              marginVertical: 10,
              alignSelf: "center",
              padding: 20,
              shadowColor: "#000",
              backgroundColor: "#fff",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: item?.img }}
              style={{ width: "100%", height: 150, borderRadius: 10 }}
            />
            <Text
              style={{
                fontFamily: theme.font.fontRobotoBlack,
                fontSize: 19,
                marginVertical: 5,
              }}
            >
              {item.category}
            </Text>
            <Text
              style={{
                // fontFamily: theme.font.fontSpaceMono,
                fontSize: 13,
                lineHeight: 25,
                marginVertical: 5,
              }}
            >
              {item.description}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.route);
              }}
              style={{
                backgroundColor: "#1a79c3",
                width: "35%",
                paddingVertical: 8,
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default CategorySection;
