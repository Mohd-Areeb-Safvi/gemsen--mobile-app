import { authEndPoints } from "../endPoints/auth";
import { callApi } from "../../utils/apiUtils";

export const userLogin = ({ body }: any) =>
  callApi({
    uriEndPoint: authEndPoints.login.v1,
    body,
  });

export const fp = ({ body }: any) =>
  callApi({
    uriEndPoint: authEndPoints.fp.v1,
    body,
  });
