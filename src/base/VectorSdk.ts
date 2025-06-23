import {
  EnumerateAndSearchRequest,
  EnumerateRequest,
  VectorCreateRequest,
  VectorMetadata,
  VectorSearchRequest,
} from '../types';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { VectorSearchResult } from '../types';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';
import Utils from '../utils/Utils';

export class VectorSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  /**
   * Read all vectors.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata[]>}
   */
  async readAll(cancellationToken?: AbortController): Promise<VectorMetadata[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors`;
    return await this.getMany<VectorMetadata>(url, cancellationToken);
  }

  /**
   * Read a vector.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(guid: string, cancellationToken?: AbortController): Promise<VectorMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors/${guid}`;
    return await this.get<VectorMetadata>(url, cancellationToken);
  }

  /**
   * Vector exists.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a vector.
   * @param {VectorCreateRequest} vector - The vector to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata>}
   */
  async create(vector: VectorCreateRequest, cancellationToken?: AbortController): Promise<VectorMetadata> {
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('vector');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors`;
    return await this.putCreate<VectorMetadata>(url, vector, cancellationToken);
  }

  /**
   * Create multiple vectors
   * @param {VectorCreateRequest[]} vectors - The vectors to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata[]>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createBulk(vectors: VectorCreateRequest[], cancellationToken?: AbortController): Promise<VectorMetadata[]> {
    if (!vectors) {
      GenericExceptionHandlers.ArgumentNullException('vectors');
    }
    if (vectors.length < 1) {
      GenericExceptionHandlers.GenericException('Vectors array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors/bulk`;
    return await this.putCreate<VectorMetadata[]>(url, vectors, cancellationToken);
  }

  /**
   * Update a vector.
   * @param {VectorMetadata} vector - The vector to update.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata>}
   */
  async update(vector: VectorMetadata, guid: string, cancellationToken?: AbortController): Promise<VectorMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('vector');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors/${guid}`;
    return await this.putUpdate<VectorMetadata>(url, vector, cancellationToken);
  }

  /**
   * Delete a vector.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<void>}
   */
  async delete(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors/${guid}`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Delete multiple vectors
   * @param {string[]} guids - The GUIDs of the vectors to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteBulk(guids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!guids) {
      GenericExceptionHandlers.ArgumentNullException('guids');
    }
    if (guids.length < 1) {
      GenericExceptionHandlers.GenericException('Vectors array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors/bulk`;
    return await this.deleteMany(url, guids, cancellationToken);
  }

  /**
   * Search Vectors.
   * @param {VectorSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorSearchResult[]>} - The search result.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async search(searchReq: VectorSearchRequest, cancellationToken?: AbortController): Promise<VectorSearchResult[]> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('Search Request');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/vectors`;
    const json = JSON.stringify(searchReq);
    return await this.post<VectorSearchResult[]>(url, json, cancellationToken);
  }

  /**
   * Enumerate all vectors.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata[]>} - An array of vectors.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerate(request?: EnumerateRequest, cancellationToken?: AbortController): Promise<VectorMetadata[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/vectors`;
    const params = Utils.createUrlParams(request);
    return await this.get<VectorMetadata[]>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata[]>} - An array of vectors.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerateAndSearch(
    request: EnumerateAndSearchRequest,
    cancellationToken?: AbortController
  ): Promise<VectorMetadata[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/vectors`;
    return await this.post<VectorMetadata[]>(url, request, cancellationToken);
  }
}
