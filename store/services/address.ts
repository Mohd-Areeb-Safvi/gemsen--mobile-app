import { callApi } from "../../utils/apiUtils";
import { addressEndPoints } from "../endPoints/address";

export const shippingAddress = ({ body }: any) =>
  callApi({
    uriEndPoint: addressEndPoints.addAddress.v1,
    body,
  });
export const getAddress = () =>
  callApi({
    uriEndPoint: addressEndPoints.getAddress.v1,
  });
