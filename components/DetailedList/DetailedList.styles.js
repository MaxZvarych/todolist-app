import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  detailed_list: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 50,
  },
  close_line: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    alignSelf: "center",
  },
  header_slide_panel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 20,
  },
  header_info: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",

    marginLeft: 40,
  },
  name: {
    fontSize: 32,
    lineHeight: 41,
  },
  tasks_amount: {
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.458235,
  },
});

export default styles;
