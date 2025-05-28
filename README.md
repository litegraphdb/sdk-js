<img src="assets/favicon.png" height="48">

# JavaScript SDK for LiteGraph

LiteGraph is a lightweight graph database with both relational and vector support, built using Sqlite, with support for exporting to GEXF. LiteGraph is intended to be a multi-modal database primarily for providing persistence and retrieval for knowledge and artificial intelligence applications.

## Features

- Multi-tenant support with tenant GUID management
- Graph management
- Node and edge operations
- Route finding between nodes
- Search capabilities for graphs, nodes, and edges
- GEXF format export support
- Built-in retry mechanism and error handling
- Comprehensive logging system
- Access key authentication support

## Requirements

- Node.js v18.20.4
- npm

### Dependencies

-  `jest` - for testing
-  `msw` - for mocking the api
-  `superagent` - for making the api calls
-  `url` - for url parsing
-  `util` - for utility functions
-  `uuid` - for generating unique ids

## Installation

Use the command below to install the package.

```bash
npm i litegraphdb
```

## Quick Start

```js
import { LiteGraphSdk } from 'litegraphdb';

const sdk = new LiteGraphSdk(
    'https://api.litegraphdb.com',
    'your-tenant-guid',
    'your-access-key'
);
const graphGuid = 'example-graph-guid';

// Create a new graph
sdk.Graph.create({name: 'MyGraph'}).then((graph) => {
  console.log('Created graph:', graph);
});


const newMultipleNodes = [
    {
        "Name": "Active Directory",
        "Labels": [
            "test"
        ],
        "Tags": {
            "Type": "ActiveDirectory"
        },
        "Data": {
            "Name": "Active Directory"
        }
    },
    {
        "Name": "Website",
        "Labels": [
            "test"
        ],
        "Tags": {
            "Type": "Website"
        },
        "Data": {
            "Name": "Website"
        }
    }
]
//Create multiple Nodes
sdk.Node.create(graphGuid,newMultipleNodes).then((nodes) => {
  console.log('Created Multiple Nodes:', nodes);
});

const searchNodes = async () => {
  // Graph object to update

  const searchRequest = {
    GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    Ordering: 'CreatedDescending',
    Expr: {
      Left: 'Hello',
      Operator: 'Equals',
      Right: 'World',
    },
  };

sdk.Node.search(searchRequest).then((response) => {
  console.log('Search response:', response);
})
```


## API Endpoints Reference

