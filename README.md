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
| `sdk.Tenant.readAll` | Retrieves a list of all tenants. | `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData[]>` - Array of tenants | `GET /v1.0/tenants` |
| `sdk.Tenant.read` | Retrieves a specific tenant by GUID. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData>` - The tenant | `GET /v1.0/tenants/{tenantGuid}` |
| `sdk.Tenant.create` | Creates a new tenant. | `tenant` (TenantMetaData) - The tenant object <br> `tenant.name` (string) - Name of the tenant <br> `tenant.Active` (boolean) - Active status <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData>` - Created tenant | `PUT /v1.0/tenants` |
| `sdk.Tenant.update` | Updates an existing tenant. | `tenant` (TenantMetaData) - The tenant object <br> `tenant.name` (string) - Name of the tenant <br> `tenant.Active` (boolean) - Active status <br> `guid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData>` - Updated tenant | `PUT /v1.0/tenants/{guid}` |
| `sdk.Tenant.delete` | Deletes a tenant by GUID. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}` |
| `sdk.Tenant.exists` | Checks if a tenant exists by GUID. | `tenantGuid` (string) - The GUID of the tenant <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}` |

### User Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.User.readAll` | Retrieves all users. | `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/users` |
| `sdk.User.read` | Retrieves a specific user by GUID. | `userGuid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata>` | `GET /v1.0/tenants/{tenantGuid}/users/{userGuid}` |
| `sdk.User.create` | Creates a new user. | `user` (Object) - User object with FirstName, LastName, Active, Email, Password <br> `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/users` |
| `sdk.User.exists` | Checks if a user exists by GUID. | `guid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/users/{guid}` |
| `sdk.User.update` | Updates an existing user. | `user` (Object) - User object with FirstName, LastName, Active, Email, Password <br> `guid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<UserMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/users/{guid}` |
| `sdk.User.delete` | Deletes a user by GUID. | `guid` (string) - User GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}/users/{guid}` |



### Authorization Operations


| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Authorization.generateToken` | Generates an authentication token. | `email` (string) - User's email <br> `password` (string) - User's password <br> `tenantId` (string) - Tenant ID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Token>` | `GET /v1.0/token` |
| `sdk.Authorization.getTokenDetails` | Fetches details about an authentication token. | `token` (string) - Authentication token <br> `cancellationToken` (optional) - `AbortController` | `Promise<Object>` | `GET /v1.0/token/details` |
| `sdk.Authorization.getTenantsForEmail` | Retrieves tenants associated with an email address. | `email` (string) - The email address to lookup tenants for. <br> `cancellationToken` (optional) - `AbortController` | `Promise<TenantMetaData[]>` | `GET /v1.0/token/tenants` |


### Credential Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Credential.readAll` | Retrieves all credentials. | `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/credentials` |
| `sdk.Credential.read` | Retrieves a specific credential by GUID. | `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata>` | `GET /v1.0/tenants/{tenantGuid}/credentials/{guid}` |
| `sdk.Credential.create` | Creates a new credential. | `credential` (Object) - Credential object with Name, BearerToken, Active <br> `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/credentials` |
| `sdk.Credential.update` | Updates an existing credential. | `credential` (Object) - Credential object with Name, BearerToken, Active <br> `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<CredentialMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/credentials/{guid}` |
| `sdk.Credential.delete` | Deletes a credential by GUID. | `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `DELETE /v1.0/tenants/{tenantGuid}/credentials/{guid}` |
| `sdk.Credential.exists` | Checks if a credential exists by GUID. | `guid` (string) - Credential GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/credentials/{guid}` |



