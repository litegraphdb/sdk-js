import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import {
  CredentialMetadata,
  CredentialMetadataCreateRequest,
  EnumerateAndSearchRequest,
  EnumerateRequest,
} from '../types';
import Utils from '../utils/Utils';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class CredentialSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration   .
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  /**
   * Read all credentials.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata[]>} - An array of credentials.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(cancellationToken?: AbortController): Promise<CredentialMetadata[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/credentials`;
    return await this.getMany<CredentialMetadata>(url, cancellationToken);
  }

  /**
   * Read a credential.
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata>} - The credential.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(guid: string, cancellationToken?: AbortController): Promise<CredentialMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/credentials/${guid}`;
    return await this.get<CredentialMetadata>(url, cancellationToken);
  }

  /**
   * Create a credential.
   * @param {CredentialMetadataCreateRequest} credential - The credential to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata>} - The created credential.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async create(
    credential: CredentialMetadataCreateRequest,
    cancellationToken?: AbortController
  ): Promise<CredentialMetadata> {
    if (!credential) {
      GenericExceptionHandlers.ArgumentNullException('credential');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/credentials`;
    return await this.putCreate<CredentialMetadata>(url, credential, cancellationToken);
  }

  /**
   * Update a credential.
   * @param {CredentialMetadata} credential - The credential to update.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata>} - The updated credential.
   */
  async update(
    credential: CredentialMetadata,
    guid: string,
    cancellationToken?: AbortController
  ): Promise<CredentialMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!credential) {
      GenericExceptionHandlers.ArgumentNullException('credential');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/credentials/${guid}`;
    return await this.putUpdate<CredentialMetadata>(url, credential, cancellationToken);
  }

  /**
   * Delete a credential.
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async delete(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/credentials/${guid}`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Credential exists.
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/credentials/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Enumerate all credentials.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata[]>} - An array of credentials.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerate(request?: EnumerateRequest, cancellationToken?: AbortController): Promise<CredentialMetadata[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/credentials`;
    const params = Utils.createUrlParams(request);
    return await this.get<CredentialMetadata[]>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata[]>} - An array of credentials.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerateAndSearch(
    request: EnumerateAndSearchRequest,
    cancellationToken?: AbortController
  ): Promise<CredentialMetadata[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/credentials`;
    return await this.post<CredentialMetadata[]>(url, request, cancellationToken);
  }
}
