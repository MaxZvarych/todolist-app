import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Header.styles";
import MoreIcon from "../../Images/More.svg"; // SVG File

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Today</Text>
      <MoreIcon style={styles.image} />
    </View>
  );
}
