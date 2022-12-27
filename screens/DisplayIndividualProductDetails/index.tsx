import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import theme from "../../theme";
import Carousel from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { cart } from "../../stores/user";
const DisplayIndividualProductDetails = ({ route }: any) => {
  const { data } = route.params;
  const [counter, setCounter] = useState(0);

  const [addToCart, setAddToCart] = useAtom(cart);

  // const a = 1;
  // const b = 2;
  // const d = [4];
  // const c = [a, b, ...d];

  const arrayofIds = addToCart?.map((i) => i?.data?.id);
  console.log(arrayofIds);

  const alreadyExisted = arrayofIds?.includes(data.id);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" }}
    >
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 15,
              letterSpacing: 2,
              paddingHorizontal: 20,
            }}
          >
            {data.productName}
          </Text>
          <View style={{ width: "100%" }}>
            <ScrollView horizontal>
              {data.productImage?.map((item, index) => {
                return (
                  <View key={index} style={{}}>
                    <Image
                      source={{ uri: item }}
                      style={{
                        width: 250,
                        height: 400,
                        resizeMode: "cover",
                        alignSelf: "center",
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,
                padding: 20,
              }}
            >
              Fashion Color
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              {["red", "green"]?.map((item) => {
                return (
                  <View
                    style={{
                      backgroundColor: item,
                      width: 50,
                      height: 50,
                      marginRight: 20,
                      borderWidth: 1,
                      borderColor: "#000",
                    }}
                    key={item}
                  ></View>
                );
              })}
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 18,
                  }}
                >
                  Quantity
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (counter > 0) setCounter(counter - 1);
                    }}
                    style={{
                      borderWidth: 2,
                      borderColor: "#545d63",
                      borderRadius: 10,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Ionicons name="remove" size={30} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      fontSize: 18,
                      padding: 10,
                    }}
                  >
                    {counter}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setCounter(counter + 1);
                    }}
                    style={{
                      borderWidth: 2,
                      borderColor: "#545d63",
                      borderRadius: 10,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Ionicons name="add" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 20,
                marginTop: 30,
                justifyContent: "space-between",
                // borderWidth: 1,
                // borderColor: "#ccc",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "15%",
                  height: 50,
                  borderWidth: 1,
                  borderColor: theme.colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Ionicons name="heart-outline" size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // setAddToCart((prev) => [...prev, data]);

                  if (counter > 0) {
                    setAddToCart([
                      ...addToCart,
                      {
                        quantity: counter,
                        data,
                      },
                    ]);
                  }
                }}
                style={{
                  // borderWidth: 2,
                  width: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  backgroundColor: theme.colors.primary,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 16,
                    color: "#fff",
                  }}
                >
                  {alreadyExisted ? "Go to cart" : "Add to cart"}
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Carousel
              data={data.productImage}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={3}
            /> */}
          </View>
          <View
            style={{
              margin: 20,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: theme.font.fontLight,
                fontSize: 14,
              }}
            >
              {data.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayIndividualProductDetails;
