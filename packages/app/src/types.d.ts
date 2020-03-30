import { Category } from "./data/categories";

// Define the types for the route params so we can type check
type NavStackParamList = {
  home: undefined;
  category: { category: Category };
};
