import React, { Component, useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import ShopByCategoryDetails from "../../components/ShopByCategoryDetails";
import MobileCategories from "../../components/MobileCategories";

const SubCategoryScreen = ({ route }: any) => {
  const { data } = route.params;
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{}}>
        <ShopByCategoryDetails data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubCategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    // paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
