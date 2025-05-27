import superagent from 'superagent';
import { GraphSdk } from './GraphSdk';
import { NodeSdk } from './NodeSdk';
import { EdgeSdk } from './EdgeSdk';
import { RouteSdk } from './RouteSdk';
import { TenantSdk } from './TenantSdk';
import { UserSdk } from './UserSdk';
import { CredentialSdk } from './CredentialSdk';
import { TagSdk } from './TagSdk';
import { LabelSdk } from './LabelSdk';
import { VectorSdk } from './VectorSdk';
import { AuthenticationSdk } from './AuthenticationSdk';
import { SdkConfiguration } from './SdkConfiguration';
import { SeverityEnum } from '../enums/SeverityEnum';
import Logger from '../utils/Logger';
/**
 * LiteGraph SDK class.
 * Extends the SdkBase class.
 * @module  LiteGraphSdk
 * @extends SdkBase
 */
export default class LiteGraphSdk {
  public config: SdkConfiguration;
  /**
   * Instantiate the SDK.
   * @param {string} endpoint - The endpoint URL.
   * @param {string} [tenantGuid] - The tenant GUID.
   * @param {string} [accessKey] - The access key.
   */

  public Graph: GraphSdk;
  public Node: NodeSdk;
  public Edge: EdgeSdk;
  public Route: RouteSdk;
  public Tenant: TenantSdk;
  public User: UserSdk;
  public Credential: CredentialSdk;
  public Tag: TagSdk;
  public Label: LabelSdk;
  public Vector: VectorSdk;
  public Authentication: AuthenticationSdk;

  constructor(endpoint: string = 'http://localhost:8000/', tenantGuid?: string, accessKey?: string) {
    const config = new SdkConfiguration(endpoint, tenantGuid, accessKey);
    this.config = config;
    this.Graph = new GraphSdk(this.config);
    this.Node = new NodeSdk(this.config);
    this.Edge = new EdgeSdk(this.config);
    this.Route = new RouteSdk(this.config);
    this.Tenant = new TenantSdk(this.config);
    this.User = new UserSdk(this.config);
    this.Credential = new CredentialSdk(this.config);
    this.Tag = new TagSdk(this.config);
    this.Label = new LabelSdk(this.config);
    this.Vector = new VectorSdk(this.config);
    this.Authentication = new AuthenticationSdk(this.config);
  }

  /**
   * Validates API connectivity using a HEAD request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @return {Promise<boolean>} Resolves to true if the connection is successful.
   * @throws {Error} Rejects with the error in case of failure.
   */
  validateConnectivity(cancellationToken?: AbortController): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const request = superagent.head(this.config.endpoint).timeout({ response: this.config.timeoutMs });
      // If a cancelToken is provided, attach the abort method
      if (cancellationToken) {
        cancellationToken.abort = () => {
          request.abort();
          Logger.log(SeverityEnum.Debug, `Request aborted.`);
        };
      }
      request
        .then((res) => {
          Logger.log(SeverityEnum.Debug, `Success reported from ${this.config.endpoint}`);
          resolve(res.ok);
        })
        .catch((err) => {
          Logger.log(SeverityEnum.Warn, `Failed to retrieve object from ${this.config.endpoint}: ${err.message}`);
          const errorResponse = err?.response?.body || null;
          if (errorResponse) {
            reject(errorResponse);
          } else {
            reject(err.message ? err.message : err);
          }
        });
    });
  }
}
