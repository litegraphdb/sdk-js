import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { Edge, Node, RouteResult } from '../types';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';
export class RouteSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Get edges from a node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} nodeGuid - Node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Edge[]>} - Edges.
   */
  async getEdgesFromNode(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Edge[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/edges/from`;
    return await this.getMany<Edge>(url, cancellationToken);
  }

  /**
   * Get edges to a node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} nodeGuid - Node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Edge[]>} - Edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async getEdgesToNode(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Edge[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/edges/to`;
    return await this.getMany<Edge>(url, cancellationToken);
  }

  /**
   * Get edges from a given node to a given node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} fromNodeGuid - From node GUID.
   * @param {string} toNodeGuid - To node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Edge[]>} - Edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async getEdgesBetween(
    graphGuid: string,
    fromNodeGuid: string,
    toNodeGuid: string,
    cancellationToken?: AbortController
  ): Promise<Edge[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!fromNodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('FromNodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/between?from=${fromNodeGuid}&to=${toNodeGuid}`;
    return await this.getMany<Edge>(url, cancellationToken);
  }

  /**
   * Get all edges to or from a node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} nodeGuid - Node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Edge[]>} - Edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async getAllNodeEdges(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Edge[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/edges`;
    return await this.getMany<Edge>(url, cancellationToken);
  }

  /**
   * Get child nodes from a node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} nodeGuid - Node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Node[]>} - Child nodes.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async getChildrenFromNode(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Node[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/children`;
    return await this.getMany<Node>(url, cancellationToken);
  }

  /**
   * Get parent nodes from a node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} nodeGuid - Node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Node[]>} - Parent nodes.
   */
  async getParentsFromNode(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Node[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/parents`;
    return await this.getMany<Node>(url, cancellationToken);
  }

  /**
   * Get neighboring nodes from a node.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} nodeGuid - Node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<Node[]>} - Neighboring nodes.
   */
  async getNodeNeighbors(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Node[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/neighbors`;
    return await this.get<Node[]>(url, cancellationToken);
  }

  /**
   * Get routes between two nodes.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} fromNodeGuid - From node GUID.
   * @param {string} toNodeGuid - To node GUID.
   * @param {AbortSignal} [cancellationToken] - Abort signal for cancellation.
   * @returns {Promise<RouteResult>} - Routes.
   */
  async getRoutes(
    graphGuid: string,
    fromNodeGuid: string,
    toNodeGuid: string,
    cancellationToken?: AbortController
  ): Promise<RouteResult> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!fromNodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('FromNodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/routes`;

    const req = {
      Graph: graphGuid,
      From: fromNodeGuid,
      To: toNodeGuid,
    };
    return await this.post<RouteResult>(url, req, cancellationToken);
  }
}
