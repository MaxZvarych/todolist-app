import { StatusBar } from "expo-status-bar";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import WholeItems from "../ListItem/WholeItems";
import WholeLists from "../Lists/WholeLists";
import styles from "../../App.styles";
import Plus from "../../Images/Plus.svg";
import Menu from "../Home/Menu";
import { Dimensions } from "react-native";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

function Home({ navigation, todos }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("Todos inside Home efect: ", todos.todos);
    setItems(todos.todos);
  }, []);
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
      items,
    });
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <StatusBar style='auto' />
        <Header />
        <WholeItems items={items} />
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
      {isSelected ? <Menu navigation={navigation} /> : <View></View>}
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

const mapStateToProps = (state) => {
  const { todos } = state;
  // console.log(todos);
  return { todos };
};

export default connect(mapStateToProps)(Home);
