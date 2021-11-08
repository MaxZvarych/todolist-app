import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import List from "../../Images/List.svg";
import Checkbox from "../../Images/Checkbox.svg";
import styles from "../../App.styles";

export default function Menu() {
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
