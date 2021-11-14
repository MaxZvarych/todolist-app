import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    flex: 2,
    marginLeft: 28,

    paddingBottom: 15,
  },

  circle_red: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "red",
  },
  circle_violet: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "violet",
  },
  circle_green: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "green",
  },
  circle_grey: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "green",
  },
  circle: {
    marginRight: 15,
  },
  info_wrapper: {
    flex: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,

    borderBottomColor: "rgba(37, 42, 49, 0.1)",
    borderBottomWidth: 1,
  },

  alarm: {
    marginTop: 3,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    width: 70,
  },

  alarm_text: {
    marginLeft: 5,
    color: "rgba(37, 42, 49, 0.3)",
  },

  alarm_wrapper: {
    flexDirection: "column",
  },
});

export default styles;
