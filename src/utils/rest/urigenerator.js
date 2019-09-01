import {
    Constants
} from "../../constants";

/**
 * creating endpoints 
*/
export const uriGenerator = (...args) => `${process
    .env
    .REACT_APP_API_URL}/${Constants
    .ROOT}/${Constants
    .VERSION}/${args
    .join("/")}`;
