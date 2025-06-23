import { EnumerateRequest } from "../types";


/*
  StringUtils is a utility class for string operations.
*/
class Utils {
  /**
   * Encodes a string to base64.
   * @param {string} str - The string to encode.
   * @return {string} The encoded string.
   */
  static createUrlParams(request?: EnumerateRequest) {
    const params = new URLSearchParams();
    if (request?.token) {
      params.set('token', request.token);
    }
    if (request?.maxKeys) {
      params.set('maxKeys', request.maxKeys.toString());
    }
    return params.toString() ? '?' + params.toString() : '';
  }
}

export default Utils;