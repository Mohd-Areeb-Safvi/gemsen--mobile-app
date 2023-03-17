import { defaults } from "./default";

export const addressEndPoints = {
  login: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/auth/shippingaddress",
    },
  },

};
