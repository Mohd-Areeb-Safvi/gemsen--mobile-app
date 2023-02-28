import React, { Component, useEffect, useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getSubCategory } from "../../store/services/category";

const SubCategoryScreen = ({ data }: any) => {
  const navigation: any = useNavigation();
  const [activeSections, setActiveSections] = useState<any>([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const [subCategoryDetails, setSubCategoryDetails] = useState([]);
  useEffect(() => {
    getSubCategory({
      pathParams: {
        id: data?._id,
      },
    }).then((res: any) => {
      setSubCategoryDetails(res);
    });
  }, [data?._id]);

  const renderHeader = (item: any, index: any) => {
    return (
      <View style={[styles.header]}>
        <Text style={styles.headerText}>{item.name}</Text>
      </View>
    );
  };

  const renderContent = (section: any, _: any, isActive: any) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        {section?.nestedSubCategory?.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          section?.nestedSubCategory?.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("NestedSubCategoryScreen", {
                    data: item,
                  });
                }}
                key={item._id}
                style={{
                  paddingVertical: 10,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 0.5,
                  width: "60%",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.font.fontMedium,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })
        )}
      </Animatable.View>
    );
  };

  const onChange = (e: any) => {
    const indexValue = subCategoryDetails?.data
      ?.map((item: any, index: any) => {
        if (item?.nestedSubCategory?.length > 0) {
          return index;
        } else {
          return "";
        }
      })
      ?.filter((i) => i !== "");

    if (indexValue?.includes(e[0])) {
      setActiveSections(e);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-outline" size={27} />
        </TouchableOpacity>
        <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 20 }}>
          {data.name}
        </Text>
        <Ionicons name="chevron-back-outline" size={27} color={"#fff"} />
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 2 }}>
        {subCategoryDetails?.data?.length > 0 ? (
          <Accordion
            align="bottom"
            activeSections={activeSections}
            sections={subCategoryDetails?.data}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={(e) => {
              onChange(e);
            }}
            // renderAsFlatList={false}
          />
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};

export default SubCategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
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
