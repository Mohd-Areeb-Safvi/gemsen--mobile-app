import { authEndPoints } from "../endPoints/auth";
import { callApi } from "../../utils/apiUtils";

export const userLogin = ({ body }: any) =>
  callApi({
    uriEndPoint: authEndPoints.login.v1,
    body,
  }).catch((err) => {
    throw err;
  });

export const currentUser = () =>
  callApi({
    uriEndPoint: authEndPoints.currentUser.v1,
  });
