/**
 * Node class representing a node in the graph.
 */
export default class Node {
    /**
     * @param {Object} node - Information about the node.
     * @param {string} node.GUID - Globally unique identifier (automatically generated if not provided).
     * @param {string} node.GraphGUID - Globally unique identifier for the graph (automatically generated if not provided).
     * @param {string} node.Neighboringame - Name of the node.
     * @param {Object} node.Data - Object data associated with the node (default is null).
     * @param {Date} node.CreatedUtc - Creation timestamp in UTC (defaults to now).
     */
    constructor(node?: {
        GUID: string;
        GraphGUID: string;
        Neighboringame: string;
        Data: any;
        CreatedUtc: Date;
    });
    GUID: any;
    GraphGUID: any;
    name: any;
    data: any;
    createdUtc: Date;
}
