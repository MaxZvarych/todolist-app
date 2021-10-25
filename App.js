import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import WholeItems from "./components/ListItem/WholeItems";
import WholeLists from "./components/Lists/WholeLists";
import Plus from "./Images/Plus.svg";
import List from "./Images/List.svg";
import Checkbox from "./Images/Checkbox.svg";

import styles from "./App.styles";

function Menu() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menu_task}>
        <Checkbox />
        <Text style={styles.menu_text}>Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu_item}>
        <List />
        <Text style={styles.menu_text}>List</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [addData, setAddData] = useState(false);
  let plusBgColor = addData ? "yellow" : "#FFFFFF";
  let plusRotateDegree = addData ? -45 : 0;

  let handlePlusPress = (event) => {
    setAddData(!addData);
  };

  const { width, height } = Dimensions.get("window");

  let darkenedStyle = addData
    ? {
        height,
        width,
        backgroundColor: "rgba(37, 42, 49, 0.7)",
      }
    : {};
  return (
    <ImageBackground
      source={{
        uri: "https://wallpapershome.com/images/pages/pic_h/23736.jpg",
      }}
      style={{
        height,
        width,
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* <View style={darkenedStyle}></View> */}
      <View>
        <ScrollView style={styles.container}>
          <StatusBar style='auto' />
          <Header />
          <WholeItems />
          <Text style={styles.text}> Lists</Text>
          <WholeLists />
        </ScrollView>

        {addData ? (
          <View
            style={[
              styles.overlay,
              { height: height, width: width, elevation: 1 },
            ]}
          ></View>
        ) : (
          <View></View>
        )}
        {addData ? <Menu /> : <View></View>}

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
    </ImageBackground>
  );
}
