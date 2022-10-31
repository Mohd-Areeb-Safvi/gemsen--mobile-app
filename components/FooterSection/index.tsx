import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const FooterSection = () => {
  const icons = [
    { icon: "football" },
    { icon: "football" },
    { icon: "football" },
    { icon: "football" },
  ];

  const informationTab = [
    {
      id: 1,
      name: "Privacy and Cookie Policy",
      route: "",
    },
    {
      id: 2,
      name: "Contact Us",
      route: "",
    },
    {
      id: 3,
      name: "Request as RMA",
      route: "",
    },
    {
      id: 4,
      name: "Become a dealer",
      route: "",
    },
  ];

  const contactInformation = [
    {
      id: 1,
      name: "Address",
      text: "266 Applewood",
      icon: "location-outline",
    },
    {
      id: 2,
      name: "Phone",
      text: "(208)-333-8982",
      icon: "call-outline",
    },
    {
      id: 3,
      name: "Email",
      text: "gemsen@gmail.com",
      icon: "mail-outline",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#222", marginTop: 30 }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#222",
          paddingVertical: 20,
        }}
      >
        <Image
          source={{
            uri: "https://gemsen.com/media/logo/stores/1/cropped-logo_1_.png",
          }}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginVertical: 30,
            justifyContent: "space-evenly",
            width: "40%",
          }}
        >
          {icons?.map((item: any, index: any) => {
            return (
              <View
                key={index}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#fff",
                  borderRadius: 30 / 2,
                }}
              >
                <Ionicons name={item?.icon} color="#fff" size={13} />
              </View>
            );
          })}
        </View>

        <Text
          style={{
            fontFamily: theme.font.fontRobotoBold,
            letterSpacing: 1,
            color: "#fff",
            marginLeft: 20,
            fontSize: 18,
          }}
        >
          Information
        </Text>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {informationTab?.map((item) => {
            return (
              <View
                key={item?.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 6,
                }}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={17}
                  color="#fff"
                />
                <Text style={{ color: "#fff" }}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <Text
          style={{
            fontFamily: theme.font.fontRobotoBold,
            letterSpacing: 1,
            color: "#fff",
            marginLeft: 20,
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Contact Information
        </Text>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {contactInformation?.map((item: any) => {
            return (
              <View
                key={item?.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 6,
                }}
              >
                <Ionicons name={item.icon} size={17} color="#fff" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ color: "#fff" }}>{item.name}</Text>
                  <Text style={{ color: "#fff" }}>{item.text}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          height: 300,
          width: 300,
          alignSelf: "center",
          marginBottom: 40,
        }}
      >
        <MapView
          initialRegion={{
            latitude: 31.634,
            longitude: 74.8723,
            latitudeDelta: 0.015 * 4,
            longitudeDelta: 0.0121 * 4,
          }}
          showsUserLocation
          showsMyLocationButton={true}
          style={{ flex: 1 }}
          customMapStyle={mapStyles}
          provider={PROVIDER_GOOGLE}
        />
      </View>
    </View>
  );
};

export default FooterSection;

export const mapStyles = [
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
