import { defaults } from "./default";

export const authEndPoints = {
  login: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/auth/login",
    },
  },
  currentUser: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/auth/me",
    },
  },
};
