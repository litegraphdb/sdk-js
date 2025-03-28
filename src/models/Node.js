import { v4 as uuidV4 } from 'uuid';

/**
 * Node class representing a node in the graph.
 */
export default class Node {
  /**
   * @param {Object} node - Information about the node.
   * @param {string} node.GUID - Globally unique identifier (automatically generated if not provided).
   * @param {string} node.GraphGUID - Globally unique identifier for the graph (automatically generated if not provided).
   * @param {string} node.Name - Name of the node.
   * @param {Object} node.Data - Object data associated with the node (default is null).
   * @param {Date} node.CreatedUtc - Creation timestamp in UTC (defaults to now).
   * @param {Date} node.LastUpdateUtc - Last update timestamp in UTC (defaults to now).
   * @param {string[]} node.Labels - Array of labels associated with the node.
   * @param {Object} node.Tags - Key-value pairs of tags.
   * @param {[]} node.Vectors - Array of vector embeddings.
   */
  constructor(node = {}) {
    const { GUID, GraphGUID, Name, Data, CreatedUtc, LastUpdateUtc, Labels, Tags, Vectors } = node;

    this.GUID = GUID; // Unique identifier for the node
    this.GraphGUID = GraphGUID; // Unique identifier for the graph this node belongs to
    this.Name = Name; // Name of the node
    this.Data = Data; // Object data
    this.CreatedUtc = CreatedUtc; // Creation timestamp
    this.LastUpdateUtc = LastUpdateUtc; // Last update timestamp
    this.Labels = Labels; // Array of labels
    this.Tags = Tags; // Key-value pairs of tags
    this.Vectors = Vectors; // Array of vector embeddings
  }
}