### Label Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Label.readAll` | Retrieves all labels. | `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/labels` |
| `sdk.Label.read` | Retrieves a specific label by GUID. | `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata>` | `GET /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `sdk.Label.exists` | Checks if a label exists by GUID. | `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `sdk.Label.create` | Creates a new label. | `label` (Object) - Label object <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/labels` |
| `sdk.Label.createBulk` | Creates multiple labels. | `labels` (Array<Object>) - List of label objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata[]>` | `PUT /v1.0/tenants/{tenantGuid}/labels/bulk` |
| `sdk.Label.update` | Updates an existing label. | `label` (Object) - Label object <br> `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<LabelMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `sdk.Label.delete` | Deletes a label by GUID. | `guid` (string) - Label GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/labels/{guid}` |
| `sdk.Label.deleteBulk` | Deletes multiple labels. | `guids` (Array<string>) - List of label GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/labels/bulk` |


### Tag Operations


| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Tag.readAll` | Retrieves all tags. | `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData[]>` | `GET /v1.0/tenants/{tenantGuid}/tags` |
| `sdk.Tag.read` | Retrieves a specific tag by GUID. | `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData>` | `GET /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `sdk.Tag.exists` | Checks if a tag exists by GUID. | `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `sdk.Tag.create` | Creates a new tag. | `tag` (Object) - Tag object <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData>` | `PUT /v1.0/tenants/{tenantGuid}/tags` |
| `sdk.Tag.createBulk` | Creates multiple tags. | `tags` (Array<Object>) - List of tag objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData[]>` | `PUT /v1.0/tenants/{tenantGuid}/tags/bulk` |
| `sdk.Tag.update` | Updates an existing tag. | `tag` (Object) - Tag object <br> `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<TagMetaData>` | `PUT /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `sdk.Tag.delete` | Deletes a tag by GUID. | `guid` (string) - Tag GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/tags/{guid}` |
| `sdk.Tag.deleteBulk` | Deletes multiple tags. | `guids` (Array<string>) - List of tag GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/tags/bulk` |

### Vector Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Vector.readAll` | Retrieves all vectors. | `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata[]>` | `GET /v1.0/tenants/{tenantGuid}/vectors` |
| `sdk.Vector.read` | Retrieves a specific vector by GUID. | `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata>` | `GET /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `sdk.Vector.exists` | Checks if a vector exists by GUID. | `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `sdk.Vector.create` | Creates a new vector. | `vector` (Object) - Vector object <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/vectors` |
| `sdk.Vector.createBulk` | Creates multiple vectors. | `vectors` (Array<Object>) - List of vector objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata[]>` | `PUT /v1.0/tenants/{tenantGuid}/vectors/bulk` |
| `sdk.Vector.update` | Updates an existing vector. | `vector` (Object) - Vector object <br> `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorMetadata>` | `PUT /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `sdk.Vector.delete` | Deletes a vector by GUID. | `guid` (string) - Vector GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/vectors/{guid}` |
| `sdk.Vector.deleteBulk` | Deletes multiple vectors. | `guids` (Array<string>) - List of vector GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/vectors/bulk` |
| `sdk.Vector.search` | Searches vectors based on criteria. | `searchReq` (Object) - Search request with GraphGUID, Domain, SearchType, Labels <br> `cancellationToken` (optional) - `AbortController` | `Promise<VectorSearchResult>` | `POST /v1.0/tenants/{tenantGuid}/vectors` |


### Graph Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Graph.exists` | Checks if a graph exists by GUID. | `guid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/graphs/{guid}` |
| `sdk.Graph.create` | Creates a new graph. | `guid` (string) - Graph GUID <br> `name` (string) - Name of the graph <br> `data` (Object) - Graph metadata (optional) <br> `cancellationToken` (optional) - `AbortController` | `Promise<Graph>` | `PUT /v1.0/tenants/{tenantGuid}/graphs` |
| `sdk.Graph.readAll` | Retrieves all graphs. | `cancellationToken` (optional) - `AbortController` | `Promise<Graph[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs` |
| `sdk.Graph.search` | Searches for graphs based on criteria. | `searchReq` (Object) - Search request with filters <br> `cancellationToken` (optional) - `AbortController` | `Promise<SearchResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/search` |
| `sdk.Graph.read` | Retrieves a specific graph by GUID. | `guid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Graph>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{guid}` |
| `sdk.Graph.update` | Updates an existing graph. | `graph` (Object) - Graph object with GUID, name, metadata <br> `cancellationToken` (optional) - `AbortController` | `Promise<Graph>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{graph.GUID}` |
| `sdk.Graph.delete` | Deletes a graph by GUID. | `guid` (string) - Graph GUID <br> `force` (boolean) - Force recursive deletion of edges and nodes (optional) <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{guid}?force=true` |
| `sdk.Graph.exportToGexf` | Exports a graph to GEXF format. | `guid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<string>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{guid}/export/gexf` |




### Node Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Node.exists` | Checks if a node exists by GUID. | `graphGuid` (string) - Graph GUID <br> `guid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{guid}` |
| `sdk.Node.createBulk` | Creates multiple nodes. | `graphGuid` (string) - Graph GUID <br> `nodes` (Array<Object>) - List of node objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<Array<Object>>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/bulk` |
| `sdk.Node.create` | Creates a single node. | `node` (Object) - Node object with GUID, GraphGUID, name, data, CreatedUtc <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{node.GraphGUID}/nodes` |
| `sdk.Node.readAll` | Retrieves all nodes in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes` |
| `sdk.Node.search` | Searches for nodes based on criteria. | `searchReq` (Object) - Search request object with GraphGUID, Ordering, Expr <br> `cancellationToken` (optional) - `AbortController` | `Promise<SearchResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/{searchReq.GraphGUID}/nodes/search` |
| `sdk.Node.read` | Retrieves a specific node by GUID. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}` |
| `sdk.Node.update` | Updates an existing node. | `node` (Object) - Node object with GUID, GraphGUID, name, data, CreatedUtc <br> `cancellationToken` (optional) - `AbortController` | `Promise<Node>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{node.GraphGUID}/nodes/{node.GUID}` |
| `sdk.Node.delete` | Deletes a node by GUID. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}` |
| `sdk.Node.deleteAll` | Deletes all nodes in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/all` |
| `sdk.Node.deleteBulk` | Deletes multiple nodes by GUIDs. | `graphGuid` (string) - Graph GUID <br> `nodeGuids` (Array<string>) - List of node GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/bulk` |


### Edges Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Edge.exists` | Checks if an edge exists by GUID. | `graphGuid` (string) - Graph GUID <br> `guid` (string) - Edge GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<boolean>` | `HEAD /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/{guid}` |
| `sdk.Edge.createBulk` | Creates multiple edges. | `graphGuid` (string) - The GUID of the graph <br> `edges` (Array<Object>) - List of edge objects <br> `cancellationToken` (optional) - `AbortController` | `Promise<Array<Object>>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/bulk` |
| `sdk.Edge.create` | Creates an edge. | `edge` (Object) - Edge object with GUID, GraphGUID, Name, From, To, Cost, CreatedUtc, Data <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{edge.GraphGUID}/edges` |
| `sdk.Edge.readAll` | Retrieves all edges in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges` |
| `sdk.Edge.search` | Searches for edges based on criteria. | `searchReq` (Object) - Search request object containing GraphGUID, Ordering, Expr <br> `cancellationToken` (optional) - `AbortController` | `Promise<SearchResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/{searchReq.GraphGUID}/edges/search` |
| `sdk.Edge.read` | Retrieves an edge by GUID. | `graphGuid` (string) - Graph GUID <br> `edgeGuid` (string) - Edge GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/{edgeGuid}` |
| `sdk.Edge.update` | Updates an edge. | `edge` (Object) - Edge object with GUID, GraphGUID, Name, From, To, Cost, CreatedUtc, Data <br> `cancellationToken` (optional) - `AbortController` | `Promise<Edge>` | `PUT /v1.0/tenants/{tenantGuid}/graphs/{edge.GraphGUID}/edges/{edge.GUID}` |
| `sdk.Edge.delete` | Deletes an edge by GUID. | `graphGuid` (string) - Graph GUID <br> `edgeGuid` (string) - Edge GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/{edgeGuid}` |
| `sdk.Edge.deleteAll` | Deletes all edges in a graph. | `graphGuid` (string) - Graph GUID <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/all` |
| `sdk.Edge.deleteBulk` | Deletes multiple edges by GUIDs. | `graphGuid` (string) - Graph GUID <br> `edgeGuids` (Array<string>) - List of edge GUIDs <br> `cancellationToken` (optional) - `AbortController` | `Promise<void>` | `DELETE /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/bulk` |


