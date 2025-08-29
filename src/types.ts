import { EnumerationOrderEnum } from './enums/EnumerationOrderEnum';

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
  GUID: string;
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
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
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
  GUID: string;
  /** Unique identifier for the tenant */
  TenantGUID: string;
  /** Unique identifier for the graph */
  GraphGUID: string;
  /** Name of the edge */
  Name: string;
  /** From node identifier */
  From: string;
  /** To node identifier */
  To: string;
  /** Cost associated with the edge */
  Cost: number;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Additional data associated with the edge */
  Data: object;
  /** Last update timestamp */
  LastUpdateUtc: string;
  /** Array of labels */
  Labels: string[];
  /** Key-value pairs of tags */
  Tags: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors: any[];
};

/**
 * EdgeCreateRequest.
 */
export type EdgeCreateRequest = {
  /** Name of the edge */
  Name: string;
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the from node */
  From: string;
  /** Globally unique identifier for the to node */
  To: string;
  /** Cost associated with the edge */
  Cost?: number;
  /** Object data */
  Data?: object;
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
  From?: string;
  /** Ending node GUID */
  To?: string;
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
  /** Unique identifier for the tenant */
  TenantGUID: string;
  /** Unique identifier */
  GUID: string;
  /** Name of the graph */
  Name: any;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
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
  GUID: string;
  /** Unique identifier for the tenant */
  TenantGUID: string;
  /** Unique identifier for the graph */
  GraphGUID: string;
  /** Unique identifier for the node */
  NodeGUID: string;
  /** Unique identifier for the edge */
  EdgeGUID: string;
  /** Label of the metadata */
  Label: string;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
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
  NodeGUID: string | null;
  /** Globally unique identifier for the edge */
  EdgeGUID: string | null;
};

/**
 * Node.
 */
export type Node = {
  /** Unique identifier for the tenant */
  TenantGUID: string;
  /** Unique identifier for the node */
  GUID: string;
  /** Unique identifier for the graph this node belongs to */
  GraphGUID: string;
  /** Name of the node */
  Name: string;
  /** Object data */
  Data: object;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
  /** Array of labels */
  Labels: string[];
  /** Key-value pairs of tags */
  Tags: { [key: string]: any };
  /** Array of vector embeddings */
  Vectors: any[];
};

export type NodeCreateRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Name of the node */
  Name: string;
  /** Object data */
  Data?: object;
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
  GraphGUID: string;
  /** Ordering of the search results */
  Ordering?: EnumerationOrderEnum;
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
  GUID: string;
  /** Unique identifier for the tenant */
  TenantGUID: string;
  /** Unique identifier for the graph */
  GraphGUID: string;
  /** Unique identifier for the node */
  NodeGUID: string;
  /** Unique identifier for the edge */
  EdgeGUID: string;
  /** Key of the tag */
  Key: string;
  /** Value of the tag */
  Value: string;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
};

export type TagMetaDataCreateRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the node */
  NodeGUID: string | null;
  /** Globally unique identifier for the edge */
  EdgeGUID: string | null;
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
  GUID: string;
  /** Name of the tenant */
  Name: string;
  /** Indicates if the tenant is active */
  Active: boolean;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
};

export type TenantMetaDataCreateRequest = {
  /** Name of the tenant */
  Name: string;
  /** Indicates if the tenant is active */
  Active: boolean;
};

/**
 * BackupMetaData.
 */
export type BackupMetaData = {
  /** Name of the backup */
  Filename: string;
  /** Length of the backup in bytes */
  Length: number;
  /** MD5 hash of the backup */
  MD5Hash: string;
  /** SHA1 hash of the backup */
  SHA1Hash: string;
  /** SHA256 hash of the backup */
  SHA256Hash: string;
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
  /** Last access timestamp */
  LastAccessUtc: string;
  /** Backup data in Base64 format */
  Data?: string;
};

export type BackupMetaDataCreateRequest = {
  /** Name of the backup */
  Filename: string;
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
  User?: UserMetadata;
  /** Tenant metadata */
  Tenant?: TenantMetaData;
};

/**
 * UserMetadata.
 */
export type UserMetadata = {
  /** Unique identifier for the user */
  GUID: string;
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
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
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
  GUID: string;
  /** Unique identifier for the tenant */
  TenantGUID: string;
  /** Unique identifier for the graph */
  GraphGUID: string;
  /** Unique identifier for the node */
  NodeGUID: string;
  /** Unique identifier for the edge */
  EdgeGUID: string;
  /** Model associated with the vector */
  Model: any;
  /** Dimensionality of the vector */
  Dimensionality: any;
  /** Content of the vector */
  Content: any;
  /** List of float values representing the vector */
  Vectors: any[];
  /** Creation timestamp */
  CreatedUtc: string;
  /** Last update timestamp */
  LastUpdateUtc: string;
};

