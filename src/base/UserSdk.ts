import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { UserMetadata, UserMetadataCreateRequest } from '../types';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class UserSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Read all users.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata[]>} - An array of users.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(cancellationToken?: AbortController): Promise<UserMetadata[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/users`;
    return await this.getMany<UserMetadata>(url, cancellationToken);
  }

  /**
   * Read a user.
   * @param {string} userGuid - The GUID of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata>} - The user.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(userGuid: string, cancellationToken?: AbortController): Promise<UserMetadata> {
    if (!userGuid) {
      GenericExceptionHandlers.ArgumentNullException('userGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/users/${userGuid}`;
    return await this.get<UserMetadata>(url, cancellationToken);
  }

  /**
   * Create a user.
   * @param {UserMetadataCreateRequest} user - The user to create.
   * @param {String} user.FirstName - The first name of the user.
   * @param {String} user.LastName - The last name of the user.
   * @param {boolean} user.Active - Indicates if user is active.
   * @param {string} user.Email - The email of the user.
   * @param {string} user.Password - The password of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata>} - The created user.
   */
  async create(user: UserMetadataCreateRequest, cancellationToken?: AbortController): Promise<UserMetadata> {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/users`;
    return await this.putCreate<UserMetadata>(url, user, cancellationToken);
  }

  /**
   * User exists.
   * @param {string} guid - The GUID of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/users/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Update a user.
   * @param {UserMetadata} user - The user to update.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata>} - The updated user.
   */
  async update(user: UserMetadata, cancellationToken?: AbortController): Promise<UserMetadata> {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    if (!user.GUID) {
      GenericExceptionHandlers.ArgumentNullException('user.GUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/users/${user.GUID}`;
    return await this.putUpdate<UserMetadata>(url, user, cancellationToken);
  }

  /**
   * Delete a user.
   * @param {string} guid - The GUID of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async delete(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/users/${guid}`;
    return await this.del(url, cancellationToken);
  }
}
