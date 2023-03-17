import { callApi } from "../../utils/apiUtils";
import { addressEndPoints } from "../endPoints/address";


export const shippingAddress = ({ body }: any) =>
  callApi({
    uriEndPoint: addressEndPoints.login.v1,
    body,
  });