import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { Node, NodeCreateRequest, NodeEdgeSearchRequest, SearchResult } from '../types';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class NodeSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Check if a node exists by GUID.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} guid - The GUID of the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if the node exists.
   */
  async exists(graphGuid: string, guid: string, cancellationToken?: AbortController): Promise<boolean> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create multiple nodes.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<NodeCreateRequest>} nodes - List of node objects.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Array<Node>>} - The list of created nodes.
   */
  async createBulk(
    graphGuid: string,
    nodes: NodeCreateRequest[],
    cancellationToken?: AbortController
  ): Promise<Node[]> {
    if (!nodes) {
      GenericExceptionHandlers.ArgumentNullException('Nodes');
    }
    if (nodes.length < 1) {
      GenericExceptionHandlers.GenericException('Nodes array is empty');
    }

    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/bulk`;
    return await this.putCreate<Node[]>(url, nodes, cancellationToken);
  }

  /**
   * Create a node.
   * @param {NodeCreateRequest} node - Information about the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The created node.
   */
  async create(node: NodeCreateRequest, cancellationToken?: AbortController): Promise<Node> {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('Node');
    }
    if (!node.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('node.GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${node.GraphGUID}/nodes`;
    return await this.putCreate<Node>(url, node, cancellationToken);
  }

  /**
   * Read nodes for a specific graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node[]>} - An array of nodes.
   */
  async readAll(graphGuid: string, cancellationToken?: AbortController): Promise<Node[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes`;
    return await this.get<Node[]>(url, cancellationToken);
  }

  /**
   * Search nodes.
   * @param {NodeEdgeSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<SearchResult>} - The search result.
   */
  async search(searchReq: NodeEdgeSearchRequest, cancellationToken?: AbortController): Promise<SearchResult> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('Search Request');
    }
    if (!searchReq.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('searchReq.GraphGUID');
    }

    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${searchReq.GraphGUID}/nodes/search`;
    return await this.post<SearchResult>(url, searchReq, cancellationToken);
  }

  /**
   * Read a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The requested node.
   */
  async read(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Node> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}`;
    return await this.get<Node>(url, cancellationToken);
  }

  /**
   * Read a first node of a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The first node of the graph.
   */
  async readFirst(graphGuid: string, cancellationToken?: AbortController): Promise<Node> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/first`;
    return await this.get<Node>(url, cancellationToken);
  }
  /**
   * Update a node.
   * @param {Node} node - Information about the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The updated node.
   */
  async update(node: Node, cancellationToken?: AbortController): Promise<Node> {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('Node');
    }
    if (!node.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('node.GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${node.GraphGUID}/nodes/${node.GUID}`;
    return await this.putUpdate(url, node, cancellationToken);
  }

  /**
   * Delete a node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   */
  async delete(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<void> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}`;
    await this.del(url, cancellationToken);
  }

  /**
   * Delete all nodes within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   */
  async deleteAll(graphGuid: string, cancellationToken?: AbortController): Promise<void> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/all`;
    await this.del(url, cancellationToken);
  }

  /**
   * Delete multiple nodes within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<string>} nodeGuids - The list of node GUIDs to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteBulk(graphGuid: string, nodeGuids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!nodeGuids) {
      GenericExceptionHandlers.ArgumentNullException('nodeGuids');
    }
    if (nodeGuids.length < 1) {
      GenericExceptionHandlers.GenericException('Nodes array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/bulk`;
    return await this.deleteMany(url, nodeGuids, cancellationToken);
  }
}
