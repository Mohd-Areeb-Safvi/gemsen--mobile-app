import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
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

  // const a = { c: 1 };
  // const b = 2;
  // const d = [4];
  // const c = [a, b, ...d];
  const { width, height } = Dimensions.get("screen");

  const arrayofIds = addToCart?.map((i: any) => i?.data?.productName);
  const alreadyExisted = arrayofIds?.includes(data.productName);

  const scrollX = new Animated.Value(0);
  const scrollX1 = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    fadingContainer: {
      padding: 20,
      backgroundColor: "powderblue",
    },
    fadingText: {
      fontSize: 28,
    },
    buttonRow: {
      flexBasis: 100,
      justifyContent: "space-evenly",
      marginVertical: 16,
    },
  });
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" }}
    >
      <HeaderAfterLogin icon="menu" />

      {/* <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>

      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 0.3, 0.6, 1],
                  outputRange: [0, 20, 50, -60],
                }),
              },
            ],
          },
        ]}
      >
        <Text>Fading View!</Text>
      </Animated.View> */}
      {/* <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View> */}
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
          <View style={{ width }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
            >
              {data.productImage.map((source: any, i: any) => {
                return (
                  <Image
                    key={i}
                    style={{ width, height: 400, resizeMode: "contain" }}
                    source={{ uri: source }}
                  />
                );
              })}
            </ScrollView>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              {data.productImage.map((_: any, index: any) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.1, 1, 0.1],
                  extrapolate: "clamp",
                });

                let bg = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: ["red", "green", "orange"],
                  extrapolate: "clamp",
                });

                return (
                  <Animated.View
                    key={index}
                    style={{
                      opacity,
                      height: 10,
                      width: 10,
                      backgroundColor: "#595959",
                      margin: 8,
                      borderRadius: 5,
                    }}
                  />
                );
              })}
            </View>
            {/* <ScrollView horizontal>
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
            </ScrollView> */}
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
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,
                padding: 20,
              }}
            >
              Fashion Size
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              {["S", "M"]?.map((item) => {
                return (
                  <View
                    style={{
                      backgroundColor: item,
                      width: 50,
                      height: 50,
                      marginRight: 20,
                      borderWidth: 1,
                      borderColor: "#000",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={item}
                  >
                    <Text>{item}</Text>
                  </View>
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
