import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { getAddress, shippingAddress } from "../../store/services/address";
import {
  addressListJotai,
  cart,
  shippingMethodsJotai,
} from "../../stores/user";
import { useAtom } from "jotai";

const ShippingAddressScreen = ({ navigation }: any) => {
  const [shippingMethods, setShippingMethods] = useAtom(shippingMethodsJotai);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState("");
  const [selectType, setSelectType] = useState("");
  const [getAddressData, setGetAddressData] = useState([]);
  const [getShippingAddressData, setGetShippingAddressData] = useState([]);

  const [addressDetails, setAddressDetails] = useState<any>([]);
  const [addressData, setAddressData] = useAtom(addressListJotai);
  const [addToCart, setAddToCart] = useAtom(cart);
  const [modal, setModal] = useState(false);

  const totalPrice = addToCart?.reduce((prev: any, curr: any) => {
    return prev + curr.quantity * curr.productDetails?.price;
  }, 0);
  console.log(city);
  const address = async () => {
    if (
      !!street === false ||
      !!city === false ||
      !!pin === false ||
      !!selectType === false ||
      !!state === false
    ) {
      setError("Please enter the details");
      setTimeout(() => {
        setError("");
      }, 1200);
    } else if (street && city && pin && state && selectType) {
      shippingAddress({
        body: {
          address: street,
          city,
          zipCode: pin,
          state,
          type: selectType,
        },
      })
        .then((res: any) => {
          setAddressDetails([...addressDetails, res?.addressData]);
          setModal(false);
          setCity("");
          setPin("");
          setSelectType("");
          setStreet("");
          setState("");
        })
        .catch((err) => {
          console.log("err?.data", err?.data?.message);
          setError(err?.data?.message);
          setTimeout(() => {
            setError("");
          }, 1200);
        });
    }
  };

  useEffect(() => {
    getAddress().then((res: any) => {
      setAddressDetails(res?.getAddress);
    });
  }, []);
  const methods = [
    {
      id: 1,
      price: 0,
      text1: "Free",
      text2: "Pickup at GEMSEN",
    },
    {
      id: 2,
      price: 0,
      text1: "Free Ground",
      text2: "Ground",
    },
    {
      id: 3,
      price: 0,
      text1: "Freight ",
      text2: "Air",
    },
  ];

  // const addressList = [
  //   {
  //     id: 1,
  //     text1: "Staff purchase 1",
  //     text2: "266 APPLEWOOD CRESCENT",
  //     text3: "CONCORD, Ontario L4K 4B4",
  //     text4: "Canada",
  //   },
  //   {
  //     id: 2,
  //     text1: "Staff purchase 2",
  //     text2: "266 APPLEWOOD CRESCENT",
  //     text3: "CONCORD, Ontario L4K 4B4",
  //     text4: "Canada",
  //   },
  //   {
  //     id: 3,
  //     text1: "Staff purchase 3",
  //     text2: "266 APPLEWOOD CRESCENT",
  //     text3: "CONCORD, Ontario L4K 4B4",
  //     text4: "Canada",
  //   },
  // ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        opacity: modal === true ? 0.2 : 1,
      }}
    >
      <HeaderAfterLogin icon="menu" />
      <Modal visible={modal} transparent>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              padding: 20,
              borderRadius: 5,
            }}
          >
            <Text>Enter address</Text>
            <Text
              style={{
                marginVertical: 10,
                color: "red",
                fontFamily: theme.font.fontMedium,
              }}
            >
              {error}
            </Text>
            <TextInput
              placeholder="Enter address"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                paddingVertical: 7,
                paddingHorizontal: 5,
                marginVertical: 8,
                borderRadius: 5,
              }}
              value={street}
              onChangeText={(e) => {
                console.log(e, "eee");
                setStreet(e);
              }}
            />
            <TextInput
              placeholder="Enter city"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                paddingVertical: 7,
                paddingHorizontal: 5,
                marginVertical: 8,
                borderRadius: 5,
              }}
              value={city}
              onChangeText={(e) => {
                setCity(e);
              }}
            />
            <TextInput
              placeholder="Enter state"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                paddingVertical: 7,
                paddingHorizontal: 5,
                marginVertical: 8,
                borderRadius: 5,
              }}
              value={state}
              onChangeText={(e) => {
                setState(e);
              }}
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={6}
              placeholder="Enter zipCode"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                paddingVertical: 7,
                paddingHorizontal: 5,
                marginVertical: 8,
                borderRadius: 5,
              }}
              value={pin}
              onChangeText={(e) => {
                setPin(e);
              }}
            />
            <Text>Select Type</Text>
            {["Shipping", "Billing"]?.map((item) => {
              return (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    setSelectType(item);
                  }}
                  style={{
                    marginLeft: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={selectType === item ? "square" : "square-outline"}
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: theme.font.fontMedium,
                      marginLeft: 10,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModal(false);
                }}
                style={{
                  marginRight: 5,
                  borderWidth: 1,
                  paddingHorizontal: 7,
                  paddingVertical: 5,
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  paddingHorizontal: 7,
                  paddingVertical: 5,
                  backgroundColor: theme.colors.primary,
                }}
                onPress={() => {
                  address();
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={{}}>
          <View style={{ backgroundColor: "#f4f4f4", padding: 20 }}>
            <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 19 }}>
              Estimated Total
            </Text>
            <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 16 }}>
              ${totalPrice}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 19,
              }}
            >
              Shipping Address
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModal(true);
              }}
            >
              <Text>Add Address</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // width: "90%",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            {addressDetails?.map((item: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setAddressData(item);
                  }}
                  key={item?._id}
                  style={{
                    width: "45%",
                    borderWidth: 0.5,
                    borderColor:
                      item._id === addressData?._id
                        ? theme.colors.btncolor
                        : "#ccc",
                    marginHorizontal: 10,
                    padding: 10,
                    marginVertical: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setModal(true);
                      setCity(item?.city);
                      setState(item?.state);
                      setSelectType(item?.type);
                      setPin(item?.zipCode);
                      setStreet(item?.address);
                    }}
                  >
                    <Text>Edit</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item?.address}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item?.city}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item?.zipCode}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item?.state}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item?.type} address
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: theme.font.fontLight, fontSize: 19 }}>
            Shipping Address
          </Text>
          <View
            style={{ backgroundColor: "#f4f4f4", padding: 10, marginTop: 10 }}
          >
            {methods?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setShippingMethods(item);
                  }}
                  key={item.id}
                  style={{ flexDirection: "row", paddingVertical: 10 }}
                >
                  <Ionicons
                    name={
                      shippingMethods?.id === item.id
                        ? "stop-circle"
                        : "ellipse-outline"
                    }
                    color={
                      shippingMethods?.id === item.id
                        ? theme.colors.btncolor
                        : "#000"
                    }
                    size={20}
                  />
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      fontSize: 18,
                      paddingHorizontal: 10,
                    }}
                  >
                    ${item.price?.toFixed(2)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.text2}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PaymentMethodScreen");
          }}
          style={{
            backgroundColor: theme.colors.btncolor,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 18,
              color: "#fff",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;
