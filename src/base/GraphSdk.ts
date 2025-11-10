import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import {
  EnumerateAndSearchRequest,
  EnumerateRequest,
  EnumerateResponse,
  Graph,
  GraphCreateRequest,
  GraphSearchRequest,
  GraphStatistics,
  GraphStatisticsResponse,
  IncludeDataAndSubordinates,
  ReadFirstRequest,
  ReadSubGraphResponse,
  SearchResult,
  VectorIndexEnableRequest,
  VectorIndexEnableResponse,
  VectorIndexStatsResponse,
} from '../types';
import Utils from '../utils/Utils';
import SdkBase from './SdkBase';
import { SdkConfiguration } from './SdkConfiguration';

export class GraphSdk extends SdkBase {
  /**
   * Instantiate the SDK.
   * @param {SdkConfiguration} config - The SDK configuration.
   */
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Check if a graph exists by GUID.
   * @param {string} guid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if the graph exists.
   */
  async exists(guid: string, cancellationToken?: AbortController): Promise<boolean> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${guid}`;
    return await this.head(url, cancellationToken);
  }

  /**
   * Create a graph.
   * @param {GraphCreateRequest} graph - Information about the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The created graph.
   */
  async create(graph: GraphCreateRequest, cancellationToken?: AbortController): Promise<Graph> {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('Graph');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs`;
    return await this.putCreate(url, graph, cancellationToken);
  }

  /**
   * Read all graphs.
   * @param {IncludeDataAndSubordinates} request - Information about the read all request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph[]>} - An array of graphs.
   */
  async readAll(request?: IncludeDataAndSubordinates, cancellationToken?: AbortController): Promise<Graph[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs`;
    const params = Utils.createUrlParams(request);
    return await this.getMany<Graph>(url + params, cancellationToken);
  }

  /**
   * Read multiple graphs.
   * @param {string[]} graphGuids - The GUIDs of the graphs.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph[]>} - The graphs.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async readMany(graphGuids: string[], cancellationToken?: AbortController): Promise<Graph[]> {
    if (!graphGuids || graphGuids.length === 0) {
      GenericExceptionHandlers.ArgumentNullException('graphGuids');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs?guids=${graphGuids.join(',')}`;
    return await this.get<Graph[]>(url, cancellationToken);
  }

  /**
   * Search graphs.
   * @param {GraphSearchRequest} searchReq - Information about the search request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<SearchResult>} - The search result.
   */
  async search(searchReq: GraphSearchRequest, cancellationToken?: AbortController): Promise<SearchResult> {
    if (!searchReq) {
      GenericExceptionHandlers.ArgumentNullException('Search Request');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/search`;

    return await this.post<SearchResult>(url, searchReq, cancellationToken);
  }

  /**
   * Read a specific graph.
   * @param {string} guid - The GUID of the graph.
   * @param {IncludeDataAndSubordinates} request - Information about the read request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The requested graph.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(guid: string, request?: IncludeDataAndSubordinates, cancellationToken?: AbortController): Promise<Graph> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${guid}`;
    const params = Utils.createUrlParams(request);
    return await this.get<Graph>(url + params, cancellationToken);
  }

  /**
   * Read a first graph.
   * @param {ReadFirstRequest} request - Information about the read first request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The first graph.
   */
  async readFirst(request: ReadFirstRequest, cancellationToken?: AbortController): Promise<Graph> {
    if (!request) {
      GenericExceptionHandlers.ArgumentNullException('Request');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/first`;
    return await this.post<Graph>(url, request, cancellationToken);
  }

  /**
   * Update a graph.
   * @param {Graph} graph - Information about the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The updated graph.
   */
  async update(graph: Graph, cancellationToken?: AbortController): Promise<Graph> {
    if (!graph) {
      GenericExceptionHandlers.ArgumentNullException('Graph');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graph.GUID}`;
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
  async delete(guid: string, force: boolean = false, cancellationToken?: AbortController): Promise<boolean> {
    let url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${guid}`;
    if (force) url += '?force=true';
    return await this.del(url, cancellationToken);
  }

  /**
   * Export a graph to GEXF format.
   * @param {string} guid - The GUID of the graph.
   * @param {IncludeDataAndSubordinates} request - Information about the export request.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<string>} - The GEXF XML data.
   */
  async exportGexf(
    guid: string,
    request?: IncludeDataAndSubordinates,
    cancellationToken?: AbortController
  ): Promise<string> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${guid}/export/gexf`;
    const params = Utils.createUrlParams(request);
    return await this.get<string>(url + params, cancellationToken, undefined, true);
  }

  /**
   * Enumerate all graphs.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<EnumerateResponse<Graph>} - An array of graphs.
   */
  async enumerate(request?: EnumerateRequest, cancellationToken?: AbortController): Promise<EnumerateResponse<Graph>> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs`;
    const params = Utils.createUrlParams(request);
    return await this.get<EnumerateResponse<Graph>>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<EnumerateResponse<Graph>>} - An array of graphs.
   */
  async enumerateAndSearch(
    request: EnumerateAndSearchRequest,
    cancellationToken?: AbortController
  ): Promise<EnumerateResponse<Graph>> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs`;
    return await this.post<EnumerateResponse<Graph>>(url, request, cancellationToken);
  }

  /**
   * Read all graphs Statistics
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<GraphStatisticsResponse>} - An array of graphs statistics.
   */
  async readStatistics(cancellationToken?: AbortController): Promise<GraphStatisticsResponse> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/stats`;
    return await this.get<GraphStatisticsResponse>(url, cancellationToken);
  }

  /**
   * Read a graph Statistics
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<GraphStatistics>} - A graph statistics.
   */
  async readStatistic(graphGuid: string, cancellationToken?: AbortController): Promise<GraphStatistics> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/stats`;
    return await this.get<GraphStatistics>(url, cancellationToken);
  }

  /**
   * Enable vector index for a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {VectorIndexEnableRequest} request - Information about the vector index configuration.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorIndexEnableResponse>} - The vector index configuration.
   */
  async enableVectorIndex(
    graphGuid: string,
    request: VectorIndexEnableRequest,
    cancellationToken?: AbortController
  ): Promise<VectorIndexEnableResponse> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    if (!request) {
      GenericExceptionHandlers.ArgumentNullException('Vector Index Request');
    }
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/vectorindex/enable`;
    return await this.putUpdate<VectorIndexEnableResponse>(url, request, cancellationToken);
  }

  /**
   * Read vector index configuration for a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorIndexEnableResponse>} - The vector index configuration.
   */
  async readVectorIndexConfig(
    graphGuid: string,
    cancellationToken?: AbortController
  ): Promise<VectorIndexEnableResponse> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/vectorindex/config`;
    return await this.get<VectorIndexEnableResponse>(url, cancellationToken);
  }

  /**
   * Read vector index statistics for a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<VectorIndexStatsResponse>} - The vector index statistics.
   */
  async readVectorIndexStats(
    graphGuid: string,
    cancellationToken?: AbortController
  ): Promise<VectorIndexStatsResponse> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/vectorindex/stats`;
    return await this.get<VectorIndexStatsResponse>(url, cancellationToken);
  }

  /**
   * Rebuild vector index for a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if the rebuild was successful.
   */
  async rebuildVectorIndex(graphGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/vectorindex/rebuild`;
    return await this.post<boolean>(url, {}, cancellationToken);
  }

  /**
   * Delete vector index for a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<boolean>} - True if the deletion was successful.
   */
  async deleteVectorIndex(graphGuid: string, cancellationToken?: AbortController): Promise<boolean> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/vectorindex`;
    return await this.del(url, cancellationToken);
  }

  /**
   * Read a subgraph starting from a given node within a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the starting node.
   * @param {{
   *   maxDepth?: number;
   *   maxNodes?: number;
   *   maxEdges?: number;
   *   incldata?: boolean;
   *   inclsub?: boolean;
   * }} [options] - Optional query parameters to control the subgraph extraction.
   *   - maxDepth: Maximum traversal depth from the starting node.
   *   - maxNodes: Maximum number of nodes to return. 0 means no limit.
   *   - maxEdges: Maximum number of edges to return. 0 means no limit.
   *   - incldata: Whether to include node/edge data.
   *   - inclsub: Whether to include subordinate/related elements.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<ReadSubGraphResponse>} - The subgraph as returned by the API.
   */
  async readSubGraph(
    graphGuid: string,
    nodeGuid: string,
    options: {
      maxDepth?: number;
      maxNodes?: number;
      maxEdges?: number;
      incldata?: boolean;
      inclsub?: boolean;
    } = {
      maxDepth: 2,
      maxNodes: 0,
      maxEdges: 0,
      incldata: false,
      inclsub: false,
    },
    cancellationToken?: AbortController
  ): Promise<ReadSubGraphResponse> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('nodeGuid');
    }
    let url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/subgraph`;

    if (options) {
      const queryParams = [];
      if (typeof options.maxDepth === 'number') queryParams.push(`maxDepth=${options.maxDepth}`);
      if (typeof options.maxNodes === 'number') queryParams.push(`maxNodes=${options.maxNodes}`);
      if (typeof options.maxEdges === 'number') queryParams.push(`maxEdges=${options.maxEdges}`);
      if (options.incldata) queryParams.push('incldata');
      if (options.inclsub) queryParams.push('inclsub');
      if (queryParams.length > 0) {
        url += '?' + queryParams.join('&');
      }
    }

    return await this.get<any>(url, cancellationToken);
  }

  /**
   * Read subgraph statistics for a specific node in a graph.
   * @param {string} graphGuid - The GUID of the graph.
   * @param {string} nodeGuid - The GUID of the starting node.
   * @param {Object} [options] - Optional query parameters.
   * @param {number} [options.maxDepth=2] - Maximum traversal depth from the starting node.
   * @param {number} [options.maxNodes=0] - Maximum number of nodes to consider. 0 means no limit.
   * @param {number} [options.maxEdges=0] - Maximum number of edges to consider. 0 means no limit.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<GraphStatistics>} - The statistics as returned by the API.
   */
  async readSubGraphStatistics(
    graphGuid: string,
    nodeGuid: string,
    options: {
      maxDepth?: number;
      maxNodes?: number;
      maxEdges?: number;
    } = {
      maxDepth: 2,
      maxNodes: 0,
      maxEdges: 0,
    },
    cancellationToken?: AbortController
  ): Promise<GraphStatistics> {
    if (!graphGuid) {
      GenericExceptionHandlers.ArgumentNullException('graphGuid');
    }
    if (!nodeGuid) {
      GenericExceptionHandlers.ArgumentNullException('nodeGuid');
    }
    let url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${graphGuid}/nodes/${nodeGuid}/subgraph/stats`;

    if (options) {
      const queryParams = [];
      if (typeof options.maxDepth === 'number') queryParams.push(`maxDepth=${options.maxDepth}`);
      if (typeof options.maxNodes === 'number') queryParams.push(`maxNodes=${options.maxNodes}`);
      if (typeof options.maxEdges === 'number') queryParams.push(`maxEdges=${options.maxEdges}`);
      if (queryParams.length > 0) {
        url += '?' + queryParams.join('&');
      }
    }

    return await this.get<any>(url, cancellationToken);
  }
}
