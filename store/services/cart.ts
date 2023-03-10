import { callApi } from "../../utils/apiUtils";
import { cartEndPoints } from "../endPoints/cart";

export const addToCartDetails = ({ body }: any) =>
  callApi({
    uriEndPoint: cartEndPoints.addCart.v1,
    body,
  });
export const getCart = () =>
  callApi({
    uriEndPoint: cartEndPoints.getCart.v1,
  });
export const deleteCart = ({ pathParams }: any) =>
  callApi({
    uriEndPoint: cartEndPoints.deleteCart.v1,
    pathParams,
  });
