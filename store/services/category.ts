import { callApi } from "../../utils/apiUtils";
import { categoryEndPoints } from "../endPoints/category";

export const getCategory = () =>
  callApi({
    uriEndPoint: categoryEndPoints.getCategory.v1,
  });
export const getSubCategory = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: categoryEndPoints.getSubCategory.v1,
    pathParams,
  });
};
