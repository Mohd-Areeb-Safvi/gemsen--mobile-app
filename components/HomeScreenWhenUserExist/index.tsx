import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { user } from "../../stores/user";
import { useAtom } from "jotai";
import { ScrollView } from "react-native-gesture-handler";
import theme from "../../theme";
import Header from "../Header";
import HeaderAfterLogin from "../HeaderAfterLogin";
import ScrollImages from "../../screens/HomeScreen/ScrollImages";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreenWhenUserExist = () => {
  const [data, setData] = useAtom(user);
  const category = [
    {
      id: 1,
      name: "Shop By Categories",

      category: [
        {
          mainCateogry: "Home",
          subCategories: [
            {
              id: 1,
              category: "Audio Components",
              subCategories: ["Dac", "Cd player"],
            },
            {
              id: 2,
              category: "HomeSpeaker",
              subCategories: ["In Wall Speaker", "Cable"],
            },
            {
              id: 3,
              category: "Woofer",
              subCategories: ["In Wall Speaker", "Cable"],
            },
          ],
        },
        {
          mainCateogry: "Marine",
        },
        {
          mainCateogry: "Mobile",
        },
        {
          mainCateogry: "PowerSport",
        },
      ],
    },

    {
      id: 2,
      name: "Mobile",
      category: [
        {
          mainCateogry: "Audio Control",
          subCategories: [
            {
              id: 1,
              category: "Amplifier",
              subCategories: ["Mono block"],
            },
            {
              id: 2,
              category: "Enclosure",
              subCategories: ["Mono Block"],
            },
            {
              id: 3,
              category: "Kicker",
              subCategories: ["Mono Block"],
            },
          ],
        },
        {
          mainCateogry: "Automate",
          subCategories: [
            {
              id: 1,
              category: "Amplifier",
              subCategories: ["Mono block"],
            },
            {
              id: 2,
              category: "Enclosure",
              subCategories: ["Mono Block"],
            },
            {
              id: 3,
              category: "Kicker",
              subCategories: ["Mono Block"],
            },
          ],
        },
        {
          mainCateogry: "Boss",
          subCategories: [
            {
              id: 1,
              category: "Amplifier",
              subCategories: ["Mono block"],
            },
            {
              id: 2,
              category: "Enclosure",
              subCategories: ["Mono Block"],
            },
            {
              id: 3,
              category: "Kicker",
              subCategories: ["Mono Block"],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Marine",
    },
    {
      id: 4,
      name: "Power Sport",
    },
    {
      id: 5,
      name: "Home",
    },
    {
      id: 6,
      name: "What's new",
    },
    {
      id: 7,
      name: "Sale",
    },
  ];
  const navigation: any = useNavigation();
  return (
    <View>
      <HeaderAfterLogin value={""} />
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.clear();
          setData({});
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            fontFamily: theme.font.fontMedium,
            color: "#000",
            paddingHorizontal: 10,
            paddingVertical: 6,
            fontSize: 19,
            marginVertical: 10,
          }}
        >
          Good Morning ,{" "}
          <Text
            style={{
              color: theme.colors.primary,
            }}
          >
            {data.name}
          </Text>
        </Text>
      </TouchableOpacity>
      <ScrollImages />

      <Text
        style={{
          fontFamily: theme.font.fontMedium,
          color: "#000",
          paddingHorizontal: 10,
          fontSize: 19,
          marginVertical: 10,
        }}
      >
        Categories :
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category?.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SubCategoryScreen", {
                  data: item,
                });
              }}
              key={item?.id}
              style={{
                marginRight: 20,
                borderRadius: 10,
                backgroundColor: theme.colors.primary,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontMedium,
                  color: "#fff",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreenWhenUserExist;
