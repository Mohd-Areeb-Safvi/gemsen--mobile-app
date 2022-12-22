import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";

const NestedSubCategoryScreen = ({ route, navigation }: any) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-outline" size={27} />
        </TouchableOpacity>
        <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 20 }}>
          {data.category}
        </Text>
        <Ionicons name="chevron-back-outline" size={27} color={"#fff"} />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.subCategories?.map((item: any, index: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DisplayProductsScreen", {
                  data: item,
                });
              }}
              key={index}
              style={{
                width: 150,
                marginHorizontal: 20,
                marginVertical: 10,
                height: 50,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "#ccc",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                  fontFamily: theme.font.fontMedium,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default NestedSubCategoryScreen;
