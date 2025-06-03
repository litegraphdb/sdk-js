import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { Edge, EdgeCreateRequest, NodeEdgeSearchRequest, ReadFirstRequest, SearchResult } from '../types';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class EdgeSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Check if an edge exists by GUID.
   * @param {string} graphGuid - Graph GUID.
   * @param {string} guid - Edge GUID.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if exists.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async exists(graphGuid: string, guid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!guid) {
      GenericExceptionHandlers.ArgumentNullException('GUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create multiple edges.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<EdgeCreateRequest>} edges - List of edge objects.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Array<Edge>>} - The list of created edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async createBulk(
    graphGuid: string,
    edges: EdgeCreateRequest[],
    cancellationToken?: AbortController
  ): Promise<Edge[]> {
    if (!edges) {
      GenericExceptionHandlers.ArgumentNullException('Edges');
    }
    if (edges.length < 1) {
      GenericExceptionHandlers.GenericException('Edges array is empty');
    }

    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/bulk`;
    return await this.putCreate<Edge[]>(url, edges, cancellationToken);
  }

  /**
   * Create an edge.
   * @param {EdgeCreateRequest} edge - Information about the edge.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge>} - The created edge.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async create(edge: EdgeCreateRequest, cancellationToken?: AbortController): Promise<Edge> {
    if (!edge) {
      GenericExceptionHandlers.ArgumentNullException('edge');
    }
    if (!edge.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('edge.GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${edge.GraphGUID}/edges`;
    return await this.putCreate<Edge>(url, edge, cancellationToken);
  }

  /**
   * Read edges.
   * @param {string} graphGuid - Graph GUID.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge[]>} - List of edges.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readAll(graphGuid: string, cancellationToken?: AbortController): Promise<Edge[]> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges`;
    return await this.get<Edge[]>(url, cancellationToken);
  }

  /**
   * Search edges.
   * @param {NodeEdgeSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<SearchResult>} - The search result.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async search(searchReq: NodeEdgeSearchRequest, cancellationToken?: AbortController): Promise<SearchResult> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('searchReq');
    }
    if (!searchReq.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('searchReq.GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${searchReq.GraphGUID}/edges/search`;
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
  async read(graphGuid: string, edgeGuid: string, cancellationToken?: AbortController): Promise<Edge> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!edgeGuid) {
      GenericExceptionHandlers.ArgumentNullException('EdgeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/${edgeGuid}`;
    return await this.get<Edge>(url, cancellationToken);
  }

  /**
   * Read a first edge of a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {ReadFirstRequest} request - Information about the read first request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge>} - The first edge of the graph.
   */
  async readFirst(graphGuid: string, request: ReadFirstRequest, cancellationToken?: AbortController): Promise<Edge> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!request) {
      GenericExceptionHandlers.ArgumentNullException('Request');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/first`;
    return await this.post<Edge>(url, request, cancellationToken);
  }

  /**
   * Update an edge.
   * @param {Edge} edge - Information about the edge.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Edge>} - The updated edge.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async update(edge: Edge, cancellationToken?: AbortController): Promise<Edge> {
    if (!edge) {
      GenericExceptionHandlers.ArgumentNullException('Edge');
    }
    if (!edge.GraphGUID) {
      GenericExceptionHandlers.ArgumentNullException('edge.GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${edge.GraphGUID}/edges/${edge.GUID}`;
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
  async delete(graphGuid: string, edgeGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    if (!edgeGuid) {
      GenericExceptionHandlers.ArgumentNullException('EdgeGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/${edgeGuid}`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Delete all edges within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteAll(graphGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('GraphGUID');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/all`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Delete multiple edges within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {Array<string>} edgeGuids - The list of edge GUIDs to delete.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - Promise representing the completion of the deletion.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async deleteBulk(graphGuid: string, edgeGuids: string[], cancellationToken?: AbortController): Promise<boolean> {
    if (!edgeGuids) {
      GenericExceptionHandlers.ArgumentNullException('edgeGuids');
    }
    if (edgeGuids.length < 1) {
      GenericExceptionHandlers.GenericException('Edges array is empty');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/edges/bulk`;
    return await this.deleteMany(url, edgeGuids, cancellationToken);
  }
}
