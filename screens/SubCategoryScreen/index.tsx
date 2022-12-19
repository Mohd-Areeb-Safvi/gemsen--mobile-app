import React, { Component, useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

const BACON_IPSUM =
  "Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ";

const CONTENT = [
  {
    title: "Home",
    content: BACON_IPSUM,
  },
  {
    title: "Marine",
    content: BACON_IPSUM,
  },
  {
    title: "Mobile",
    content: BACON_IPSUM,
  },
  {
    title: "PowerSport",
    content: BACON_IPSUM,
  },
];

const SubCategoryScreen = ({ route }: any) => {
  console.log(route.params);
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections: any) => {
    setActiveSections(sections);
  };

  const renderHeader = (section: any, _: any, isActive: any) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section: any, _: any, isActive: any) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text>{section.content}</Text>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
        {/* <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select:</Text>

            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> */}

        {/* <Collapsible collapsed={collapsed}>
          <View style={styles.content}>
            <Animatable.Text
              animation={collapsed ? undefined : "zoomIn"}
              duration={300}
              useNativeDriver
            >
              Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
              ribs
            </Animatable.Text>
          </View>
        </Collapsible> */}
        <Accordion
          align="bottom"
          activeSections={activeSections}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          expandMultiple={multipleSelect}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
          renderAsFlatList={false}
        />
      </ScrollView>
    </View>
  );
};

export default SubCategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Constants.statusBarHeight,
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
