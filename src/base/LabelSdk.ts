import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import {
  EnumerateAndSearchRequest,
  EnumerateRequest,
  EnumerateResponse,
  LabelMetadata,
  LabelMetadataCreateRequest,
} from '../types';
import Utils from '../utils/Utils';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class LabelSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  /**
   * Read all labels.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata[]>}
   */
  async readAll(cancellationToken?: AbortController): Promise<LabelMetadata[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels`;
    return await this.getMany<LabelMetadata>(url, cancellationToken);
  }

  /**
   * Read a label.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(guid: string, cancellationToken?: AbortController): Promise<LabelMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels/${guid}`;
    return await this.get<LabelMetadata>(url, cancellationToken);
  }

  /**
   * Label exists.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a label.
   * @param {LabelMetadataCreateRequest} label - The label to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata>}
   */
  async create(label: LabelMetadataCreateRequest, cancellationToken?: AbortController): Promise<LabelMetadata> {
    if (!label) {
      GenericExceptionHandlers.ArgumentNullException('label');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels`;
    return await this.putCreate<LabelMetadata>(url, label, cancellationToken);
  }

  /**
   * Create multiple labels
   * @param {LabelMetadata[]} labels - The labels to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata[]>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createBulk(
    labels: LabelMetadataCreateRequest[],
    cancellationToken?: AbortController
  ): Promise<LabelMetadata[]> {
    if (!labels) {
      GenericExceptionHandlers.ArgumentNullException('labels');
    }
    if (labels.length < 1) {
      GenericExceptionHandlers.GenericException('Labels array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels/bulk`;
    return await this.putCreate<LabelMetadata[]>(url, labels, cancellationToken);
  }

  /**
   * Update a label.
   * @param {LabelMetadata} label - The label to update.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async update(label: LabelMetadata, cancellationToken?: AbortController): Promise<LabelMetadata> {
    if (!label) {
      GenericExceptionHandlers.ArgumentNullException('label');
    }
    if (!label.GUID) {
      GenericExceptionHandlers.ArgumentNullException('label.GUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels/${label.GUID}`;
    return await this.putUpdate<LabelMetadata>(url, label, cancellationToken);
  }

  /**
   * Delete a label.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<void>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async delete(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels/${guid}`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Delete multiple labels
   * @param {string[]} guids - The GUIDs of the labels to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteBulk(guids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!guids) {
      GenericExceptionHandlers.ArgumentNullException('guids');
    }
    if (guids.length < 1) {
      GenericExceptionHandlers.GenericException('Labels array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/labels/bulk`;
    return await this.deleteMany(url, guids, cancellationToken);
  }

  /**
   * Enumerate all labels.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<EnumerateResponse<LabelMetadata>>} - An array of labels.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerate(
    request?: EnumerateRequest,
    cancellationToken?: AbortController
  ): Promise<EnumerateResponse<LabelMetadata>> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/labels`;
    const params = Utils.createUrlParams(request);
    return await this.get<EnumerateResponse<LabelMetadata>>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<EnumerateResponse<LabelMetadata>>} - An array of labels.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerateAndSearch(
    request: EnumerateAndSearchRequest,
    cancellationToken?: AbortController
  ): Promise<EnumerateResponse<LabelMetadata>> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/labels`;
    return await this.post<EnumerateResponse<LabelMetadata>>(url, request, cancellationToken);
  }
}
