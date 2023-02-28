import { defaults } from "./default";

export const productsEndPoints = {
  getProducts: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/product/:id",
    },
  },
};
