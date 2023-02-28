import { defaults } from "./default";

export const categoryEndPoints = {
  getCategory: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/category/getMainCategoryDetails",
    },
  },
  getSubCategory: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/category/getSubCategory/:id",
    },
  },
  getLastCategoryDetails: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/category/getLastCategoryDetails/:id",
    },
  },
};
