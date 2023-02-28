import { callApi } from "../../utils/apiUtils";
import { productsEndPoints } from "../endPoints/products";

export const getProducts = ({ pathParams }: any) =>
  callApi({
    uriEndPoint: productsEndPoints.getProducts.v1,
    pathParams,
  });
