import { Category } from "./data/categories";
import { ImageSourcePropType } from "react-native";

// Define the types for the route params so we can type check
type NavStackParamList = {
  home: undefined;
  error: undefined;
  category: { category: Category };
  suggestion: { category: Category };
  reportmessage: { messageId: string };
  splash: {
    title: string;
    header: string;
    subHeader: string;
    image?: ImageSourcePropType;
  };
};
