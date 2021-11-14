import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  filter_wrapper: {
    borderTopColor: "rgba(37, 42, 49,0.1)",
    borderTopWidth: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  content_wrapper: {
    borderTopColor: "rgba(37, 42, 49,0.1)",
    borderTopWidth: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  filter_header: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  chosen_list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {},
  text_chosen_list: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: -0.2,
    color: "#006CFF",
  },
  lists: {},
});

export default styles;
