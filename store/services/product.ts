import { callApi } from "../../utils/apiUtils";
import { productsEndPoints } from "../endPoints/products";

export const getProducts = ({ pathParams, query }: any) =>
  callApi({
    uriEndPoint: productsEndPoints.getProducts.v1,
    pathParams,
    query,
  });
export const getSingleProducts = ({ pathParams }: any) =>
  callApi({
    uriEndPoint: productsEndPoints.getSingleProducts.v1,
    pathParams,
  });
