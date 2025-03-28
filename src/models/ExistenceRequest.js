import EdgeBetween from './EdgeBetween';

/**
 * ExistenceRequest class representing an existence check for multiple identifiers.
 */
export default class ExistenceRequest {
  /**
   * @param {Object} existenceRequest - Optional initial data for the existence request.
   * @param {string[]} existenceRequest.Nodes - Array of node GUIDs.
   * @param {string[]} existenceRequest.Edges - Array of edge GUIDs.
   * @param {EdgeBetween[]} existenceRequest.EdgesBetween - Array of EdgeBetween instances.
   */
  constructor(existenceRequest = {}) {
    const { Nodes = [], Edges = [], EdgesBetween = [] } = existenceRequest;

    this.Nodes = Nodes; // Array of node GUIDs
    this.Edges = Edges; // Array of edge GUIDs
    this.EdgesBetween = EdgesBetween.map((edge) => new EdgeBetween(edge)); // Array of EdgeBetween objects
  }

  /**
   * Verify if the object contains at least one existence request.
   * @returns {boolean} True if any existence request is present.
   */
  containsExistenceRequest() {
    return (
      (this.Nodes && this.Nodes.length > 0) ||
      (this.Edges && this.Edges.length > 0) ||
      (this.EdgesBetween && this.EdgesBetween.length > 0)
    );
  }
}
