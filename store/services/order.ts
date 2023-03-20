import { callApi } from "../../utils/apiUtils";
import { orderEndPoints } from "../endPoints/order";

export const addOrder = ({ body }: any) =>
  callApi({
    uriEndPoint: orderEndPoints.addOrder.v1,
    body,
  });
