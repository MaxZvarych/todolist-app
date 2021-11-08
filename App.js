import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import DetailedList from "./components/DetailedList/DetailedList";
import Plus from "./Images/Plus.svg";
import Menu from "./components/Home/Menu";
import { View, TouchableOpacity, Dimensions } from "react-native";
import styles from "./App.styles";

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get("window");

export default function App() {
  const [isSelected, setIsSelected] = useState(false);

  let plusBgColor = isSelected ? "yellow" : "#FFFFFF";
  let plusRotateDegree = isSelected ? -45 : 0;

  let handlePlusPress = () => {
    setIsSelected(!isSelected);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='DetailedList'
          component={DetailedList}
          initialParams={{ name: "Inbox", colorType: "purple" }}
        />
      </Stack.Navigator>
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
    </NavigationContainer>
  );
}
