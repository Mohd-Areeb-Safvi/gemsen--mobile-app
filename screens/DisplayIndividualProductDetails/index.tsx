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
import React, { useEffect, useRef, useState } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import theme from "../../theme";
import Carousel from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { cart } from "../../stores/user";
import { getSingleProducts } from "../../store/services/product";
import { addToCartDetails } from "../../store/services/cart";
import { getCart } from "../../store/services/cart";
const DisplayIndividualProductDetails = ({ route, navigation }: any) => {
  const { data } = route.params;
  const [displayProductDetails, setDisplayProductDetails] = useState<any>({});
  const [counter, setCounter] = useState(0);
  const [addToCart, setAddToCart] = useAtom(cart);
  const { width, height } = Dimensions.get("screen");

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

  useEffect(() => {
    getSingleProducts({
      pathParams: {
        id: data?._id,
      },
    }).then((res: any) => {
      setDisplayProductDetails(res?.products);
    });
    return () => {};
  }, [data?._id]);

  const addToCartData = () => {
    addToCartDetails({
      body: {
        productId: displayProductDetails?._id,
        quantity: counter,
      },
    }).then((res: any) => {
      console.log(res.cart, "res");

      const cartData = [...addToCart, res.cart];

      // setAddToCart((prev: any) => [...prev, res.cart]);
      setAddToCart(cartData);
    });
  };

  // const b = [{ id: 1 }];

  // const a = [...b, { id: 4 }];

  // console.log("a", a);

  // const array = [1, 2, 3];
  // const array2 = [1, 2, 3, 4];

  // const object = { a: 1 };
  // const array3 = [...array, ...array2, object];
  // console.log(array3);
  const cartData = addToCart?.map((i) => i?.productId);

  const isIncluded = cartData?.includes(displayProductDetails?._id);

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
              fontSize: 15,
              letterSpacing: 2,
              paddingHorizontal: 20,
            }}
          >
            ProductName:{" "}
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
              }}
            >
              {displayProductDetails.name}
            </Text>
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
              <Image
                source={{
                  uri: "https://elasticsearch-pwa-m2.magento-demo.amasty.com/media/catalog/product/cache/3119fdc86065b8c295ab10a11e7294fc/v/d/vd01-ll_main_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
                }}
                style={{ width, height: 300, resizeMode: "contain" }}
              />
              {/* {data.productImage.map((source: any, i: any) => {
                return (
                  <Image
                    key={i}
                    style={{ width, height: 400, resizeMode: "contain" }}
                    source={{ uri: source }}
                  />
                );
              })} */}
            </ScrollView>
            {/* <View style={{ flexDirection: "row", alignSelf: "center" }}>
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
            </View> */}

            {/* <Text
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
            </View> */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingTop: 20,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 18,
                  }}
                >
                  Status :
                </Text>
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 18,
                    color:
                      displayProductDetails?.inventory > 0 ? "green" : "red",
                  }}
                >
                  {displayProductDetails?.inventory > 0
                    ? "InStock"
                    : "OutStock"}
                </Text>
              </View>
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
                      if (counter > 0) {
                        setCounter(counter - 1);
                      }
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
                  if (!isIncluded) {
                    if (counter > 0) {
                      addToCartData();
                    } else {
                      alert("Please select quantity");
                    }
                  } else {
                    navigation.navigate("AddToCartScreen");
                  }
                }}
                style={{
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
                  {isIncluded ? "Go to cart" : "Add To Cart"}
                </Text>
              </TouchableOpacity>
            </View>
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
              {displayProductDetails?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayIndividualProductDetails;
