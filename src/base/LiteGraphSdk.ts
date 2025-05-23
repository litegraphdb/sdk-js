import SdkBase from './SdkBase';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import {
  Graph,
  GraphCreateRequest,
  GraphSearchRequest,
  Node,
  SearchResult,
  Edge,
  NodeEdgeSearchRequest,
  EdgeCreateRequest,
  RouteResult,
  TenantMetaData,
  TenantMetaDataCreateRequest,
  UserMetadata,
  UserMetadataCreateRequest,
  CredentialMetadata,
  CredentialMetadataCreateRequest,
  TagMetaData,
  TagMetaDataCreateRequest,
  LabelMetadata,
  LabelMetadataCreateRequest,
  VectorMetadata,
  VectorCreateRequest,
  VectorSearchResult,
  VectorSearchRequest,
  Token,
} from '../types';

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
  constructor(endpoint: string = 'http://localhost:8000/', tenantGuid: string, accessKey: string) {
    super(endpoint, tenantGuid, accessKey);
  }

  //region Graph-Routes

  /**
   * Check if a graph exists by GUID.
   * @param {string} guid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if the graph exists.
   */
  async graphExists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a graph.
   * @param {GraphCreateRequest} graph - Information about the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The created graph.
   */
  async createGraph(graph: GraphCreateRequest, cancellationToken?: AbortController): Promise<Graph> {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('Graph');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs`;
    return await this.putCreate(url, graph, cancellationToken);
  }

  /**
   * Read all graphs.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph[]>} - An array of graphs.
   */
  async readGraphs(cancellationToken?: AbortController): Promise<Graph[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs`;
    return await this.getMany<Graph>(url, cancellationToken);
  }

  /**
   * Search graphs.
   * @param {GraphSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<SearchResult>} - The search result.
   */
  async searchGraphs(searchReq: GraphSearchRequest, cancellationToken?: AbortController): Promise<SearchResult> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('Search Request');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/search`;

    return await this.post<SearchResult>(url, searchReq, cancellationToken);
  }

  /**
   * Read a specific graph.
   * @param {string} guid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The requested graph.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readGraph(guid: string, cancellationToken?: AbortController): Promise<Graph> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${guid}`;
    return await this.get<Graph>(url, cancellationToken);
  }

  /**
   * Update a graph.
   * @param {Graph} graph - Information about the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The updated graph.
   */
  async updateGraph(graph: Graph, cancellationToken?: AbortController): Promise<Graph> {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('Graph');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graph.GUID}`;
    return await this.putUpdate(url, graph, cancellationToken);
  }

  /**
   * Delete a graph.
   * @param {string} guid - The GUID of the graph.
   * @param {boolean} force - Force recursive deletion of edges and nodes.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - The deleted graph.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteGraph(guid: string, force: boolean = false, cancellationToken?: AbortController): Promise<boolean> {
    let url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${guid}`;
    if (force) url += '?force=true';
    return await this.delete(url, cancellationToken);
  }

  /**
   * Export a graph to GEXF format.
   * @param {string} guid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<string>} - The GEXF XML data.
   */
  async exportGraphToGexf(guid: string, cancellationToken?: AbortController): Promise<string> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${guid}/export/gexf`;
    return await this.getDataInBytes<string>(url, cancellationToken);
  }
  // endregion

  // region Node-Routes
  /**
   * Check if a node exists by GUID.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} guid - The GUID of the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if the node exists.
   */
  async nodeExists(graphGuid: string, guid: string, cancellationToken?: AbortController): Promise<boolean> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create multiple nodes.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<Node>} nodes - List of node objects.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Array<Node>>} - The list of created nodes.
   */
  async createNodes(graphGuid: string, nodes: Node[], cancellationToken?: AbortController): Promise<Node[]> {
    if (!nodes) {
      GenericExceptionHandlers.ArgumentNullException('Nodes');
    }
    if (nodes.length < 1) {
      GenericExceptionHandlers.GenericException('Nodes array is empty');
    }

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/bulk`;
    return await this.putCreate<Node[]>(url, nodes, cancellationToken);
  }

  /**
   * Create a node.
   * @param {Object} node - Information about the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The created node.
   */
  async createNode(node: Node, cancellationToken?: AbortController): Promise<Node> {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('Node');
    }
    if (!node.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('node.GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${node.GraphGUID}/nodes`;
    return await this.putCreate<Node>(url, node, cancellationToken);
  }

  /**
   * Read nodes for a specific graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node[]>} - An array of nodes.
   */
  async readNodes(graphGuid: string, cancellationToken?: AbortController): Promise<Node[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes`;
    return await this.get<Node[]>(url, cancellationToken);
  }

  /**
   * Search nodes.
   * @param {NodeEdgeSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<SearchResult>} - The search result.
   */
  async searchNodes(searchReq: NodeEdgeSearchRequest, cancellationToken?: AbortController): Promise<SearchResult> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('Search Request');
    }
    if (!searchReq.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('searchReq.GraphGUID');
    }

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${searchReq.GraphGUID}/nodes/search`;
    return await this.post<SearchResult>(url, searchReq, cancellationToken);
  }

  /**
   * Read a specific node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The requested node.
   */
  async readNode(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<Node> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}`;
    return await this.get<Node>(url, cancellationToken);
  }

  /**
   * Update a node.
   * @param {Node} node - Information about the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Node>} - The updated node.
   */
  async updateNode(node: Node, cancellationToken?: AbortController): Promise<Node> {
    if (!node) {
      GenericExceptionHandlers.ArgumentNullException('Node');
    }
    if (!node.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('node.GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${node.GraphGUID}/nodes/${node.GUID}`;
    return await this.putUpdate(url, node, cancellationToken);
  }

  /**
   * Delete a node.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the node.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   */
  async deleteNode(graphGuid: string, nodeGuid: string, cancellationToken?: AbortController): Promise<void> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('NodeGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}`;
    await this.delete(url, cancellationToken);
  }

  /**
   * Delete all nodes within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   */
  async deleteAllNodes(graphGuid: string, cancellationToken?: AbortController): Promise<void> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/all`;
    await this.delete(url, cancellationToken);
  }

  /**
   * Delete multiple nodes within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<string>} nodeGuids - The list of node GUIDs to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteNodes(graphGuid: string, nodeGuids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!nodeGuids) {
      GenericExceptionHandlers.ArgumentNullException('nodeGuids');
    }
    if (nodeGuids.length < 1) {
      GenericExceptionHandlers.GenericException('Nodes array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/bulk`;
    return await this.deleteMany(url, nodeGuids, cancellationToken);
  }

  // endregion

  // region Edge Routes

  /**
   * Check if an edge exists by GUID.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} guid - Edge GUID.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if exists.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async edgeExists(graphGuid: string, guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('GUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create multiple edges.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<Object>} edges - List of edge objects.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Array<Edge>>} - The list of created edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createEdges(graphGuid: string, edges: Edge[], cancellationToken?: AbortController): Promise<Edge[]> {
    if (!edges) {
      GenericExceptionHandlers.ArgumentNullException('Edges');
    }
    if (edges.length < 1) {
      GenericExceptionHandlers.GenericException('Edges array is empty');
    }

    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/bulk`;
    return await this.putCreate<Edge[]>(url, edges, cancellationToken);
  }

  /**
   * Create an edge.
   * @param {EdgeCreateRequest} edge - Information about the edge.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge>} - The created edge.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createEdge(edge: EdgeCreateRequest, cancellationToken?: AbortController): Promise<Edge> {
    if (!edge) {
      GenericExceptionHandlers.ArgumentNullException('edge');
    }
    if (!edge.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('edge.GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${edge.GraphGUID}/edges`;
    return await this.putCreate<Edge>(url, edge, cancellationToken);
  }

  /**
   * Read edges.
   * @param {string} graphGuid - Graph GUID.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge[]>} - List of edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readEdges(graphGuid: string, cancellationToken?: AbortController): Promise<Edge[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges`;
    return await this.get<Edge[]>(url, cancellationToken);
  }

  /**
   * Search edges.
   * @param {NodeEdgeSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<SearchResult>} - The search result.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async searchEdges(searchReq: NodeEdgeSearchRequest, cancellationToken?: AbortController): Promise<SearchResult> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('searchReq');
    }
    if (!searchReq.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('searchReq.GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${searchReq.GraphGUID}/edges/search`;
    return await this.post<SearchResult>(url, searchReq, cancellationToken);
  }

  /**
   * Read an edge.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} edgeGuid - Edge GUID.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge>} - The requested edge.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readEdge(graphGuid: string, edgeGuid: string, cancellationToken?: AbortController): Promise<Edge> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!edgeGuid) {
      GenericExceptionHandlers.ArgumentNullException('EdgeGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/${edgeGuid}`;
    return await this.get<Edge>(url, cancellationToken);
  }

  /**
   * Update an edge.
   * @param {Edge} edge - Information about the edge.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge>} - The updated edge.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async updateEdge(edge: Edge, cancellationToken?: AbortController): Promise<Edge> {
    if (!edge) {
      GenericExceptionHandlers.ArgumentNullException('Edge');
    }
    if (!edge.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('edge.GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${edge.GraphGUID}/edges/${edge.GUID}`;
    return await this.putUpdate(url, edge, cancellationToken);
  }

  /**
   * Delete an edge.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} edgeGuid - Edge GUID.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteEdge(graphGuid: string, edgeGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!edgeGuid) {
      GenericExceptionHandlers.ArgumentNullException('EdgeGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/${edgeGuid}`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Delete all edges within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteAllEdges(graphGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/all`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Delete multiple edges within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<string>} edgeGuids - The list of edge GUIDs to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteEdges(graphGuid: string, edgeGuids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!edgeGuids) {
      GenericExceptionHandlers.ArgumentNullException('edgeGuids');
    }
    if (edgeGuids.length < 1) {
      GenericExceptionHandlers.GenericException('Edges array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/bulk`;
    return await this.deleteMany(url, edgeGuids, cancellationToken);
  }

  //end region

  //region Routes and Traversal

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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/edges/from`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/edges/to`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/edges/between?from=${fromNodeGuid}&to=${toNodeGuid}`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/edges`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/children`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/parents`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/neighbors`;
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
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/graphs/${graphGuid}/routes`;

    const req = {
      Graph: graphGuid,
      From: fromNodeGuid,
      To: toNodeGuid,
    };
    return await this.post<RouteResult>(url, req, cancellationToken);
  }

  //end region

  //region Tenants

  /**
   * Read all tenants.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData[]>} - An array of tenants.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readTenants(cancellationToken?: AbortController): Promise<TenantMetaData[]> {
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
  async readTenant(tenantGuid: string, cancellationToken?: AbortController): Promise<TenantMetaData> {
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
   */
  async createTenant(
    tenant: TenantMetaDataCreateRequest,
    cancellationToken?: AbortController
  ): Promise<TenantMetaData> {
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
  async updateTenant(tenant: TenantMetaData, cancellationToken?: AbortController): Promise<TenantMetaData> {
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
  async deleteTenant(tenantGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    const url = `${this.endpoint}v1.0/tenants/${tenantGuid}`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Tenant exists.
   * @param {string} tenantGuid - The GUID of the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async tenantExists(tenantGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    const url = `${this.endpoint}v1.0/tenants/${tenantGuid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Tenant delete force.
   * @param {string} tenantGuid - The GUID of the tenant.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async tenantDeleteForce(tenantGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!tenantGuid) {
      GenericExceptionHandlers.ArgumentNullException('tenantGuid');
    }
    const url = `${this.endpoint}v1.0/tenants/${tenantGuid}?force`;
    return await this.delete(url, cancellationToken);
  }

  //end region

  //region Users

  /**
   * Read all users.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata[]>} - An array of users.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAllUsers(cancellationToken?: AbortController): Promise<UserMetadata[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/users`;
    return await this.getMany<UserMetadata>(url, cancellationToken);
  }

  /**
   * Read a user.
   * @param {string} userGuid - The GUID of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata>} - The user.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readUser(userGuid: string, cancellationToken?: AbortController): Promise<UserMetadata> {
    if (!userGuid) {
      GenericExceptionHandlers.ArgumentNullException('userGuid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/users/${userGuid}`;
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
  async createUser(user: UserMetadataCreateRequest, cancellationToken?: AbortController): Promise<UserMetadata> {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/users`;
    return await this.putCreate<UserMetadata>(url, user, cancellationToken);
  }

  /**
   * User exists.
   * @param {string} guid - The GUID of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async existsUser(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/users/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Update a user.
   * @param {UserMetadata} user - The user to update.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<UserMetadata>} - The updated user.
   */
  async updateUser(user: UserMetadata, cancellationToken?: AbortController): Promise<UserMetadata> {
    if (!user) {
      GenericExceptionHandlers.ArgumentNullException('user');
    }
    if (!user.GUID) {
      GenericExceptionHandlers.ArgumentNullException('user.GUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/users/${user.GUID}`;
    return await this.putUpdate<UserMetadata>(url, user, cancellationToken);
  }

  /**
   * Delete a user.
   * @param {string} guid - The GUID of the user.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteUser(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/users/${guid}`;
    return await this.delete(url, cancellationToken);
  }
  //end region

  //region Credentials

  /**
   * Read all credentials.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata[]>} - An array of credentials.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAllCredentials(cancellationToken?: AbortController): Promise<CredentialMetadata[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials`;
    return await this.getMany<CredentialMetadata>(url, cancellationToken);
  }

  /**
   * Read a credential.
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata>} - The credential.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readCredential(guid: string, cancellationToken?: AbortController): Promise<CredentialMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
    return await this.get<CredentialMetadata>(url, cancellationToken);
  }

  /**
   * Create a credential.
   * @param {CredentialMetadataCreateRequest} credential - The credential to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata>} - The created credential.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createCredential(
    credential: CredentialMetadataCreateRequest,
    cancellationToken?: AbortController
  ): Promise<CredentialMetadata> {
    if (!credential) {
      GenericExceptionHandlers.ArgumentNullException('credential');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials`;
    return await this.putCreate<CredentialMetadata>(url, credential, cancellationToken);
  }

  /**
   * Update a credential.
   * @param {CredentialMetadata} credential - The credential to update.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<CredentialMetadata>} - The updated credential.
   */
  async updateCredential(
    credential: CredentialMetadata,
    guid: string,
    cancellationToken?: AbortController
  ): Promise<CredentialMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!credential) {
      GenericExceptionHandlers.ArgumentNullException('credential');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
    return await this.putUpdate<CredentialMetadata>(url, credential, cancellationToken);
  }

  /**
   * Delete a credential.
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteCredential(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Credential exists.
   * @param {string} guid - The GUID of the credential.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async existsCredential(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/credentials/${guid}`;
    return await this.head(url, cancellationToken);
  }
  //end region

  //region TagMetaData

  /**
   * Read all tags.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData[]>}
   */
  async readAllTags(cancellationToken?: AbortController): Promise<TagMetaData[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags`;
    return await this.getMany<TagMetaData>(url, cancellationToken);
  }

  /**
   * Read a tag.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readTag(guid: string, cancellationToken?: AbortController): Promise<TagMetaData> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags/${guid}`;
    return await this.get<TagMetaData>(url, cancellationToken);
  }

  /**
   * Tag exists.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async existsTag(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a tag.
   * @param {TagMetaDataCreateRequest} tag - The tag to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createTag(tag: TagMetaDataCreateRequest, cancellationToken?: AbortController): Promise<TagMetaData> {
    if (!tag) {
      GenericExceptionHandlers.ArgumentNullException('tag');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags`;
    return await this.putCreate<TagMetaData>(url, tag, cancellationToken);
  }

  /**
   * Create multiple tags
   * @param {TagMetaData[]} tags - The tags to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData[]>}
   */
  async createTags(tags: TagMetaDataCreateRequest[], cancellationToken?: AbortController): Promise<TagMetaData[]> {
    if (!tags) {
      GenericExceptionHandlers.ArgumentNullException('tags');
    }
    if (tags.length < 1) {
      GenericExceptionHandlers.GenericException('Tags array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags/bulk`;
    return await this.putCreate<TagMetaData[]>(url, tags, cancellationToken);
  }

  /**
   * Update a tag.
   * @param {TagMetaData} tag - The tag to update.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TagMetaData>}
   */
  async updateTag(tag: TagMetaData, guid: string, cancellationToken?: AbortController): Promise<TagMetaData> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!tag) {
      GenericExceptionHandlers.ArgumentNullException('tag');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags/${guid}`;
    return await this.putUpdate<TagMetaData>(url, tag, cancellationToken);
  }

  /**
   * Delete a tag.
   * @param {string} guid - The GUID of the tag.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteTag(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags/${guid}`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Delete multiple tags
   * @param {string[]} guids - The GUIDs of the tags to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteTags(guids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!guids) {
      GenericExceptionHandlers.ArgumentNullException('guids');
    }
    if (guids.length < 1) {
      GenericExceptionHandlers.GenericException('Tags array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/tags/bulk`;
    return await this.deleteMany(url, guids, cancellationToken);
  }

  //end region

  //region Labels

  /**
   * Read all labels.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata[]>}
   */
  async readAllLabels(cancellationToken?: AbortController): Promise<LabelMetadata[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels`;
    return await this.getMany<LabelMetadata>(url, cancellationToken);
  }

  /**
   * Read a label.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readLabel(guid: string, cancellationToken?: AbortController): Promise<LabelMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels/${guid}`;
    return await this.get<LabelMetadata>(url, cancellationToken);
  }

  /**
   * Label exists.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async existsLabel(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a label.
   * @param {LabelMetadataCreateRequest} label - The label to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata>}
   */
  async createLabel(label: LabelMetadataCreateRequest, cancellationToken?: AbortController): Promise<LabelMetadata> {
    if (!label) {
      GenericExceptionHandlers.ArgumentNullException('label');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels`;
    return await this.putCreate<LabelMetadata>(url, label, cancellationToken);
  }

  /**
   * Create multiple labels
   * @param {LabelMetadata[]} labels - The labels to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata[]>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createLabels(
    labels: LabelMetadataCreateRequest[],
    cancellationToken?: AbortController
  ): Promise<LabelMetadata[]> {
    if (!labels) {
      GenericExceptionHandlers.ArgumentNullException('labels');
    }
    if (labels.length < 1) {
      GenericExceptionHandlers.GenericException('Labels array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels/bulk`;
    return await this.putCreate<LabelMetadata[]>(url, labels, cancellationToken);
  }

  /**
   * Update a label.
   * @param {LabelMetadata} label - The label to update.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<LabelMetadata>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async updateLabel(label: LabelMetadata, cancellationToken?: AbortController): Promise<LabelMetadata> {
    if (!label) {
      GenericExceptionHandlers.ArgumentNullException('label');
    }
    if (!label.GUID) {
      GenericExceptionHandlers.ArgumentNullException('label.GUID');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels/${label.GUID}`;
    return await this.putUpdate<LabelMetadata>(url, label, cancellationToken);
  }

  /**
   * Delete a label.
   * @param {string} guid - The GUID of the label.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<void>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteLabel(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels/${guid}`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Delete multiple labels
   * @param {string[]} guids - The GUIDs of the labels to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteLabels(guids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!guids) {
      GenericExceptionHandlers.ArgumentNullException('guids');
    }
    if (guids.length < 1) {
      GenericExceptionHandlers.GenericException('Labels array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/labels/bulk`;
    return await this.deleteMany(url, guids, cancellationToken);
  }

  //end region

  //region Vectors

  /**
   * Read all vectors.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata[]>}
   */
  async readAllVectors(cancellationToken?: AbortController): Promise<VectorMetadata[]> {
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors`;
    return await this.getMany<VectorMetadata>(url, cancellationToken);
  }

  /**
   * Read a vector.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readVector(guid: string, cancellationToken?: AbortController): Promise<VectorMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors/${guid}`;
    return await this.get<VectorMetadata>(url, cancellationToken);
  }

  /**
   * Vector exists.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async existsVector(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a vector.
   * @param {VectorCreateRequest} vector - The vector to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata>}
   */
  async createVector(vector: VectorCreateRequest, cancellationToken?: AbortController): Promise<VectorMetadata> {
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('vector');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors`;
    return await this.putCreate<VectorMetadata>(url, vector, cancellationToken);
  }

  /**
   * Create multiple vectors
   * @param {VectorCreateRequest[]} vectors - The vectors to create.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata[]>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createVectors(vectors: VectorCreateRequest[], cancellationToken?: AbortController): Promise<VectorMetadata[]> {
    if (!vectors) {
      GenericExceptionHandlers.ArgumentNullException('vectors');
    }
    if (vectors.length < 1) {
      GenericExceptionHandlers.GenericException('Vectors array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors/bulk`;
    return await this.putCreate<VectorMetadata[]>(url, vectors, cancellationToken);
  }

  /**
   * Update a vector.
   * @param {VectorMetadata} vector - The vector to update.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorMetadata>}
   */
  async updateVector(
    vector: VectorMetadata,
    guid: string,
    cancellationToken?: AbortController
  ): Promise<VectorMetadata> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    if (!vector) {
      GenericExceptionHandlers.ArgumentNullException('vector');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors/${guid}`;
    return await this.putUpdate<VectorMetadata>(url, vector, cancellationToken);
  }

  /**
   * Delete a vector.
   * @param {string} guid - The GUID of the vector.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<void>}
   */
  async deleteVector(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('guid');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors/${guid}`;
    return await this.delete(url, cancellationToken);
  }

  /**
   * Delete multiple vectors
   * @param {string[]} guids - The GUIDs of the vectors to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>}
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteVectors(guids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!guids) {
      GenericExceptionHandlers.ArgumentNullException('guids');
    }
    if (guids.length < 1) {
      GenericExceptionHandlers.GenericException('Vectors array is empty');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors/bulk`;
    return await this.deleteMany(url, guids, cancellationToken);
  }

  /**
   * Search Vectors.
   * @param {VectorSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorSearchResult[]>} - The search result.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async searchVectors(
    searchReq: VectorSearchRequest,
    cancellationToken?: AbortController
  ): Promise<VectorSearchResult[]> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('Search Request');
    }
    const url = `${this.endpoint}v1.0/tenants/${this.tenantGuid}/vectors`;
    const json = JSON.stringify(searchReq);
    return await this.post<VectorSearchResult[]>(url, json, cancellationToken);
  }

  //end region

  //region Authentication

  /**
   * Generate an authentication token.
   * @param {string} email - The user's email address.
   * @param {string} tenantId - The tenant ID.
   * @param {string} password - The user's password.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Token>} The generated authentication token
   */
  async generateToken(
    email: string,
    password: string,
    tenantId: string,
    cancellationToken?: AbortController
  ): Promise<Token> {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }
    if (!password) {
      GenericExceptionHandlers.ArgumentNullException('password');
    }
    if (!tenantId) {
      GenericExceptionHandlers.ArgumentNullException('tenantId');
    }

    const url = `${this.endpoint}v1.0/token`;
    const headers = {
      'x-email': email,
      'x-password': password,
      'x-tenant-guid': tenantId,
    };

    return await this.get<Token>(url, cancellationToken, headers);
  }

  /**
   * Fetch details about an authentication token.
   * @param {string} token - The authentication token to inspect.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Token>} The token details
   */
  async getTokenDetails(token: string, cancellationToken?: AbortController): Promise<Token> {
    if (!token) {
      GenericExceptionHandlers.ArgumentNullException('token');
    }

    const url = `${this.endpoint}v1.0/token/details`;
    const headers = {
      'x-token': token,
    };

    return await this.get<Token>(url, cancellationToken, headers);
  }

  /**
   * Get tenants associated with an email address.
   * @param {string} email - The email address to lookup tenants for.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<TenantMetaData[]>} Array of tenants associated with the email
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async getTenantsForEmail(email: string, cancellationToken?: AbortController): Promise<TenantMetaData[]> {
    if (!email) {
      GenericExceptionHandlers.ArgumentNullException('email');
    }

    const url = `${this.endpoint}v1.0/token/tenants`;
    return await this.getMany<TenantMetaData>(url, cancellationToken, {
      'x-email': email,
    });
  }

  //endregion
}
