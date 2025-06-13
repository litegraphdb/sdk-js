import { SdkConfiguration } from './SdkConfiguration';
import SdkBase from './SdkBase';
import { SeverityEnum } from '../enums/SeverityEnum';

export class AdminSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Flushes the cache for the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   */
  flush = async (cancellationToken?: AbortController): Promise<boolean> => {
    const url = `${this.config.endpoint}v1.0/flush`;
    try {
      await this.post(url, {}, cancellationToken);
      return true;
    } catch (error) {
      this.log(SeverityEnum.Error, `Failed to flush cache: ${error}`);
      return false;
    }
  };
}
