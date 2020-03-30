// import img1 from

import { ImageSourcePropType } from "react-native";

// import { Image } from "react-native";
export type Category = {
  id: string;
  name: string;
  color: string;
  image: ImageSourcePropType;
};

// let a = require("./images/icon-birthday.png");

// Image;

export const CATEGORIES: Array<Category> = [
  {
    id: "f4ca5ff3-cffc-4c94-865e-073812844270",
    name: "Christmas",
    color: "#F2999E",
    image: require("./images/icon-birthday.png")
  },
  {
    id: "cd50c3b0-3c43-431d-9341-a44cc50a6881",
    name: "Birthday",
    color: "#C7DA7E",
    image: require("./images/icon-birthday.png")
  },
  {
    id: "5de7c3b6-8b61-4442-8691-314c2844ed98",
    name: "Get well soon!",
    color: "#B9A8EE",
    image: require("./images/icon-birthday.png")
  }
];
