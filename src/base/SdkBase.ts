import superagent from 'superagent';
import { SeverityEnum } from '../enums/SeverityEnum';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import Serializer from '../utils/Serializer';
import { SdkConfiguration } from './SdkConfiguration';
import Logger from '../utils/Logger';

/**
 * SDK Base class for making API calls with logging and timeout functionality.
 * @module SdkBase
 */
export default class SdkBase {
  private logger: (severity: SeverityEnum, message: string) => void;
  protected config: SdkConfiguration;
  /**
   * Creates an instance of SdkBase.
   * @param {SdkConfiguration} config - The SDK configuration.
   * @throws {Error} Throws an error if the config is null.
   */
  constructor(config: SdkConfiguration) {
    if (!config) {
      GenericExceptionHandlers.ArgumentNullException('config');
    }
    this.config = config;
    this.logger = Logger.log;
  }

  /**
   * Logs a message with a severity level.
   * @param {string} sev - The severity level (e.g., SeverityEnum.Debug, 'warn').
   * @param {string} msg - The message to log.
   */
  protected log(sev: SeverityEnum, msg: string) {
    if (!msg) return;
    if (this.logger) this.logger(sev, this.config.header + msg);
  }

  /**
   * Sends a PUT request to create an object at a given URL.
   * @param {string} url - The URL where the object is created.
   * @param {Object} obj - The object to be created.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<Object>} Resolves with the created object.
   * @throws {Error | ApiErrorResponse} Rejects if the URL or object is invalid or if the request fails.
   */
  protected putCreate<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));
      if (!obj) return reject(new Error('Object cannot be null.'));

      const request = superagent
        .put(url)
        .set(this.config.defaultHeaders)
        .set('Content-Type', 'application/json')
        .send(obj)
        .timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(Serializer.deserializeJson(res.text));
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Checks if an object exists at a given URL using a HEAD request.
   * @param {string} url - The URL to check.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<boolean>} Resolves to true if the object exists.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  protected head(url: string, cancellationToken?: AbortController): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));

      const request = superagent.head(url).set(this.config.defaultHeaders).timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(res.ok);
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Retrieves an object from a given URL using a GET request.
   * @param {string} url - The URL of the object.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @param {Object} [headers] - Additional headers.
   * @param {boolean} [doNotDeserialize] - Optional flag to not deserialize the response.
   * @return {Promise<any>} Resolves with the retrieved object.
   * @throws {Error} Rejects if the URL is invalid or if the request fails.
   */
  protected get<T>(
    url: string,
    cancellationToken?: AbortController,
    headers?: any,
    doNotDeserialize?: boolean
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));

      const request = superagent
        .get(url)
        .set({ ...this.config.defaultHeaders, ...(headers || {}) })
        .timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(doNotDeserialize ? res.text : Serializer.deserializeJson(res.text));
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Retrieves raw data from a given URL using a GET request.
   * @param {string} url - The URL of the object.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<any>} Resolves with the retrieved data.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  protected getDataInBytes<T>(url: string, cancellationToken?: AbortController): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));

      const request = superagent.get(url).set(this.config.defaultHeaders).timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(res.text ? res.text : Serializer.deserializeJson(res.body));
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Retrieves a list of objects from a given URL using a GET request.
   * @param {string} url - The URL of the objects.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @param {Object} [headers] - Additional headers.
   * @return {Promise<Array<T>>} Resolves with the list of retrieved objects.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  protected getMany<T>(url: string, cancellationToken?: AbortController, headers?: any): Promise<T[]> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));

      const request = superagent
        .get(url)
        .set({ ...this.config.defaultHeaders, ...(headers || {}) })
        .timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(Serializer.deserializeJson(res.text));
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Sends a PUT request to update an object at a given URL.
   * @param {string} url - The URL where the object is created.
   * @param {Object} obj - The object to be created.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<T>} Resolves with the created object.
   * @throws {Error | ApiErrorResponse} Rejects if the URL or object is invalid or if the request fails.
   */
  protected putUpdate<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));
      if (!obj) return reject(new Error('Object cannot be null.'));

      const request = superagent
        .put(url)
        .set(this.config.defaultHeaders)
        .set('Content-Type', 'application/json')
        .send(obj)
        .timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(Serializer.deserializeJson(res.text));
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Sends a DELETE request to remove an object at a given URL.
   * @param {string} url - The URL of the object to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<boolean>} Resolves if the object is successfully deleted.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  protected del(url: string, cancellationToken?: AbortController): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));

      const request = superagent
        .delete(url)
        .set(this.config.defaultHeaders)
        .timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(true);
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Submits data using a POST request to a given URL.
   * @param {string} url - The URL to post data to.
   * @param {Object|string} data - The data to send in the POST request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<Object>} Resolves with the response data.
   * @throws {Error | ApiErrorResponse} Rejects if the URL or data is invalid or if the request fails.
   */
  protected post<T>(url: string, data: any, cancellationToken?: AbortController): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));
      const request = superagent
        .post(url)
        .set(this.config.defaultHeaders)
        .set('Content-Type', 'application/json')
        .send(data)
        .timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${request.method}: ${url}.`);
        };
      }
      request
        .then((res) => {
          this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
          resolve(Serializer.deserializeJson(res.text || '{}'));
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${request.method}: ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Sends a DELETE request to remove an object at a given URL.
   * @param {string} url - The URL of the object to delete.
   * @param {Object} obj - The object to be created.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<boolean>} Resolves if the object is successfully deleted.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid, the object is not serializable, or if the request fails.
   */
  protected deleteMany(url: string, obj: any, cancellationToken?: AbortController): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('URL cannot be null or empty.'));

      const request = superagent
        .delete(url)
        .send(obj)
        .set(this.config.defaultHeaders)
        .set('Content-Type', 'application/json')
        .timeout({ response: this.config.timeoutMs });

      // Attach the abort method if cancellationToken is provided
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${request.method}: ${url}.`);
        };
      }

      request
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            this.log(SeverityEnum.Debug, `Success reported from ${request.method}: ${url}: ${res.status}`);
            resolve(true);
          } else {
            this.log(SeverityEnum.Warn, `Non-success reported from ${request.method}: ${url}: ${res.status}`);
            resolve(false);
          }
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${request.method}: ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }

  /**
   * Submits a POST request.
   * @param {string} url - The URL to which the request is sent.
   * @param {Object} obj - The object to send in the POST request body.
   * @param {AbortController} [cancellationToken] - Optional cancellation token to cancel the request.
   * @returns {Promise<Object|null>} The response data parsed as an object of type Object, or null if unsuccessful.
   * @throws {Error | ApiErrorResponse} If the URL is invalid or the object cannot be serialized to JSON.
   */
  protected postBatch<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) throw new Error('URL cannot be null or empty.');

      const json = Serializer.serializeJson(obj, true);
      if (json === null) throw new Error('Supplied object is not serializable to JSON.');

      const request = superagent
        .post(url)
        .timeout({ response: this.config.timeoutMs })
        .set(this.config.defaultHeaders)
        .set('Content-Type', 'application/json')
        .send(json);

      // Handle cancellation if token is provided
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          this.log(SeverityEnum.Debug, `Request aborted to ${url}.`);
        };
      }

      // const res = await request;
      request
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            this.log(SeverityEnum.Debug, `Success reported from ${url}: ${res.status}`);

            // If response has content, parse as JSON and return
            if (res.text && res.text.length > 0) {
              resolve(Serializer.deserializeJson(res.text));
            } else {
              return null;
            }
          } else {
            this.log(SeverityEnum.Warn, `Non-success reported from ${url}: ${res.status}`);
            return null;
          }
        })
        .catch((err) => {
          this.log(SeverityEnum.Warn, `Failed to retrieve object from ${url}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }
}