### Tenant Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `readTenants` | Retrieves a list of all tenants. | `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData[]>` - Array of tenants | `GET /v1.0/tenants` |
| `readTenant` | Retrieves a specific tenant by GUID. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData>` - The tenant | `GET /v1.0/tenants/{tenantGuid}` |
| `createTenant` | Creates a new tenant. | `tenant` (TenantMetaData) - The tenant object <br> `tenant.name` (string) - Name of the tenant <br> `tenant.Active` (boolean) - Active status <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData>` - Created tenant | `PUT /v1.0/tenants` |
| `updateTenant` | Updates an existing tenant. | `tenant` (TenantMetaData) - The tenant object <br> `tenant.name` (string) - Name of the tenant <br> `tenant.Active` (boolean) - Active status <br> `guid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData>` - Updated tenant | `PUT /v1.0/tenants/{guid}` |
| `deleteTenant` | Deletes a tenant by GUID. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}` |
| `tenantExists` | Checks if a tenant exists by GUID. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}` |
| `tenantDeleteForce` | Deletes a tenant forcibly. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}?force` |

### User Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `readAllUsers` | Retrieves all users. | `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/users` |
| `readUser` | Retrieves a specific user by GUID. | `userGuid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata>` | `GET /v1.0/tenants/{tenantGuid}/users/{userGuid}` |
| `createUser` | Creates a new user. | `user` (Object) - User object with FirstName, LastName, Active, Email, Password <br> `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/users` |
| `existsUser` | Checks if a user exists by GUID. | `guid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/users/{guid}` |
| `updateUser` | Updates an existing user. | `user` (Object) - User object with FirstName, LastName, Active, Email, Password <br> `guid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/users/{guid}` |
| `deleteUser` | Deletes a user by GUID. | `guid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}/users/{guid}` |



### Authorization Operations


| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `generateToken` | Generates an authentication token. | `email` (string) - User's email <br> `password` (string) - User's password <br> `tenantId` (string) - Tenant ID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Token>` | `GET /v1.0/token` |
| `getTokenDetails` | Fetches details about an authentication token. | `token` (string) - Authentication token <br> `cancellationToken` (optional) - `AbortController` | `Promise<Object>` | `GET /v1.0/token/details` |
| `getTenantsForEmail` | Retrieves tenants associated with an email address. | `email` (string) - The email address to lookup tenants for. <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData[]>` | `GET /v1.0/token/tenants` |


### Credential Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `readAllCredentials` | Retrieves all credentials. | `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/credentials` |
| `readCredential` | Retrieves a specific credential by GUID. | `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata>` | `GET /v1.0/tenants/{tenantGuid}/credentials/{guid}` |
| `createCredential` | Creates a new credential. | `credential` (Object) - Credential object with Name, BearerToken, Active <br> `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/credentials` |
| `updateCredential` | Updates an existing credential. | `credential` (Object) - Credential object with Name, BearerToken, Active <br> `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/credentials/{guid}` |
| `deleteCredential` | Deletes a credential by GUID. | `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}/credentials/{guid}` |
| `existsCredential` | Checks if a credential exists by GUID. | `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/credentials/{guid}` |



### Label Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `readAllLabels` | Retrieves all labels. | `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/labels` |
| `readLabel` | Retrieves a specific label by GUID. | `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata>` | `GET /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `existsLabel` | Checks if a label exists by GUID. | `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `createLabel` | Creates a new label. | `label` (Object) - Label object <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/labels` |
| `createLabels` | Creates multiple labels. | `labels` (Array<Object>) - List of label objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata[]>` | `PUT /v1.0/tenants/{tenantGuid}/labels/bulk` |
| `updateLabel` | Updates an existing label. | `label` (Object) - Label object <br> `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `deleteLabel` | Deletes a label by GUID. | `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `deleteLabels` | Deletes multiple labels. | `guids` (Array<string>) - List of label GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/labels/bulk` |


### Tag Operations


| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `readAllTags` | Retrieves all tags. | `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData[]>` | `GET /v1.0/tenants/{tenantGuid}/tags` |
| `readTag` | Retrieves a specific tag by GUID. | `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData>` | `GET /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `existsTag` | Checks if a tag exists by GUID. | `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `createTag` | Creates a new tag. | `tag` (Object) - Tag object <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData>` | `PUT /v1.0/tenants/{tenantGuid}/tags` |
| `createTags` | Creates multiple tags. | `tags` (Array<Object>) - List of tag objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData[]>` | `PUT /v1.0/tenants/{tenantGuid}/tags/bulk` |
| `updateTag` | Updates an existing tag. | `tag` (Object) - Tag object <br> `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData>` | `PUT /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `deleteTag` | Deletes a tag by GUID. | `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `deleteTags` | Deletes multiple tags. | `guids` (Array<string>) - List of tag GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/tags/bulk` |

### Vector Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `readAllVectors` | Retrieves all vectors. | `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/vectors` |
| `readVector` | Retrieves a specific vector by GUID. | `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata>` | `GET /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `existsVector` | Checks if a vector exists by GUID. | `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `createVector` | Creates a new vector. | `vector` (Object) - Vector object <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/vectors` |
| `createVectors` | Creates multiple vectors. | `vectors` (Array<Object>) - List of vector objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata[]>` | `PUT /v1.0/tenants/{tenantGuid}/vectors/bulk` |
| `updateVector` | Updates an existing vector. | `vector` (Object) - Vector object <br> `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `deleteVector` | Deletes a vector by GUID. | `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `deleteVectors` | Deletes multiple vectors. | `guids` (Array<string>) - List of vector GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/vectors/bulk` |
| `searchVectors` | Searches vectors based on criteria. | `searchReq` (Object) - Search request with GraphGUID, Domain, SearchType, Labels <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorSearchResult>` | `POST /v1.0/tenants/{tenantGuid}/vectors` |


### Graph Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `graphExists` | Checks if a graph exists by GUID. | `guid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/graphs/{guid}` |
| `createGraph` | Creates a new graph. | `guid` (string) - Graph GUID <br> `name` (string) - Name of the graph <br> `data` (Object) - Graph metadata (optional) <br> `cancellationToken` (optional) - `AbortController` | `Promise<Graph>` | `PUT /v1.0/tenants/{tenantGuid}/graphs` |
| `readGraphs` | Retrieves all graphs. | `cancellationToken` (optional) - `AbortController` | `Promise<Graph[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs` |
| `searchGraphs` | Searches for graphs based on criteria. | `searchReq` (Object) - Search request with filters <br> `cancellationToken` (optional) - `AbortController` | `Promise<SearchResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/search` |
| `readGraph` | Retrieves a specific graph by GUID. | `guid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Graph>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{guid}` |
| `updateGraph` | Updates an existing graph. | `graph` (Object) - Graph object with GUID, name, metadata <br> `cancellationToken` (optional) - `AbortController` | `Promise<Graph>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{graph.GUID}` |
| `deleteGraph` | Deletes a graph by GUID. | `guid` (string) - Graph GUID <br> `force` (boolean) - Force recursive deletion of edges and nodes (optional) <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{guid}?force=true` |
| `exportGraphToGexf` | Exports a graph to GEXF format. | `guid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<string>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{guid}/export/gexf` |




### Node Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `nodeExists` | Checks if a node exists by GUID. | `graphGuid` (string) - Graph GUID <br> `guid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{guid}` |
| `createNodes` | Creates multiple nodes. | `graphGuid` (string) - Graph GUID <br> `nodes` (Array<Object>) - List of node objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<Array<Object>>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/bulk` |
| `createNode` | Creates a single node. | `node` (Object) - Node object with GUID, GraphGUID, name, data, CreatedUtc <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{node.GraphGUID}/nodes` |
| `readNodes` | Retrieves all nodes in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes` |
| `searchNodes` | Searches for nodes based on criteria. | `searchReq` (Object) - Search request object with GraphGUID, Ordering, Expr <br> `cancellationToken` (optional) - `AbortController` | `Promise<SearchResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/{searchReq.GraphGUID}/nodes/search` |
| `readNode` | Retrieves a specific node by GUID. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}` |
| `updateNode` | Updates an existing node. | `node` (Object) - Node object with GUID, GraphGUID, name, data, CreatedUtc <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{node.GraphGUID}/nodes/{node.GUID}` |
| `deleteNode` | Deletes a node by GUID. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}` |
| `deleteAllNodes` | Deletes all nodes in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/all` |
| `deleteNodes` | Deletes multiple nodes by GUIDs. | `graphGuid` (string) - Graph GUID <br> `nodeGuids` (Array<string>) - List of node GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/bulk` |


### Edges Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `edgeExists` | Checks if an edge exists by GUID. | `graphGuid` (string) - Graph GUID <br> `guid` (string) - Edge GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/{guid}` |
| `createEdges` | Creates multiple edges. | `graphGuid` (string) - The GUID of the graph <br> `edges` (Array<Object>) - List of edge objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<Array<Object>>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/bulk` |
| `createEdge` | Creates an edge. | `edge` (Object) - Edge object with GUID, GraphGUID, Name, From, To, Cost, CreatedUtc, Data <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{edge.GraphGUID}/edges` |
| `readEdges` | Retrieves all edges in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges` |
| `searchEdges` | Searches for edges based on criteria. | `searchReq` (Object) - Search request object containing GraphGUID, Ordering, Expr <br> `cancellationToken` (optional) - `AbortController` | `Promise<SearchResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/{searchReq.GraphGUID}/edges/search` |
| `readEdge` | Retrieves an edge by GUID. | `graphGuid` (string) - Graph GUID <br> `edgeGuid` (string) - Edge GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/{edgeGuid}` |
| `updateEdge` | Updates an edge. | `edge` (Object) - Edge object with GUID, GraphGUID, Name, From, To, Cost, CreatedUtc, Data <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{edge.GraphGUID}/edges/{edge.GUID}` |
| `deleteEdge` | Deletes an edge by GUID. | `graphGuid` (string) - Graph GUID <br> `edgeGuid` (string) - Edge GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/{edgeGuid}` |
| `deleteAllEdges` | Deletes all edges in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/all` |
| `deleteEdges` | Deletes multiple edges by GUIDs. | `graphGuid` (string) - Graph GUID <br> `edgeGuids` (Array<string>) - List of edge GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/bulk` |


### Route Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `getEdgesFromNode` | Retrieves edges from a given node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/edges/from` |
| `getEdgesToNode` | Retrieves edges to a given node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/edges/to` |
| `getEdgesBetween` | Retrieves edges from one node to another. | `graphGuid` (string) - Graph GUID <br> `fromNodeGuid` (string) - From node GUID <br> `toNodeGuid` (string) - To node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/between?from={fromNodeGuid}&to={toNodeGuid}` |
| `getAllNodeEdges` | Retrieves all edges to or from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/edges` |
| `getChildrenFromNode` | Retrieves child nodes from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/children` |
| `getParentsFromNode` | Retrieves parent nodes from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/parents` |
| `getNodeNeighbors` | Retrieves neighboring nodes from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/neighbors` |
| `getRoutes` | Retrieves routes between two nodes. | `graphGuid` (string) - Graph GUID <br> `fromNodeGuid` (string) - From node GUID <br> `toNodeGuid` (string) - To node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<RouteResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/routes` |




### Batch Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `batchExistence` | Executes a batch existence request for nodes and edges. | `graphGuid` (string) - The GUID of the graph <br> `existenceRequest` (Object) - The existence request containing:<br> &nbsp;&nbsp;• `Nodes` (Array<string>) - List of node GUIDs <br> &nbsp;&nbsp;• `Edges` (Array<string>) - List of edge GUIDs <br> &nbsp;&nbsp;• `EdgesBetween` (Array<EdgeBetween>) - List of edge connections <br> `cancellationToken` (optional) - `AbortController` | `Promise<Object>` - The existence result | `POST /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/existence` |



## Core Components

### Base Models

- `TenantMetaData`: Represents a tenant in the system
- `Graph`: Represents a graph container
- `Node`: Represents a node in a graph
- `Edge`: Represents a connection between nodes
- `RouteRequest`: Used for finding routes between nodes
- `RouteResult`: Contains route finding results
- `ExistenceRequest`: Used for checking the existence


## API Resource Operations

Please refer to demo/index.ts[demo/index.ts] for the usage of the API.

## Development

### Linking the project locally (for development and testing)

To use the library locally without publishing to a remote npm registry, first install the dependencies with the command:

```shell
npm install
```

Then, build the project with the command:

```shell
npm run build
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in local system's npm with the following command:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your litegraphdb from, and run:

```shell
npm link litegraphdb
```
#### Demo/Testing Environment
To streamline the process, you can use the following command to link the project locally and setup the demo environment to run the demo stored at `demo/index.ts`:

```shell
npm run demo:setup
```
and to run the demo, use the following command:

```shell
npm run demo
```

You can then import the SDK with either import or require based on the ES Module (esm) or CommonJS (cjs) project, as shown below:

```javascript
import { LiteGraphSdk } from 'litegraphdb';
//or
var { LiteGraphSdk } = require('litegraphdb');
```


### Setting up Pre-commit Hooks

The pre-commit hooks will run automatically on `git commit`. They help maintain:

- Code formatting (using ruff)
- Import sorting
- Code quality checks
- And other project-specific checks

### Running Tests

The project uses `jest` for running tests in isolated environments. Make sure you have jest installed, which should automatically be there if you have installed dependencies via `npm i` command:

```bash
# Run only the tests
npm run test

# Run tests with coverage report
npm run test:coverage

```


## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details

## Feedback and Issues

Have feedback or found an issue? Please file an issue in our GitHub repository.

## Version History

Please refer to [CHANGELOG.md](CHANGELOG.md) for a detailed version history.