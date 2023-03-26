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
import ProgressImage from "../../components/ProgressImage";
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
      console.log("res", res);
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
      getCart().then((res: any) => {
        setAddToCart(res?.cartDetails || []);
      });
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
          <View style={{ width, marginVertical: 20 }}>
            <ScrollView horizontal>
              {displayProductDetails?.image?.map((i) => {
                return (
                  <ProgressImage
                    key={i?.url}
                    thumbnailSource={{
                      uri: i?.url,
                    }}
                    source={{
                      uri: i?.url,
                    }}
                    style={{
                      width: width * 0.8,
                      height: 300,
                      resizeMode: "cover",
                      marginRight: 30,
                    }}
                  />
                );
              })}
            </ScrollView>

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
