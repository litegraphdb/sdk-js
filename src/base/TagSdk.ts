import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { EnumerateAndSearchRequest, EnumerateRequest, TagMetaData, TagMetaDataCreateRequest } from '../types';
import Utils from '../utils/Utils';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class TagSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }
  /**
   * Read all tags.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData[]>}
   */
  async readAll(cancellationToken?: AbortController): Promise<TagMetaData[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags`;
    return await this.getMany<TagMetaData>(url, cancellationToken);
  }

  /**
   * Read a tag.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(guid: string, cancellationToken?: AbortController): Promise<TagMetaData> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags/${guid}`;
    return await this.get<TagMetaData>(url, cancellationToken);
  }

  /**
   * Tag exists.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a tag.
   * @param {TagMetaDataCreateRequest} tag - The tag to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async create(tag: TagMetaDataCreateRequest, cancellationToken?: AbortController): Promise<TagMetaData> {
    if (!tag) {
      GenericExceptionHandlers.ArgumentNullException('tag');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags`;
    return await this.putCreate<TagMetaData>(url, tag, cancellationToken);
  }

  /**
   * Create multiple tags
   * @param {TagMetaData[]} tags - The tags to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData[]>}
   */
  async createBulk(tags: TagMetaDataCreateRequest[], cancellationToken?: AbortController): Promise<TagMetaData[]> {
    if (!tags) {
      GenericExceptionHandlers.ArgumentNullException('tags');
    }
    if (tags.length < 1) {
      GenericExceptionHandlers.GenericException('Tags array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags/bulk`;
    return await this.putCreate<TagMetaData[]>(url, tags, cancellationToken);
  }

  /**
   * Update a tag.
   * @param {TagMetaData} tag - The tag to update.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData>}
   */
  async update(tag: TagMetaData, guid: string, cancellationToken?: AbortController): Promise<TagMetaData> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!tag) {
      GenericExceptionHandlers.ArgumentNullException('tag');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags/${guid}`;
    return await this.putUpdate<TagMetaData>(url, tag, cancellationToken);
  }

  /**
   * Delete a tag.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async delete(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags/${guid}`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Delete multiple tags
   * @param {string[]} guids - The GUIDs of the tags to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteBulk(guids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!guids) {
      GenericExceptionHandlers.ArgumentNullException('guids');
    }
    if (guids.length < 1) {
      GenericExceptionHandlers.GenericException('Tags array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/tags/bulk`;
    return await this.deleteMany(url, guids, cancellationToken);
  }

  /**
   * Enumerate all tags.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData[]>} - An array of tags.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerate(request?: EnumerateRequest, cancellationToken?: AbortController): Promise<TagMetaData[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/tags`;
    const params = Utils.createUrlParams(request);
    return await this.get<TagMetaData[]>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData[]>} - An array of tags.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerateAndSearch(
    request: EnumerateAndSearchRequest,
    cancellationToken?: AbortController
  ): Promise<TagMetaData[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/tags`;
    return await this.post<TagMetaData[]>(url, request, cancellationToken);
  }
}
