import { ImageSourcePropType } from "react-native";
import { differenceInDays } from "date-fns";
import { sortBy } from "lodash";

export type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  date?: {
    day: number;
    month: number;
  };
};

const UNSORTED_CATEGORIES: Array<Category> = [
  {
    name: "Mothers Day",
    id: "9c7ed5cd-b95a-4f40-b2cc-8828adbb59d3",
    image: require("./images/icon-mothersday.png"),
    date: {
      day: 10,
      month: 5,
    },
  },
  {
    name: "Easter",
    id: "2339482e-97c2-460e-b0c7-aaefe6454e02",
    image: require("./images/icon-easter.png"),
    date: {
      day: 12,
      month: 4,
    },
  },
  {
    name: "Birthday",
    id: "cd50c3b0-3c43-431d-9341-a44cc50a6881",
    image: require("./images/icon-birthday.png"),
  },
  {
    name: "Get well soon",
    id: "5de7c3b6-8b61-4442-8691-314c2844ed98",
    image: require("./images/icon-getwellsoon.png"),
  },
  {
    name: "Thank You",
    id: "9e817b33-76f4-468c-9a85-fc2eb629b428",
    image: require("./images/icon-thankyou.png"),
  },
  {
    name: "Anniversary",
    id: "5f9de78e-6673-4599-8595-5e7c93b41477",
    image: require("./images/icon-anniversary.png"),
  },
  {
    name: "Weddings",
    id: "bcd5f7a8-a047-4075-b75a-5e6f473bd9c3",
    image: require("./images/icon-weddings.png"),
  },
  {
    name: "Fathers Day",
    id: "be663f26-bdfe-4545-9919-e2af7ed21241",
    image: require("./images/icon-fathersday.png"),
    date: {
      day: 21,
      month: 5,
    },
  },
  {
    name: "Births",
    id: "0ac7a6f2-ec57-4844-8735-27b2184f6492",
    image: require("./images/icon-births.png"),
  },
  {
    name: "Sympathy",
    id: "2d392ca4-2dce-4661-8771-01e046d25f1f",
    image: require("./images/icon-sympathy.png"),
  },
  {
    name: "Christmas",
    id: "f4ca5ff3-cffc-4c94-865e-073812844270",
    image: require("./images/icon-christmas.png"),
    date: {
      day: 25,
      month: 12,
    },
  },
  {
    name: "Last day",
    id: "62736f5d-ec23-4c9b-a552-ffacabd8e7e0",
    image: require("./images/icon-lastday.png"),
  },
  {
    name: "Apology",
    id: "7f76db34-1e78-4db6-b25d-0e2d3573c5b0",
    image: require("./images/icon-apology.png"),
  },
  {
    name: "Valentines",
    id: "b7bc4d76-ab7f-456a-8a8f-bd1f453637c5",
    image: require("./images/icon-valentines.png"),
    date: {
      day: 14,
      month: 2,
    },
  },
];

// Gets the time to the event in days, but only if
// its with in 2 weeks (14 days)
const getTimeToEvent = (category: Category) => {
  if (category.date) {
    const year = new Date().getFullYear();

    console.log(category.name);
    console.log(
      differenceInDays(
        new Date(),
        new Date(year, category.date?.month - 1, category.date?.day)
      )
    );

    const smallest = Math.min(
      Math.abs(
        differenceInDays(
          new Date(),
          new Date(year, category.date?.month - 1, category.date?.day)
        )
      ),
      Math.abs(
        differenceInDays(
          new Date(),
          new Date(year - 1, category.date?.month - 1, category.date?.day)
        )
      )
    );
    return smallest > 14 ? 14 : smallest;
  }
  return 14;
};

// sort categories by how close they are to the current date, only caring
// if they are in the next or previous 12 weeks.
export const CATEGORIES = sortBy(UNSORTED_CATEGORIES, (category) =>
  getTimeToEvent(category)
);
