import { v4 as uuidV4 } from 'uuid';

/**
 * RouteRequest class representing a request to find a route in the graph.
 */
export default class RouteRequest {
  /**
   * @param {Object} request - Information about the route request.
   * @param {string} request.Graph - Globally unique identifier for the graph (defaults to an empty GUID).
   * @param {string} request.From - Globally unique identifier for the from node (defaults to an empty GUID).
   * @param {string} request.To - Globally unique identifier for the to node (defaults to an empty GUID).
   * @param {Object} request.EdgeFilter - Expression used to filter edges (default is null).
   * @param {Object} request.NodeFilter - Expression used to filter nodes (default is null).
   */
  constructor(request = {}) {
    const { Graph, From, To, EdgeFilter, NodeFilter } = request;

    this.Graph = Graph; // Unique identifier for the graph
    this.From = From; // Unique identifier for the from node
    this.To = To; // Unique identifier for the to node
    this.EdgeFilter = EdgeFilter; // Expression for filtering edges
    this.NodeFilter = NodeFilter; // Expression for filtering nodes
  }
}
