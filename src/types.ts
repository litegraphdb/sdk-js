/**
 * ApiErrorResponse.
 */
export type ApiErrorResponse = {
  error?: any;
  context?: any;
  description?: any;
};

/**
 * CredentialMetadata.
 */
export type CredentialMetadata = {
  /** Unique identifier for the credential */
  GUID?: string;
  /** Unique identifier for the tenant */
  TenantGUID?: string;
  /** Unique identifier for the user */
  UserGUID?: string;
  /** Name of the credential */
  Name?: any;
  /** Bearer token */
  BearerToken?: any;
  /** Indicates if the credential is active */
  Active?: boolean;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
};

export type CredentialMetadataCreateRequest = {
  /** Globally unique identifier for the user */
  UserGUID: string;
  /** Name of the credential */
  Name: string;
  /** Bearer token */
  BearerToken: string;
  /** Indicates if the credential is active */
  Active: boolean;
};

/**
 * Edge.
 */
export type Edge = {
  /** Unique identifier for the edge */
  GUID?: string;
  /** Unique identifier for the graph */
  GraphGUID?: string;
  /** Name of the edge */
  Name?: any;
  /** From node identifier */
  From?: any;
  /** To node identifier */
  To?: any;
  /** Cost associated with the edge */
  Cost?: number;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Additional data associated with the edge */
  Data?: object | null;
  /** Last update timestamp */
  LastUpdateUtc?: string;
  /** Array of labels */
  Labels?: string[];
  /** Key-value pairs of tags */
  Tags?: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors?: any[];
};

/**
 * EdgeCreateRequest.
 */
export type EdgeCreateRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the from node */
  From: string;
  /** Globally unique identifier for the to node */
  To: string;
  /** Cost associated with the edge */
  Cost?: number;
  /** Object data */
  Data?: object | null;
  /** Array of labels */
  Labels?: string[];
  /** Key-value pairs of tags */
  Tags?: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors?: any[];
};

/**
 * EdgeBetween.
 */
export type EdgeBetween = {
  /** Starting node GUID */
  From?: any;
  /** Ending node GUID */
  To?: any;
};

/**
 * ExistenceResult.
 */
export type ExistenceResult = {
  /** Array of existing node GUIDs */
  existingNodes?: any;
  /** Array of missing node GUIDs */
  missingNodes?: any;
  /** Array of existing edge GUIDs */
  existingEdges?: any;
  /** Array of missing edge GUIDs */
  missingEdges?: any;
  /** Array of existing EdgeBetween instances */
  existingEdgesBetween?: any;
  /** Array of missing EdgeBetween instances */
  missingEdgesBetween?: any;
};

/**
 * Graph.
 */
export type Graph = {
  /** Unique identifier */
  GUID: string;
  /** Name of the graph */
  Name: any;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Object data */
  Data: object | null;
  /** Array of labels */
  Labels: string[];
  /** Key-value pairs of tags */
  Tags: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors: any[];
};

/**
 * GraphCreateRequest.
 */
export type GraphCreateRequest = {
  /** Name of the graph */
  Name: string;
  /** Array of labels */
  Labels?: string[];
  /** Key-value pairs of tags */
  Tags?: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors?: any[];
  /** Object data */
  Data?: object | null;
};

/**
 * LabelMetadata.
 */
export type LabelMetadata = {
  /** Unique identifier for the label */
  GUID?: string;
  /** Unique identifier for the tenant */
  TenantGUID?: string;
  /** Unique identifier for the graph */
  GraphGUID?: string;
  /** Unique identifier for the node */
  NodeGUID?: string;
  /** Unique identifier for the edge */
  EdgeGUID?: string;
  /** Label of the metadata */
  Label?: any;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
};

/**
 * LabelMetadataCreateRequest.
 */
export type LabelMetadataCreateRequest = {
  /** Label of the metadata */
  Label: string;
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the node */
  NodeGUID: string;
  /** Globally unique identifier for the edge */
  EdgeGUID: string;
};

/**
 * Node.
 */
export type Node = {
  /** Unique identifier for the node */
  GUID?: string;
  /** Unique identifier for the graph this node belongs to */
  GraphGUID?: string;
  /** Name of the node */
  Name?: any;
  /** Object data */
  Data?: object | null;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
  /** Array of labels */
  Labels?: string[];
  /** Key-value pairs of tags */
  Tags?: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors?: any[];
};

/**
 * RouteDetail.
 */
export type RouteDetail = {
  /** Private property for Edges */
  Edges?: any;
};

/**
 * RouteRequest.
 */
export type RouteRequest = {
  /** Unique identifier for the graph */
  Graph?: any;
  /** Unique identifier for the from node */
  From?: any;
  /** Unique identifier for the to node */
  To?: any;
  /** Expression for filtering edges */
  EdgeFilter?: any;
  /** Expression for filtering nodes */
  NodeFilter?: any;
};

/**
 * RouteResult.
 */
export type RouteResult = {
  /** Private property for Timestamp */
  Timestamp?: any;
  /** Private property for Routes */
  Routes?: any;
};

/**
 * SearchRequest.
 */
export type SearchRequest = {
  /** Unique identifier for the graph */
  GraphGUID?: string;
  /** Ordering of the search results */
  Ordering?: any;
  /** Expression for the search request */
  Expr?: any;
};

/**
 * SearchResult.
 */
