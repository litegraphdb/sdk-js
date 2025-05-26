import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { CredentialMetadata, CredentialMetadataCreateRequest } from '../types';
import SdkBase from './SdkBase';

export class CredentialSdk extends SdkBase {
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
   * Read all credentials.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata[]>} - An array of credentials.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(cancellationToken?: AbortController): Promise<CredentialMetadata[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
    return await this.head(url, cancellationToken);
  }
}
