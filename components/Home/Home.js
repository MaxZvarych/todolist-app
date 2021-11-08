import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Header from "../Header/Header";
import WholeItems from "../ListItem/WholeItems";
import WholeLists from "../Lists/WholeLists";
import Plus from "../../Images/Plus.svg";
import styles from "../../App.styles";
import Menu from "./Menu";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);

  let plusBgColor = isSelected ? "yellow" : "#FFFFFF";
  let plusRotateDegree = isSelected ? -45 : 0;

  let handlePlusPress = () => {
    setIsSelected(!isSelected);
  };

  let showListDetailed = (name, colorType) => {
    navigation.navigate("DetailedList", {
      name,
      colorType,
    });
  };
  return (
    <View>
      <ScrollView style={styles.container}>
        <StatusBar style='auto' />
        <Header />
        <WholeItems />
        <Text style={styles.text}> Lists</Text>
        <WholeLists onClickCallback={showListDetailed} />
      </ScrollView>

      {isSelected ? (
        <View
          style={[
            styles.overlay,
            { height: height, width: width, elevation: 1 },
          ]}
        ></View>
      ) : (
        <View></View>
      )}
      {isSelected ? <Menu /> : <View></View>}

      <TouchableOpacity
        onPress={handlePlusPress}
        style={{
          position: "absolute",
          right: 15,
          bottom: 15,
          justifyContent: "center",
          alignItems: "center",

          elevation: 2,

          width: 56,
          height: 56,
          borderRadius: 56 / 2,
          backgroundColor: plusBgColor,
        }}
      >
        <Plus
          style={{
            transform: [{ rotate: `${plusRotateDegree}deg` }],
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
