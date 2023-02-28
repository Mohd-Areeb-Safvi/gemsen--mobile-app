import { callApi } from "../../utils/apiUtils";
import { categoryEndPoints } from "../endPoints/category";

export const getCategory = () =>
  callApi({
    uriEndPoint: categoryEndPoints.getCategory.v1,
  });
export const getSubCategory = ({ pathParams, body }: any) =>
  callApi({
    uriEndPoint: categoryEndPoints.getSubCategory.v1,
    pathParams,
    body,
  });
export const getLastCategoryDetails = ({ pathParams }: any) =>
  callApi({
    uriEndPoint: categoryEndPoints.getLastCategoryDetails.v1,
    pathParams,
  });
