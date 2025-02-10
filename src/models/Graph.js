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
   * @param {Object} graph.Data - Object data associated with the graph (default is null).
   */
  constructor(graph = {}) {
    const { GUID = uuidV4(), Name = null, CreatedUtc = new Date(), Data = null } = graph;

    this.GUID = GUID; // Unique identifier
    this.name = Name; // Name of the graph
    this.createdUtc = CreatedUtc; // Creation timestamp
    this.data = Data; // Object data
  }
}
