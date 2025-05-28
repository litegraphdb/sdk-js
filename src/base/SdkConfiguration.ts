import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';

export class SdkConfiguration {
  private _endpoint: string;
  private _timeoutMs: number;
  private _header: string;
  private _tenantGuid?: string;
  private _accessKey?: string;
  private _accessToken?: string;
  public defaultHeaders: any;

  /**
   * Creates an instance of SdkBase.
   * @param {string} endpoint - The API endpoint base URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   * @throws {Error} Throws an error if the endpoint is null or empty.
   */
  constructor(endpoint: string, tenantGuid?: string, accessKey?: string) {
    if (!endpoint) {
      GenericExceptionHandlers.ArgumentNullException('Endpoint');
    }

    if (tenantGuid) {
      this.tenantGuid = tenantGuid;
    }
    if (accessKey) {
      this.accessKey = accessKey;
    }
    this.header = '[LiteGraphSdk] ';
    this.endpoint = endpoint.endsWith('/') ? endpoint : endpoint + '/';
    this.timeoutMs = 300000;
  }

  /**
   * Getter for the tenant GUID.
   * @return {string} The tenant GUID.
   */
  get tenantGuid(): string | undefined {
    if (!this._tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('TenantGuid');
    }
    return this._tenantGuid;
  }

  /**
   * Setter for the tenant GUID.
   * @param {string} value - The tenant GUID.
   * @throws {Error} Throws an error if the tenant GUID is null or empty.
   */
  set tenantGuid(value: string) {
    if (!value) {
      GenericExceptionHandlers.ArgumentNullException('TenantGuid');
    }
    this._tenantGuid = value;
  }

  /**
   * Getter for the access key.
   * @return {string} The access key.
   */
  get accessKey(): string | undefined {
    return this._accessKey;
  }

  /**
   * Setter for the access key.
   * @param {string} value - The access key.
   * @throws {Error} Throws an error if the access key is null or empty.
   */
  set accessKey(value: string) {
    if (!value) {
      GenericExceptionHandlers.ArgumentNullException('AccessKey');
    }
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${value}`,
    };
    this._accessKey = value;
  }
  /**
   * Getter for the access token.
   * @return {string} The access token.
   */
  get accessToken(): string | undefined {
    return this._accessToken;
  }

  /**
   * Setter for the access token.
   * @param {string} value - The access token.
   * @throws {Error} Throws an error if the access token is null or empty.
   */
  set accessToken(value: string) {
    if (!value) {
      GenericExceptionHandlers.ArgumentNullException('AccessToken');
    }

    this.defaultHeaders = {
      ...this.defaultHeaders,
      'x-token': value,
    };
    this._accessToken = value;
  }

  /**
   * Getter for the request header prefix.
   * @return {string} The header prefix.
   */
  get header(): string {
    return this._header;
  }

  /**
   * Setter for the request header prefix.
   * @param {string} value - The header prefix.
   */
  set header(value: string) {
    if (!value || typeof value !== 'string') {
      this._header = value;
    } else {
      this._header = value.endsWith(' ') ? value : value + ' ';
    }
  }

  /**
   * Getter for the API endpoint.
   * @return {string} The endpoint URL.
   */
  get endpoint(): string {
    return this._endpoint;
  }

  /**
   * Setter for the API endpoint.
   * @param {string} value - The endpoint URL.
   * @throws {Error} Throws an error if the endpoint is null or empty.
   */
  set endpoint(value: string) {
    if (!value) {
      GenericExceptionHandlers.ArgumentNullException('Endpoint');
    }
    this._endpoint = value.endsWith('/') ? value : value + '/';
  }

  /**
   * Getter for the timeout in milliseconds.
   * @return {number} The timeout in milliseconds.
   */
  get timeoutMs(): number {
    return this._timeoutMs;
  }

  /**
   * Setter for the timeout in milliseconds.
   * @param {number} value - Timeout value in milliseconds.
   * @throws {Error} Throws an error if the timeout is less than 1.
   */
  set timeoutMs(value: number) {
    if (value < 1) {
      GenericExceptionHandlers.GenericException('TimeoutMs must be greater than 0.');
    }
    this._timeoutMs = value;
  }
}
