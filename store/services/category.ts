import { callApi } from "../../utils/apiUtils";
import { categoryEndPoints } from "../endPoints/category";

export const getCategory = () =>
  callApi({
    uriEndPoint: categoryEndPoints.getCategory.v1,
  });
