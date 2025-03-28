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
    constructor(result?: {
        Score?: number | null;
        Node?: Node;
        Edge?: any;
        Graph?: any;
        Distance?: number;
    });
    Score: number;
    Distance: number;
    Node: any;
    Edge: any;
    Graph: any;
}