export type SearchResult = {
  /** Array of Graph objects */
  Graphs?: Graph[];
  /** Array of Node objects */
  Nodes?: Node[];
  /** Array of Edge objects */
  Edges?: Edge[];
};

/**
 * TagMetaData.
 */
export type TagMetaData = {
  /** Unique identifier for the tag */
  GUID?: string;
  /** Unique identifier for the tenant */
  TenantGUID?: string;
  /** Unique identifier for the graph */
  GraphGUID?: string;
  /** Unique identifier for the node */
  NodeGUID?: string;
  /** Unique identifier for the edge */
  EdgeGUID?: string;
  /** Key of the tag */
  Key?: any;
  /** Value of the tag */
  Value?: any;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
};

export type TagMetaDataCreateRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the node */
  NodeGUID: string;
  /** Globally unique identifier for the edge */
  EdgeGUID: string;
  /** Key of the tag */
  Key: string;
  /** Value of the tag */
  Value: string;
};

/**
 * TenantMetaData.
 */
export type TenantMetaData = {
  /** Unique identifier for the tenant */
  GUID?: string;
  /** Name of the tenant */
  Name?: any;
  /** Indicates if the tenant is active */
  Active?: boolean;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
};

export type TenantMetaDataCreateRequest = {
  /** Name of the tenant */
  Name: string;
  /** Indicates if the tenant is active */
  Active: boolean;
};

/**
 * Token.
 */
export type Token = {
  /** Token creation timestamp */
  TimestampUtc?: string;
  /** Token expiration timestamp */
  ExpirationUtc?: string;
  /** Indicates if token is expired */
  IsExpired?: boolean;
  /** Tenant identifier */
  TenantGUID?: string;
  /** User identifier */
  UserGUID?: string;
  /** The token string */
  Token?: any;
  /** Token validity status */
  Valid?: any;
  /** User metadata */
  User?: any;
  /** Tenant metadata */
  Tenant?: any;
};

/**
 * UserMetadata.
 */
export type UserMetadata = {
  /** Unique identifier for the user */
  GUID?: string;
  /** Unique identifier for the tenant */
  TenantGUID?: string;
  /** First name of the user */
  FirstName?: any;
  /** Last name of the user */
  LastName?: any;
  /** Email of the user */
  Email?: any;
  /** Password for the user */
  Password?: any;
  /** Indicates if the user is active */
  Active?: boolean;
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
};

export type UserMetadataCreateRequest = {
  /** First name of the user */
  FirstName: string;
  /** Last name of the user */
  LastName: string;
  /** Email of the user */
  Email: string;
  /** Password for the user */
  Password: string;
  /** Indicates if the user is active */
  Active: boolean;
};

/**
 * VectorMetadata.
 */
export type VectorMetadata = {
  /** Unique identifier for the vector */
  GUID?: string;
  /** Unique identifier for the tenant */
  TenantGUID?: string;
  /** Unique identifier for the graph */
  GraphGUID?: string;
  /** Unique identifier for the node */
  NodeGUID?: string;
  /** Unique identifier for the edge */
  EdgeGUID?: string;
  /** Model associated with the vector */
  Model?: any;
  /** Dimensionality of the vector */
  Dimensionality?: any;
  /** Content of the vector */
  Content?: any;
  /** List of float values representing the vector */
  Vectors?: any[];
  /** Creation timestamp */
  CreatedUtc?: string;
  /** Last update timestamp */
  LastUpdateUtc?: string;
};

/**
 * VectorCreateRequest.
 */
export type VectorCreateRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the node */
  NodeGUID: string;
  /** Globally unique identifier for the edge */
  EdgeGUID: string;
  /** Content of the vector */
  Content: string;
  /** Model associated with the vector */
  Model: string;
  /** Dimensionality of the vector */
  Dimensionality: number;
  /** List of float values representing the vector */
  Vectors: number[];
};
/**
 * VectorSearchResult.
 */
export type VectorSearchResult = {
  /** Score of the search result */
  Score?: any;
  /** Distance metric */
  Distance?: any;
  /** Node of the search result */
  Node?: any;
  /** Edge of the search result */
  Edge?: any;
  /** Graph of the search result */
  Graph?: any;
};

/**
 * GraphSearchRequest.
 */
export type GraphSearchRequest = {
  /** Array of labels associated with the graph */
  Labels?: string[];
  /** Array of tags associated with the graph */
  Tags?: Record<string, any>;
  /** Ordering of the search results */
  Ordering?: string;
  /** Expression used for the search */
  Expr?: Record<string, any>;
};

/**
 * NodeSearchRequest.
 */
export type NodeEdgeSearchRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Array of labels associated with the graph */
  Labels?: string[];
  /** Array of tags associated with the graph */
  Tags?: Record<string, any>;
  /** Ordering of the search results (default is CreatedDescending) */
  Ordering?: string;
  /** Expression used for the search */
  Expr?: Record<string, any>;
};

/**
 * VectorSearchRequest.
 */
export type VectorSearchRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Domain to search (Node, Edge, Graph) */
  Domain: string;
  /** Type of vector similarity search */
  SearchType: string;
  /** Array of labels to filter results */
  Labels?: string[];
  /** Key-value pairs of tags to filter results */
  Tags?: Record<string, any>;
  /** Expression used for filtering results */
  Expr?: Record<string, any>;
  /** Vector embeddings to search against */
  Embeddings: number[];
};
