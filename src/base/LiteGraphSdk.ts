import SdkBase from './SdkBase';
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
/**
 * LiteGraph SDK class.
 * Extends the SdkBase class.
 * @module  LiteGraphSdk
 * @extends SdkBase
 */
export default class LiteGraphSdk extends SdkBase {
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

  constructor(endpoint: string = 'http://localhost:8000/', tenantGuid: string, accessKey: string) {
    super(endpoint, tenantGuid, accessKey);
    this.Graph = new GraphSdk(endpoint, tenantGuid, accessKey);
    this.Node = new NodeSdk(endpoint, tenantGuid, accessKey);
    this.Edge = new EdgeSdk(endpoint, tenantGuid, accessKey);
    this.Route = new RouteSdk(endpoint, tenantGuid, accessKey);
    this.Tenant = new TenantSdk(endpoint, tenantGuid, accessKey);
    this.User = new UserSdk(endpoint, tenantGuid, accessKey);
    this.Credential = new CredentialSdk(endpoint, tenantGuid, accessKey);
    this.Tag = new TagSdk(endpoint, tenantGuid, accessKey);
    this.Label = new LabelSdk(endpoint, tenantGuid, accessKey);
    this.Vector = new VectorSdk(endpoint, tenantGuid, accessKey);
    this.Authentication = new AuthenticationSdk(endpoint, tenantGuid, accessKey);
  }
}
