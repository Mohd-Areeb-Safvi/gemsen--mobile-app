import { Platform } from "react-native";
/**
 * Utility methods to be used for invoking API methods
 */
import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";
import queryString from "querystring";
export const hostname = () => {
  // let hostUrl = "http://192.168.10.103:5003/api";
  let hostUrl = "http://10.0.0.10:5005/api";
  return hostUrl;
};
const hostUrl = hostname();
export const makeUrl = (
  { uri = "", pathParams, query, version }: any,
  host: any
) =>
  `${host || hostUrl}${version}${uri
    .split("/")
    .map((param: any) =>
      param.charAt(0) === ":" ? encodeURI(pathParams[param.slice(1)]) : param
    )
    .join("/")}${query ? `?${queryString.stringify(query)}` : ""}`;
export const getDefaultHeaders = async (multipart: boolean) => {
  const authorization = await AsyncStorage.getItem("accessToken");
  const contentType =
    multipart === true ? "multipart/form-data" : "application/json";
  // console.log("authorization", authorization)
  return {
    authorization,
    "Content-Type": contentType,
  };
};
/**
 * Returns true if the input apiResponse has errors.
 * @param {*} apiResponse
 */
export const hasErrors = (apiResponse: any) => {
  const { error } = apiResponse;
  if (error) {
    return true;
  }
  return false;
};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 1.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callAxios
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
const callAxios = async (
  { uriEndPoint, pathParams, query, body, apiHostUrl, multipart }: any,
  options?: CallApiOptions
) => {
  const defHeaders = await getDefaultHeaders(multipart);
  let headers = {};
  if (!options?.hideDefaultHeaders) {
    headers = {
      ...defHeaders,
    };
  }
  // console.log(
  //   makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
  //   "url"
  // );
  return Axios({
    method: uriEndPoint.method,
    url: makeUrl({ ...uriEndPoint, pathParams, query }, apiHostUrl),
    headers: {
      ...headers,
      ...uriEndPoint.headerProps,
    },
    data: body || undefined,
  });
};
/**
 * Extract the error messages from a failed API response.
 * @param {} apiResponse
 */
// const extractErrors = () => {};
/**
 * Generic utility method that should be called when invoking any REST API
 *
 * This function streamlines the functionality to make api calls,
 * and carries easy management for controlling versions of the apis
 *
 * @since 2.0.0
 *
 * @todo all the incoming values for the APIParamaters.pathParams and APIParamaters.query
 * should be uri encoded.
 * @alias callApi
 * @memberof apiUtils
 * @param {Object} APIParamaters - Set of objects required to make the api call.
 * @param {Object} APIParamaters.uriEndPoint - Endpoint object as described in apiEndPoints.js.
 * @param {String} APIParamaters.uriEndPoint.api - Path to your endpoint
 * @param {String} APIParamaters.uriEndPoint.method - POST/GET/PUT/DELETE etc.
 * @param {String} APIParamaters.uriEndPoint.version - Versioning of your api
 * @param {Object} APIParamaters.uriEndPoint.headerProps - Object of headers you want to pass.
 * @param {Object} APIParamaters.pathParams - Path parameters. Example :id in the path,
 * then pathParams object will be {id:value}.
 * @param {Object} APIParamaters.query - GET/POST/PUT/DELETE Endpoint.
 * @param {Object} APIParamaters.body - Body of the request.
 * @returns {Promise<object>} Body Data from the server.
 */
export const callApi = (
  {
    uriEndPoint = { uri: "", method: "", version: "", headerProps: {} },
    pathParams,
    query,
    body,
    apiHostUrl,
    multipart,
  }: CallApiType,
  options?: CallApiOptions
) =>
  new Promise((resolve, reject) => {
    callAxios(
      {
        uriEndPoint,
        pathParams,
        query,
        body,
        apiHostUrl,
        multipart,
      },
      options
    )
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        if (!err.response) {
          reject(err);

          return;
        }
        if (err?.response?.status === 401) {
          reject(err.response);
        }
        if (err?.response) {
          reject(err.response);
        }
      });
  });
interface CallApiType {
  uriEndPoint?: UriEndPoint;
  pathParams?: HeaderPropsOrPathParamsOrQueryOrBody;
  query?: HeaderPropsOrPathParamsOrQueryOrBody;
  body?: HeaderPropsOrPathParamsOrQueryOrBody;
  apiHostUrl?: string;
  multipart?: boolean;
}
interface CallApiOptions {
  hideDefaultHeaders: boolean;
}
export interface UriEndPoint {
  pathParams?: UriEndPoint;
  uri: string;
  method: string;
  version: string;
  headerProps?: HeaderPropsOrPathParamsOrQueryOrBody;
  apiKey?: string;
}
interface HeaderPropsOrPathParamsOrQueryOrBody {}
export interface UriEndPointWithVersions {
  v1: UriEndPoint;
}
