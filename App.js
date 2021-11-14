import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import DetailedList from "./components/DetailedList/DetailedList";

import AddItem from "./components/AddItem/AddItem";
import { listItems } from "./components/Data/MockedData";

const Stack = createNativeStackNavigator();

export default function App() {
  const [items, setItems] = useState(listItems);
  let updateItemsCallback = (item) => {
    // console.log(item);
    let copy = items;
    copy.push(item);
    setItems(copy);
    console.log(items);
  };
  useEffect(() => {}, [items]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={Home}
          initialParams={{ items: items }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='DetailedList'
          component={DetailedList}
          initialParams={{
            name: "Inbox",
            colorType: "purple",
            items: items,
          }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='AddItem'
          component={AddItem}
          initialParams={{ updateItemsCallback }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
