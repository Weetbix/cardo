import { Category } from "./data/categories";

// Define the types for the route params so we can type check
type NavStackParamList = {
  home: undefined;
  error: undefined;
  category: { category: Category };
  suggestion: { category: Category };
  suggestionsuccess: { category: Category };
};
