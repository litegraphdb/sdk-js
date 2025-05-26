import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { TenantMetaData, TenantMetaDataCreateRequest } from '../types';
import SdkBase from './SdkBase';

export class TenantSdk extends SdkBase {
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
   * Read all tenants.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData[]>} - An array of tenants.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(cancellationToken?: AbortController): Promise<TenantMetaData[]> {
    const url = `${this.endpoint}v1.0/tenants`;
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
    const url = `${this.endpoint}v1.0/tenants/${tenantGuid}`;
    return await this.get<TenantMetaData>(url, cancellationToken);
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
    const url = `${this.endpoint}v1.0/tenants`;
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
    const url = `${this.endpoint}v1.0/tenants/${tenant.GUID}`;
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
    let url = `${this.endpoint}v1.0/tenants/${tenantGuid}`;
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
    const url = `${this.endpoint}v1.0/tenants/${tenantGuid}`;
    return await this.head(url, cancellationToken);
  }
}
