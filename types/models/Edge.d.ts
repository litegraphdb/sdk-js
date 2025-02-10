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
     */
    constructor(edge?: {
        GUID?: string;
        GraphGUID?: string;
        Name?: string;
        From?: string;
        To?: string;
        Cost?: number;
        CreatedUtc?: Date;
        Data?: any;
    });
    GUID: any;
    GraphGUID: any;
    Name: string;
    From: any;
    To: any;
    Cost: number;
    CreatedUtc: string | Date;
    Data: any;
}
