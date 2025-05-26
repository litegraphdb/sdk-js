import { Token } from '../types';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { TenantMetaData } from '../types';
import SdkBase from './SdkBase';

export class AuthenticationSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {string} endpoint - The endpoint URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */
  constructor(endpoint: string = 'http://localhost:8000/', tenantGuid: string, accessKey: string) {
    super(endpoint, tenantGuid, accessKey);
  }

  /**
   * Generate an authentication token.
   * @param {string} email - The user's email address.
   * @param {string} tenantId - The tenant ID.
   * @param {string} password - The user's password.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Token>} The generated authentication token
   */
  async generateToken(
    email: string,
    password: string,
    tenantId: string,
    cancellationToken?: AbortController
  ): Promise<Token> {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    if (!password) {
      GenericExceptionHandlers.ArgumentNullException('password');
    }
    if (!tenantId) {
      GenericExceptionHandlers.ArgumentNullException('tenantId');
    }

    const url = `${this.endpoint}v1.0/token`;
    const headers = {
      'x-email': email,
      'x-password': password,
      'x-tenant-guid': tenantId,
    };

    return await this.get<Token>(url, cancellationToken, headers);
  }

  /**
   * Fetch details about an authentication token.
   * @param {string} token - The authentication token to inspect.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Token>} The token details
   */
  async getTokenDetails(token: string, cancellationToken?: AbortController): Promise<Token> {
    if (!token) {
      GenericExceptionHandlers.ArgumentNullException('token');
    }

    const url = `${this.endpoint}v1.0/token/details`;
    const headers = {
      'x-token': token,
    };

    return await this.get<Token>(url, cancellationToken, headers);
  }

  /**
   * Get tenants associated with an email address.
   * @param {string} email - The email address to lookup tenants for.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData[]>} Array of tenants associated with the email
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async getTenantsForEmail(email: string, cancellationToken?: AbortController): Promise<TenantMetaData[]> {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }

    const url = `${this.endpoint}v1.0/token/tenants`;
    return await this.getMany<TenantMetaData>(url, cancellationToken, {
      'x-email': email,
    });
  }
}
