import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import styles from "./AddItemHeader.styles";

const { height } = Dimensions.get("window");
export default function AddItemHeader({
  navigation,
  changeToDos,
  todos,
  item,
}) {
  return (
    <View style={[styles.header, { height: height * 0.08 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          let copy = todos.todos;
          copy.push(item);
          changeToDos(copy);
          navigation.navigate("Home");
        }}
      >
        <Text style={[styles.text, { fontWeight: "bold" }]}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
