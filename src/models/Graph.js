import { v4 as uuidV4 } from 'uuid';

/**
 * Graph class representing a graph structure.
 */
export default class Graph {
  /**
   * @param {Object} graph - Information about the graph.
   * @param {string} graph.GUID - Globally unique identifier (automatically generated if not provided).
   * @param {string} graph.Name - Name of the graph.
   * @param {Date} graph.CreatedUtc - Creation timestamp in UTC (defaults to now).
   * @param {string[]} graph.Labels - Array of labels associated with the graph.
   * @param {Object} graph.Tags - Key-value pairs of tags.
   * @param {[]} graph.Vectors - Array of vector embeddings.
   * @param {Object} graph.Data - Object data associated with the graph (default is null).
   */
  constructor(graph = {}) {
    const { GUID, Name, CreatedUtc, Data, Labels, Tags, Vectors } = graph;
    this.GUID = GUID; // Unique identifier
    this.Name = Name; // Name of the graph
    this.CreatedUtc = CreatedUtc; // Creation timestamp
    this.Data = Data; // Object data
    this.Labels = Labels; // Array of labels
    this.Tags = Tags; // Key-value pairs of tags
    this.Vectors = Vectors; // Array of vector embeddings
  }
}
