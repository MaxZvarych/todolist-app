import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import DetailedList from "./components/DetailedList/DetailedList";

const Stack = createNativeStackNavigator();

export default function App() {
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
    </NavigationContainer>
  );
}
