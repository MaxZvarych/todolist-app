import { listItems } from "./MockedData";

const findAmountByColorType = (color) => {
  let result = 0;
  listItems.forEach((current) => {
    if (current.colorType === color) ++result;
  });
  return result;
};

export const lists = [
  {
    name: "Inbox",
    colorType: "grey",
    tasksAmount: findAmountByColorType("grey"),
  },
  {
    name: "Work",
    colorType: "green",
    tasksAmount: findAmountByColorType("green"),
  },
  {
    name: "Shopping",
    colorType: "red",
    tasksAmount: findAmountByColorType("red"),
  },
  {
    name: "Family",
    colorType: "yellow",
    tasksAmount: findAmountByColorType("yellow"),
  },
  {
    name: "Personal",
    colorType: "violet",
    tasksAmount: findAmountByColorType("violet"),
  },
];
