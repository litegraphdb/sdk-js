import { EnumerateRequest } from '../types';

/*
  StringUtils is a utility class for string operations.
*/
class Utils {
  /**
   * Encodes a string to base64.
   * @param {string} str - The string to encode.
   * @return {string} The encoded string.
   */
  static createUrlParams(request?: EnumerateRequest): string {
    const params = new URLSearchParams();
    if (request?.token) {
      params.set('token', request.token);
    }
    if (request?.maxKeys) {
      params.set('maxKeys', request.maxKeys.toString());
    }
    if (request?.includeData) {
      params.set('incldata', request.includeData.toString());
    }
    if (request?.includeSubordinates) {
      params.set('inclsub', request.includeSubordinates.toString());
    }
    if (request?.skip) {
      params.set('skip', request.skip.toString());
    }
    return params.toString() ? '?' + params.toString() : '';
  }
}

export default Utils;