### Route Operations

| Method | Description | Parameters | Returns | Endpoint |
|--------|-------------|------------|---------|----------|
| `sdk.Route.getEdgesFromNode` | Retrieves edges from a given node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/edges/from` |
| `sdk.Route.getEdgesToNode` | Retrieves edges to a given node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/edges/to` |
| `sdk.Route.getEdgesBetween` | Retrieves edges from one node to another. | `graphGuid` (string) - Graph GUID <br> `fromNodeGuid` (string) - From node GUID <br> `toNodeGuid` (string) - To node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/edges/between?from={fromNodeGuid}&to={toNodeGuid}` |
| `sdk.Route.getAllNodeEdges` | Retrieves all edges to or from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Edge[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/edges` |
| `sdk.Route.getChildrenFromNode` | Retrieves child nodes from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/children` |
| `sdk.Route.getParentsFromNode` | Retrieves parent nodes from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/parents` |
| `sdk.Route.getNodeNeighbors` | Retrieves neighboring nodes from a node. | `graphGuid` (string) - Graph GUID <br> `nodeGuid` (string) - Node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<Node[]>` | `GET /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/nodes/{nodeGuid}/neighbors` |
| `sdk.Route.getRoutes` | Retrieves routes between two nodes. | `graphGuid` (string) - Graph GUID <br> `fromNodeGuid` (string) - From node GUID <br> `toNodeGuid` (string) - To node GUID <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<RouteResult>` | `POST /v1.0/tenants/{tenantGuid}/graphs/{graphGuid}/routes` |
| `sdk.Backup.readAll` | Retrieves all backups. | `cancellationToken` (optional) - `AbortSignal` | `Promise<BackupMetaData[]>` | `GET /v1.0/backups` |
| `sdk.Backup.read` | Retrieves a specific backup with data. | `filename` (string) - Backup filename <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<BackupMetaData>` | `GET /v1.0/backups/{filename}` |
| `sdk.Backup.create` | Creates a new backup. | `backup` (Object) - Backup object with Filename, CreatedUtc, Size <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<BackupMetaData>` | `PUT /v1.0/backups` |
| `sdk.Backup.delete` | Deletes a backup. | `filename` (string) - Backup filename <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<void>` | `DELETE /v1.0/backups/{filename}` |
| `sdk.Backup.exists` | Checks if a backup exists. | `filename` (string) - Backup filename <br> `cancellationToken` (optional) - `AbortSignal` | `Promise<boolean>` | `HEAD /v1.0/backups/{filename}` |


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