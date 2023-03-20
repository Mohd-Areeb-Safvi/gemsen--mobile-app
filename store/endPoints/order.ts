import { defaults } from "./default";

export const orderEndPoints = {
  addOrder: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/order/addorder",
    },
  },
};
