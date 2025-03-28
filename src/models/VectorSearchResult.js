import Serializer from '../utils/Serializer';
import NodeModel from './Node';
import EdgeModel from './Edge';
import GraphModel from './Graph';
/**
 * VectorSearchResult class representing a search result for a vector.
 */
export class VectorSearchResult {
  /**
   * @param {Object} result - Information about the search result.
   * @param {number|null} [result.Score] - Score of the search result.
   * @param {Node} [result.Node] - Node of the search result.
   * @param {Edge} [result.Edge] - Edge of the search result.
   * @param {Graph} [result.Graph] - Graph of the search result.
   * @param {number} [result.Distance] - Distance metric.
   */
  constructor(result = {}) {
    const { Score, Distance, Node, Edge, Graph } = result;

    this.Score = Score; // Score of the search result
    this.Distance = Distance; // Distance metric
    this.Node = Node ? Serializer.deserializeJson(Node, NodeModel) : undefined; // Node of the search result
    this.Edge = Edge ? Serializer.deserializeJson(Edge, EdgeModel) : undefined; // Edge of the search result
    this.Graph = Graph ? Serializer.deserializeJson(Graph, GraphModel) : undefined; // Graph of the search result
  }
}
