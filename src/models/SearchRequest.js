/**
 * SearchRequest class representing a search request in the graph.
 */
export default class SearchRequest {
  /**
   * @param {Object} request - Information about the search request.
   * @param {string} request.GraphGUID - Globally unique identifier for the graph (defaults to an empty GUID).
   * @param {string} request.Ordering - Ordering of the search results (default is CreatedDescending).
   * @param {Object} request.Expr - Expression used for the search (default is null).
   */
  constructor(request = {}) {
    const { GraphGUID, Ordering, Expr } = request;

    this.GraphGUID = GraphGUID; // Unique identifier for the graph
    this.Ordering = Ordering; // Ordering of the search results
    this.Expr = Expr; // Expression for the search request
  }
}
