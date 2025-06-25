import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { BackupMetaData, BackupMetaDataCreateRequest } from '../types';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class BackupSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Read all backups.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<BackupMetaData[]>} - The backups.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(cancellationToken?: AbortController): Promise<BackupMetaData[]> {
    const url = `${this.config.endpoint}v1.0/backups`;
    return await this.get<BackupMetaData[]>(url, cancellationToken);
  }

  /**
   * Read a backup.
   * @param {string} filename - The filename of the backup.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<BackupMetaData>} - The backup.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(filename: string, cancellationToken?: AbortController): Promise<BackupMetaData> {
    if (!filename) {
      GenericExceptionHandlers.ArgumentNullException('filename');
    }
    const url = `${this.config.endpoint}v1.0/backups/${filename}`;
    return await this.get<BackupMetaData>(url, cancellationToken);
  }

  /**
   * Create a backup.
   * @param {BackupMetaDataCreateRequest} backup - The backup to create.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<BackupMetaData>} - The created backup.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async create(backup: BackupMetaDataCreateRequest, cancellationToken?: AbortController): Promise<BackupMetaData> {
    if (!backup) {
      GenericExceptionHandlers.ArgumentNullException('backup');
    }
    const url = `${this.config.endpoint}v1.0/backups`;
    return await this.post<BackupMetaData>(url, backup, cancellationToken);
  }

  /**
   * Delete a backup.
   * @param {string} filename - The filename of the backup.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<boolean>} - The deleted backup.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async delete(filename: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!filename) {
      GenericExceptionHandlers.ArgumentNullException('filename');
    }
    const url = `${this.config.endpoint}v1.0/backups/${filename}`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Backup exists.
   * @param {string} filename - The filename of the backup.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<boolean>} - The exists backup.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(filename: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!filename) {
      GenericExceptionHandlers.ArgumentNullException('filename');
    }
    const url = `${this.config.endpoint}v1.0/backups/${filename}`;
    return await this.head(url, cancellationToken);
  }
}
