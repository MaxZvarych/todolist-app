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
    id: 0,
    name: "Inbox",
    colorType: "grey",
    tasksAmount: findAmountByColorType("grey"),
  },
  {
    id: 1,
    name: "Work",
    colorType: "green",
    tasksAmount: findAmountByColorType("green"),
  },
  {
    id: 2,
    name: "Shopping",
    colorType: "red",
    tasksAmount: findAmountByColorType("red"),
  },
  {
    id: 3,
    name: "Family",
    colorType: "yellow",
    tasksAmount: findAmountByColorType("yellow"),
  },
  {
    id: 4,
    name: "Personal",
    colorType: "violet",
    tasksAmount: findAmountByColorType("violet"),
  },
];
