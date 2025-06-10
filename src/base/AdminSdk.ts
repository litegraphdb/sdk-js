import { SdkConfiguration } from './SdkConfiguration';
import SdkBase from './SdkBase';

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
   * @returns {Promise<void>}
   */
  flush = async (cancellationToken?: AbortController) => {
    const url = `${this.config.endpoint}v1.0/flush`;
    return this.post(url, cancellationToken);
  };
}