/**
 * VectorCreateRequest.
 */
export type VectorCreateRequest = {
  /** Globally unique identifier for the graph */
  GraphGUID: string;
  /** Globally unique identifier for the node */
  NodeGUID: string | null;
  /** Globally unique identifier for the edge */
  EdgeGUID: string | null;
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
  /** Name of the graph */
  Name?: string;
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
  /** Name of the node or edge */
  Name?: string;
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

export type ReadFirstRequest = {
  /** Globally unique identifier for the graph */
  Ordering?: string;
  /** Array of labels associated with the graph */
  Labels?: string[];
  /** Key-value pairs of tags associated with the graph */
  Tags?: Record<string, any>;
  /** Expression used for the search */
  Expr?: Record<string, any>;
};

export type IncludeDataAndSubordinates = {
  includeData?: boolean;
  includeSubordinates?: boolean;
};

export type EnumerateRequest = IncludeDataAndSubordinates & {
  token?: string;
  maxKeys?: number;
  skip?: number;
};

export type EnumerateAndSearchRequest = {
  GraphGUID?: string;
  Ordering?: string;
  IncludeData?: boolean;
  IncludeSubordinates?: boolean;
  MaxResults?: number;
  ContinuationToken?: string | null;
  Skip?: number;
  Labels?: string[];
  Tags?: Record<string, string>; // key-value pairs of strings
  Expr?: Record<string, any>; // expression object, loosely typed
};

export type EnumerateResponse<T> = {
  Success: boolean;
  Timestamp: {
    Start: string;
    End: string;
    TotalMs: number;
    Messages: Record<string, unknown>;
  };
  ContinuationToken?: string;
  MaxResults: number;
  EndOfResults: boolean;
  TotalRecords: number;
  RecordsRemaining: number;
  Objects: T[];
};

export type TenantStatistics = {
  Graphs: number;
  Nodes: number;
  Edges: number;
  Labels: number;
  Tags: number;
  Vectors: number;
};

export type TenantStatisticsResponse = Record<string, TenantStatistics>;

export type GraphStatistics = {
  Nodes: number;
  Edges: number;
  Labels: number;
  Tags: number;
  Vectors: number;
};

export type GraphStatisticsResponse = Record<string, GraphStatistics>;

/**
 * Vector Index Enable Request.
 */
export type VectorIndexEnableRequest = {
  /** Type of vector index to use */
  VectorIndexType: string;
  /** File path for the vector index */
  VectorIndexFile: string;
  /** Threshold for vector indexing */
  VectorIndexThreshold?: number | null;
  /** Dimensionality of the vectors */
  VectorDimensionality: number;
  /** M parameter for HNSW index */
  VectorIndexM: number;
  /** EF parameter for HNSW index */
  VectorIndexEf: number;
  /** EF construction parameter for HNSW index */
  VectorIndexEfConstruction: number;
};

/**
 * Vector Index Enable Response.
 */
export type VectorIndexEnableResponse = {
  /** Type of vector index being used */
  VectorIndexType: string;
  /** File path for the vector index */
  VectorIndexFile: string;
  /** Dimensionality of the vectors */
  VectorDimensionality: number;
  /** M parameter for HNSW index */
  VectorIndexM: number;
  /** EF parameter for HNSW index */
  VectorIndexEf: number;
  /** EF construction parameter for HNSW index */
  VectorIndexEfConstruction: number;
};

/**
 * Vector Index Statistics Response.
 */
export type VectorIndexStatsResponse = {
  /** Number of vectors in the index */
  VectorCount: number;
  /** Dimensionality of the vectors */
  Dimensions: number;
  /** Type of vector index */
  IndexType: string;
  /** M parameter for HNSW index */
  M: number;
  /** EF construction parameter for HNSW index */
  EfConstruction: number;
  /** Default EF parameter for HNSW index */
  DefaultEf: number;
  /** File path for the vector index */
  IndexFile: string;
  /** Size of the index file in bytes */
  IndexFileSizeBytes: number;
  /** Estimated memory usage in bytes */
  EstimatedMemoryBytes: number;
  /** Last rebuild timestamp */
  LastRebuildUtc: string;
  /** Whether the index is loaded */
  IsLoaded: boolean;
  /** Distance metric used for similarity */
  DistanceMetric: string;
};
