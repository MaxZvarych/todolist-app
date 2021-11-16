import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import DetailedList from "./components/DetailedList/DetailedList";

import AddItem from "./components/AddItem/AddItem";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            options={{ headerShown: false }}
            component={Home}
            initialParams={{
              colorModified: "",
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='DetailedList'
            component={DetailedList}
            initialParams={{
              name: "Inbox",
              colorType: "#EBEFF5",
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='AddItem'
            component={AddItem}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
