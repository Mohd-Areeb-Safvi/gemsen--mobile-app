import { defaults } from "./default";

export const authEndPoints = {
  login: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/auth/login",
    },
  },
  fp: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/auth/fp",
    },
  },
};
