import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import {
  EnumerateAndSearchRequest,
  EnumerateRequest,
  EnumerateResponse,
  TenantMetaData,
  TenantMetaDataCreateRequest,
  TenantStatistics,
  TenantStatisticsResponse,
} from '../types';
import Utils from '../utils/Utils';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class TenantSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Read all tenants.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData[]>} - An array of tenants.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(cancellationToken?: AbortController): Promise<TenantMetaData[]> {
    const url = `${this.config.endpoint}v1.0/tenants`;
    return await this.get<TenantMetaData[]>(url, cancellationToken);
  }

  /**
   * Read a tenant.
   * @param {string} tenantGuid - The GUID of the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData>} - The tenant.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(tenantGuid: string, cancellationToken?: AbortController): Promise<TenantMetaData> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${tenantGuid}`;
    return await this.get<TenantMetaData>(url, cancellationToken);
  }

  /**
   * Read multiple tenants.
   * @param {string[]} tenantGuids - The GUIDs of the tenants.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData[]>} - The tenants.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readMany(tenantGuids: string[], cancellationToken?: AbortController): Promise<TenantMetaData[]> {
    if (!tenantGuids || tenantGuids.length === 0) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuids');
    }
    const url = `${this.config.endpoint}v1.0/tenants?guids=${tenantGuids.join(',')}`;
    return await this.get<TenantMetaData[]>(url, cancellationToken);
  }

  /**
   * Create a tenant.
   * @param {TenantMetaDataCreateRequest} tenant - The tenant to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData>} - The created tenant.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async create(tenant: TenantMetaDataCreateRequest, cancellationToken?: AbortController): Promise<TenantMetaData> {
    if (!tenant) {
      GenericExceptionHandlers.ArgumentNullException('tenant');
    }
    const url = `${this.config.endpoint}v1.0/tenants`;
    return await this.putCreate<TenantMetaData>(url, tenant, cancellationToken);
  }

  /**
   * Update a tenant.
   * @param {TenantMetaData} tenant - The tenant to update.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData>} - The updated tenant.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async update(tenant: TenantMetaData, cancellationToken?: AbortController): Promise<TenantMetaData> {
    if (!tenant) {
      GenericExceptionHandlers.ArgumentNullException('tenant');
    }
    if (!tenant.GUID) {
      GenericExceptionHandlers.ArgumentNullException('tenant.GUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${tenant.GUID}`;
    return await this.putUpdate<TenantMetaData>(url, tenant, cancellationToken);
  }

  /**
   * Delete a tenant.
   * @param {string} tenantGuid - The GUID of the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async delete(tenantGuid: string, force: boolean = false, cancellationToken?: AbortController): Promise<boolean> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    let url = `${this.config.endpoint}v1.0/tenants/${tenantGuid}`;
    if (force) {
      url += '?force';
    }
    return await this.del(url, cancellationToken);
  }

  /**
   * Tenant exists.
   * @param {string} tenantGuid - The GUID of the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(tenantGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${tenantGuid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Enumerate all tenants.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<EnumerateResponse<TenantMetaData>>} - An array of tenants.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerate(
    request?: EnumerateRequest,
    cancellationToken?: AbortController
  ): Promise<EnumerateResponse<TenantMetaData>> {
    const url = `${this.config.endpoint}v2.0/tenants`;
    const params = Utils.createUrlParams(request);
    return await this.get<EnumerateResponse<TenantMetaData>>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<EnumerateResponse<TenantMetaData>>} - An array of tenants.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async enumerateAndSearch(
    request: EnumerateAndSearchRequest,
    cancellationToken?: AbortController
  ): Promise<EnumerateResponse<TenantMetaData>> {
    const url = `${this.config.endpoint}v2.0/tenants`;
    return await this.post<EnumerateResponse<TenantMetaData>>(url, request, cancellationToken);
  }

  /**
   * Read all tenants Statistics
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantStatisticsResponse>} - An array of tenants statistics.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readStatistics(cancellationToken?: AbortController): Promise<TenantStatisticsResponse> {
    const url = `${this.config.endpoint}v1.0/tenants/stats`;
    return await this.get<TenantStatisticsResponse>(url, cancellationToken);
  }

  /**
   * Read tenant Statistics
   * @param {string} tenantGuid - The GUID of the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantStatistics>} - A tenant statistics.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readStatistic(tenantGuid: string, cancellationToken?: AbortController): Promise<TenantStatistics> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${tenantGuid}/stats`;
    return await this.get<TenantStatistics>(url, cancellationToken);
  }
}
