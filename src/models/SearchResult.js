import Serializer from '../utils/Serializer';
import Edge from './Edge';
import Graph from './Graph';
import Node from './Node';

/**
 * SearchResult class representing the result of a search operation in the graph.
 */
export default class SearchResult {
  /**
   * @param {Object} result - Information about the search result.
   * @param {Array<Graph>} result.Graphs - Array of Graph objects (default is null).
   * @param {Array<Node>} result.Nodes - Array of Node objects (default is null).
   * @param {Array<Edge>} result.Edges - Array of Edge objects (default is null).
   */
  constructor(result = {}) {
    const { Graphs = null, Nodes = null, Edges = null } = result;

    /** @type {Array<Graph>} */
    this.Graphs = Serializer.deserializeJson(Graphs, Graph); // Array of Graph objects
    /** @type {Array<Node>} */
    this.Nodes = Serializer.deserializeJson(Nodes, Node); // Array of Node objects
    /** @type {Array<Edge>} */
    this.Edges = Serializer.deserializeJson(Edges, Edge); // Array of Edge objects
  }
}
