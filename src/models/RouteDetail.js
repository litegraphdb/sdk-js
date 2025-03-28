import Edge from './Edge';

/**
 * RouteDetail class representing the total cost and ordered list of edges between two nodes.
 */
export default class RouteDetail {
  /**
   * @param {Object} detail - Information about the route detail.
   * @param {Array<Edge>} detail.Edges - Array of Edge objects (default is an empty array).
   */
  constructor(detail = {}) {
    const { Edges } = detail; // Default to an empty array if not provided
    this.Edges = Edges; // Private property for Edges
  }

  /**
   * Gets the total cost of the route.
   * @returns {number} The total cost of the route.
   */
  get TotalCost() {
    if (!this.Edges || this.Edges.length < 1) return 0;
    return this.Edges.reduce((sum, edge) => sum + edge.Cost, 0); // Calculate total cost
  }
}
