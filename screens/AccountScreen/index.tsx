import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderAfterLogin from "../../components/HeaderAfterLogin";
import FooterSection from "../../components/FooterSection";
import theme from "../../theme";
import { user } from "../../stores/user";
import { useAtom } from "jotai";
import dayjs from "dayjs";

const AccountScreen = () => {
  const [userData] = useAtom(user);
  const addressList = [
    {
      id: 1,
      text1: "Staff purchase 1",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
      text5: "Default billing address",
    },
    {
      id: 2,
      text1: "Staff purchase 2",
      text2: "266 APPLEWOOD CRESCENT",
      text3: "CONCORD, Ontario L4K 4B4",
      text4: "Canada",
      text5: "Default Shipping address",
    },
  ];

  const ordersList = [
    {
      id: 1,
      orderNumber: "23445",
      date: dayjs().format("YYYY-MM-DD"),
      shipto: "Staff Purchase",
      orderTotal: "33423",
      status: "Cancelled",
    },
    {
      id: 2,
      orderNumber: "23445",
      date: dayjs().format("YYYY-MM-DD"),
      shipto: "Staff Purchase",
      orderTotal: "34234",
      status: "Pending",
    },
    {
      id: 3,
      orderNumber: "23445",
      date: dayjs().format("YYYY-MM-DD"),
      shipto: "Staff Purchase",
      orderTotal: "34234",
      status: "Completed",
    },
  ];

  // const date = dayjs().add(1, "week").format("DD-MMM-YYYY");
  // console.log(date, "date");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderAfterLogin icon="menu" />
      <ScrollView>
        <View
          style={{
            padding: 20,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,

                paddingVertical: 10,
              }}
            >
              Account Information
            </Text>
          </View>
          <Text
            style={{
              fontFamily: theme.font.fontLight,
              fontSize: 18,

              paddingVertical: 10,
            }}
          >
            Contact Information
          </Text>
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 13,
            }}
          >
            {userData.name}
          </Text>
          <Text
            style={{
              fontFamily: theme.font.fontMedium,
              fontSize: 13,
            }}
          >
            {userData.email}
          </Text>
        </View>

        <View
          style={{
            padding: 20,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,

                paddingVertical: 10,
              }}
            >
              Address Book
            </Text>
          </View>
          <View
            style={
              {
                // width: "90%",
              }
            }
          >
            {addressList?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {}}
                  key={item.id}
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.font.fontMedium,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text5}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text2}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text3}
                  </Text>
                  <Text
                    style={{
                      fontFamily: theme.font.fontLight,
                      color: theme.colors.black,

                      fontSize: 14,
                      paddingVertical: 4,
                    }}
                  >
                    {item.text4}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text
              style={{
                fontFamily: theme.font.fontMedium,
                fontSize: 18,

                paddingVertical: 10,
              }}
            >
              Recent Orders
            </Text>
          </View>
          {ordersList?.map((item) => {
            return (
              <View key={item.id} style={{ marginVertical: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Order #: </Text>
                  <Text>{item.orderNumber}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Date: </Text>
                  <Text>{item.date}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Ship To: </Text>
                  <Text>{item.shipto}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Order total: </Text>
                  <Text>{item.orderTotal}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Status: </Text>
                  <Text>{item.status}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Action: </Text>
                  <TouchableOpacity>
                    <Text>View Order</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>ReOrder</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>

        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
