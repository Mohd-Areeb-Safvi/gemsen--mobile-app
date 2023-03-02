import { defaults } from "./default";

export const cartEndPoints = {
  addCart: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/cart/add",
    },
  },
  getCart: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/cart",
    },
  },
};
