import { defaults } from "./default";

export const addressEndPoints = {
  addAddress: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/address/add",
    },
  },
  getAddress: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/address/",
    },
  },
};
