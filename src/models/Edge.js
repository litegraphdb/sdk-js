import { v4 as uuidV4 } from 'uuid';

/**
 * Edge class representing an edge in a graph.
 */
export default class Edge {
  /**
   * @param {Object} edge - Information about the edge.
   * @param {string} [edge.GUID] - Globally unique identifier for the edge (automatically generated if not provided).
   * @param {string} [edge.GraphGUID] - Globally unique identifier for the graph (automatically generated if not provided).
   * @param {string} [edge.Name] - Name of the edge.
   * @param {string} [edge.From] - Globally unique identifier of the from node.
   * @param {string} [edge.To] - Globally unique identifier of the to node.
   * @param {number} [edge.Cost=0] - Cost associated with the edge (default is 0).
   * @param {Date} [edge.CreatedUtc] - Creation timestamp in UTC (defaults to current UTC time).
   * @param {Object} [edge.Data] - Additional object data associated with the edge (default is null).
   * @param {Date} [edge.LastUpdateUtc] - Last update timestamp in UTC (defaults to current UTC time).
   * @param {Array} [edge.Labels] - Array of labels associated with the edge.
   * @param {Object} [edge.Tags] - Key-value pairs of tags associated with the edge.
   * @param {Array} [edge.Vectors] - Array of vector embeddings associated with the edge.
   */
  constructor(edge = {}) {
    const { GUID, GraphGUID, Name, From, To, Cost, CreatedUtc, Data, LastUpdateUtc, Labels, Tags, Vectors } = edge;

    this.GUID = GUID; // Unique identifier for the edge
    this.GraphGUID = GraphGUID; // Unique identifier for the graph
    this.Name = Name; // Name of the edge
    this.From = From; // From node identifier
    this.To = To; // To node identifier
    this.Cost = Cost; // Cost associated with the edge
    this.CreatedUtc = CreatedUtc; // Creation timestamp
    this.Data = Data; // Additional data associated with the edge
    this.LastUpdateUtc = LastUpdateUtc; // Last update timestamp
    this.Labels = Labels; // Array of labels
    this.Tags = Tags; // Key-value pairs of tags
    this.Vectors = Vectors; // Array of vector embeddings
  }
}
