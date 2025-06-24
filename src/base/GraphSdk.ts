import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import {
  EnumerateAndSearchRequest,
  EnumerateRequest,
  Graph,
  GraphCreateRequest,
  GraphSearchRequest,
  GraphStatistics,
  GraphStatisticsResponse,
  ReadFirstRequest,
  SearchResult,
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
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph[]>} - An array of graphs.
   */
  async readAll(cancellationToken?: AbortController): Promise<Graph[]> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs`;
    return await this.getMany<Graph>(url, cancellationToken);
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
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph>} - The requested graph.
   * @throws {Error | ApiErrorResponse} Rejects if the URL is invalid or if the request fails.
   */
  async read(guid: string, cancellationToken?: AbortController): Promise<Graph> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${guid}`;
    return await this.get<Graph>(url, cancellationToken);
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
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<string>} - The GEXF XML data.
   */
  async exportGexf(guid: string, cancellationToken?: AbortController): Promise<string> {
    const url = `${this.config.endpoint}v1.0/tenants/${this.config.tenantGuid}/graphs/${guid}/export/gexf`;
    return await this.get<string>(url, cancellationToken);
  }

  /**
   * Enumerate all graphs.
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph[]>} - An array of graphs.
   */
  async enumerate(request?: EnumerateRequest, cancellationToken?: AbortController): Promise<Graph[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs`;
    const params = Utils.createUrlParams(request);
    return await this.get<Graph[]>(url + params, cancellationToken);
  }

  /**
   * Enumerate and Search
   * @param {AbortController} [cancellationToken] - Optional cancellation token for cancelling the request.
   * @returns {Promise<Graph[]>} - An array of graphs.
   */
  async enumerateAndSearch(request: EnumerateAndSearchRequest, cancellationToken?: AbortController): Promise<Graph[]> {
    const url = `${this.config.endpoint}v2.0/tenants/${this.config.tenantGuid}/graphs`;
    return await this.post<Graph[]>(url, request, cancellationToken);
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
}
