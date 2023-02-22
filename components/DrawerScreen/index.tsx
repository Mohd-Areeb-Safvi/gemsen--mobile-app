import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { user } from "../../stores/user";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { category } from "../../data";
import { getCategory } from "../../store/services/category";

const DrawerScreen = () => {
  const [userData, setUserData] = useAtom(user);

  const navigation: any = useNavigation();
  const [categoryDetails, setCategoryDetails] = useState([]);
  useEffect(() => {
    getCategory().then((res: any) => {
      console.log("res", res);
      setCategoryDetails(res?.category);
    });
    return () => {};
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Ionicons name="close" size={26} />
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 19,
              marginLeft: 15,
            }}
          >
            Main menu
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          {categoryDetails?.map((item: any, index) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  navigation.navigate("SubCategoryScreen", {
                    data1: item,
                  });
                }}
                key={item._id}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  backgroundColor: "#fff",
                  marginVertical: 5,
                  marginHorizontal: 20,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.font.fontLight,
                    fontSize: 15,
                    marginLeft: 15,
                  }}
                >
                  {item.name}
                </Text>
                {index !== 8 ? (
                  <>
                    <Ionicons name="chevron-forward" size={20} />
                  </>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.clear();
              setUserData({});
            }}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingVertical: 20,
              paddingHorizontal: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              backgroundColor: "#fff",
              marginVertical: 5,
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontLight,
                fontSize: 15,
                marginLeft: 15,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerScreen;
