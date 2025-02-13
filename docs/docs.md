## Members

<dl>
<dt><a href="#tenantGuid">tenantGuid</a> ⇒ <code>string</code></dt>
<dd><p>Getter for the tenant GUID.</p>
</dd>
<dt><a href="#tenantGuid">tenantGuid</a></dt>
<dd><p>Setter for the tenant GUID.</p>
</dd>
<dt><a href="#accessKey">accessKey</a> ⇒ <code>string</code></dt>
<dd><p>Getter for the access key.</p>
</dd>
<dt><a href="#accessKey">accessKey</a></dt>
<dd><p>Setter for the access key.</p>
</dd>
<dt><a href="#accessToken">accessToken</a> ⇒ <code>string</code></dt>
<dd><p>Getter for the access token.</p>
</dd>
<dt><a href="#accessToken">accessToken</a></dt>
<dd><p>Setter for the access token.</p>
</dd>
<dt><a href="#header">header</a> ⇒ <code>string</code></dt>
<dd><p>Getter for the request header prefix.</p>
</dd>
<dt><a href="#header">header</a></dt>
<dd><p>Setter for the request header prefix.</p>
</dd>
<dt><a href="#endpoint">endpoint</a> ⇒ <code>string</code></dt>
<dd><p>Getter for the API endpoint.</p>
</dd>
<dt><a href="#endpoint">endpoint</a></dt>
<dd><p>Setter for the API endpoint.</p>
</dd>
<dt><a href="#timeoutMs">timeoutMs</a> ⇒ <code>number</code></dt>
<dd><p>Getter for the timeout in milliseconds.</p>
</dd>
<dt><a href="#timeoutMs">timeoutMs</a></dt>
<dd><p>Setter for the timeout in milliseconds.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#graphExists">graphExists(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Check if a graph exists by GUID.</p>
</dd>
<dt><a href="#createGraph">createGraph(graph, [cancellationToken])</a> ⇒ <code>Promise.&lt;Graph&gt;</code></dt>
<dd><p>Create a graph.</p>
</dd>
<dt><a href="#readGraphs">readGraphs([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Graph&gt;&gt;</code></dt>
<dd><p>Read all graphs.</p>
</dd>
<dt><a href="#searchGraphs">searchGraphs(searchReq, [cancellationToken])</a> ⇒ <code>Promise.&lt;SearchResult&gt;</code></dt>
<dd><p>Search graphs.</p>
</dd>
<dt><a href="#readGraph">readGraph(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Graph&gt;</code></dt>
<dd><p>Read a specific graph.</p>
</dd>
<dt><a href="#updateGraph">updateGraph(graph, [cancellationToken])</a> ⇒ <code>Promise.&lt;Graph&gt;</code></dt>
<dd><p>Update a graph.</p>
</dd>
<dt><a href="#deleteGraph">deleteGraph(guid, [cancellationToken], force)</a></dt>
<dd><p>Delete a graph.</p>
</dd>
<dt><a href="#exportGraphToGexf">exportGraphToGexf(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Export a graph to GEXF format.</p>
</dd>
<dt><a href="#batchExistence">batchExistence(graphGuid, existenceRequest, [cancellationToken])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Execute a batch existence request.</p>
</dd>
<dt><a href="#nodeExists">nodeExists(graphGuid, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Check if a node exists by GUID.</p>
</dd>
<dt><a href="#createNodes">createNodes(graphGuid, nodes, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Create multiple nodes.</p>
</dd>
<dt><a href="#createNode">createNode(node, [cancellationToken])</a> ⇒ <code>Promise.&lt;Node&gt;</code></dt>
<dd><p>Create a node.</p>
</dd>
<dt><a href="#readNodes">readNodes(graphGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code></dt>
<dd><p>Read nodes for a specific graph.</p>
</dd>
<dt><a href="#searchNodes">searchNodes(searchReq, graphGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;SearchResult&gt;</code></dt>
<dd><p>Search nodes.</p>
</dd>
<dt><a href="#readNode">readNode(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Node&gt;</code></dt>
<dd><p>Read a specific node.</p>
</dd>
<dt><a href="#updateNode">updateNode(node, [cancellationToken])</a> ⇒ <code>Promise.&lt;Node&gt;</code></dt>
<dd><p>Update a node.</p>
</dd>
<dt><a href="#deleteNode">deleteNode(graphGuid, nodeGuid, [cancellationToken])</a></dt>
<dd><p>Delete a node.</p>
</dd>
<dt><a href="#deleteNodes">deleteNodes(graphGuid, [cancellationToken])</a></dt>
<dd><p>Delete all nodes within a graph.</p>
</dd>
<dt><a href="#deleteMultipleNodes">deleteMultipleNodes(graphGuid, nodeGuids, [cancellationToken])</a></dt>
<dd><p>Delete multiple nodes within a graph.</p>
</dd>
<dt><a href="#edgeExists">edgeExists(graphGuid, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Check if an edge exists by GUID.</p>
</dd>
<dt><a href="#createEdges">createEdges(graphGuid, edges, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Create multiple edges.</p>
</dd>
<dt><a href="#createEdge">createEdge(edge, [cancellationToken])</a> ⇒ <code>Promise.&lt;Edge&gt;</code></dt>
<dd><p>Create an edge.</p>
</dd>
<dt><a href="#readEdges">readEdges(graphGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code></dt>
<dd><p>Read edges.</p>
</dd>
<dt><a href="#searchEdges">searchEdges(graphGuid, searchReq, [cancellationToken])</a> ⇒ <code>Promise.&lt;SearchResult&gt;</code></dt>
<dd><p>Search edges.</p>
</dd>
<dt><a href="#readEdge">readEdge(graphGuid, edgeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Edge&gt;</code></dt>
<dd><p>Read an edge.</p>
</dd>
<dt><a href="#updateEdge">updateEdge(edge, [cancellationToken])</a> ⇒ <code>Promise.&lt;Edge&gt;</code></dt>
<dd><p>Update an edge.</p>
</dd>
<dt><a href="#deleteEdge">deleteEdge(graphGuid, edgeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Delete an edge.</p>
</dd>
<dt><a href="#deleteEdges">deleteEdges(graphGuid, [cancellationToken])</a></dt>
<dd><p>Delete all edges within a graph.</p>
</dd>
<dt><a href="#deleteMultipleEdges">deleteMultipleEdges(graphGuid, edgeGuids, [cancellationToken])</a></dt>
<dd><p>Delete multiple edges within a graph.</p>
</dd>
<dt><a href="#getEdgesFromNode">getEdgesFromNode(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code></dt>
<dd><p>Get edges from a node.</p>
</dd>
<dt><a href="#getEdgesToNode">getEdgesToNode(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code></dt>
<dd><p>Get edges to a node.</p>
</dd>
<dt><a href="#getEdgesBetween">getEdgesBetween(graphGuid, fromNodeGuid, toNodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code></dt>
<dd><p>Get edges from a given node to a given node.</p>
</dd>
<dt><a href="#getAllNodeEdges">getAllNodeEdges(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code></dt>
<dd><p>Get all edges to or from a node.</p>
</dd>
<dt><a href="#getChildrenFromNode">getChildrenFromNode(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code></dt>
<dd><p>Get child nodes from a node.</p>
</dd>
<dt><a href="#getParentsFromNode">getParentsFromNode(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code></dt>
<dd><p>Get parent nodes from a node.</p>
</dd>
<dt><a href="#getNodeNeighbors">getNodeNeighbors(graphGuid, nodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code></dt>
<dd><p>Get neighboring nodes from a node.</p>
</dd>
<dt><a href="#getRoutes">getRoutes(graphGuid, fromNodeGuid, toNodeGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;RouteResult&gt;</code></dt>
<dd><p>Get routes between two nodes.</p>
</dd>
<dt><a href="#readTenants">readTenants([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;TenantMetaData&gt;&gt;</code></dt>
<dd><p>Read all tenants.</p>
</dd>
<dt><a href="#readTenant">readTenant(tenantGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;TenantMetaData&gt;</code></dt>
<dd><p>Read a tenant.</p>
</dd>
<dt><a href="#createTenant">createTenant(tenant, [cancellationToken])</a> ⇒ <code>Promise.&lt;TenantMetaData&gt;</code></dt>
<dd><p>Create a tenant.</p>
</dd>
<dt><a href="#updateTenant">updateTenant(tenant, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;TenantMetaData&gt;</code></dt>
<dd><p>Update a tenant.</p>
</dd>
<dt><a href="#deleteTenant">deleteTenant(tenantGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Boolean&gt;</code></dt>
<dd><p>Delete a tenant.</p>
</dd>
<dt><a href="#tenantExists">tenantExists(tenantGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Tenant exists.</p>
</dd>
<dt><a href="#tenantDeleteForce">tenantDeleteForce(tenantGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Boolean&gt;</code></dt>
<dd><p>Tenant delete force.</p>
</dd>
<dt><a href="#readAllUsers">readAllUsers([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;UserMetadata&gt;&gt;</code></dt>
<dd><p>Read all users.</p>
</dd>
<dt><a href="#readUser">readUser(userGuid, [cancellationToken])</a> ⇒ <code>Promise.&lt;UserMetadata&gt;</code></dt>
<dd><p>Read a user.</p>
</dd>
<dt><a href="#createUser">createUser(user, [cancellationToken])</a> ⇒ <code>Promise.&lt;UserMetadata&gt;</code></dt>
<dd><p>Create a user.</p>
</dd>
<dt><a href="#existsUser">existsUser(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>User exists.</p>
</dd>
<dt><a href="#updateUser">updateUser(user, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;UserMetadata&gt;</code></dt>
<dd><p>Update a user.</p>
</dd>
<dt><a href="#deleteUser">deleteUser(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Boolean&gt;</code></dt>
<dd><p>Delete a user.</p>
</dd>
<dt><a href="#readAllCredentials">readAllCredentials([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;CredentialMetadata&gt;&gt;</code></dt>
<dd><p>Read all credentials.</p>
</dd>
<dt><a href="#readCredential">readCredential(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;CredentialMetadata&gt;</code></dt>
<dd><p>Read a credential.</p>
</dd>
<dt><a href="#createCredential">createCredential(credential, [cancellationToken])</a> ⇒ <code>Promise.&lt;CredentialMetadata&gt;</code></dt>
<dd><p>Create a credential.</p>
</dd>
<dt><a href="#updateCredential">updateCredential(credential, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;CredentialMetadata&gt;</code></dt>
<dd><p>Update a credential.</p>
</dd>
<dt><a href="#deleteCredential">deleteCredential(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;Boolean&gt;</code></dt>
<dd><p>Delete a credential.</p>
</dd>
<dt><a href="#existsCredential">existsCredential(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Credential exists.</p>
</dd>
<dt><a href="#readAllTags">readAllTags([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;TagMetaData&gt;&gt;</code></dt>
<dd><p>Read all tags.</p>
</dd>
<dt><a href="#readTag">readTag(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;TagMetaData&gt;</code></dt>
<dd><p>Read a tag.</p>
</dd>
<dt><a href="#existsTag">existsTag(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Tag exists.</p>
</dd>
<dt><a href="#createTag">createTag(tag, [cancellationToken])</a> ⇒ <code>Promise.&lt;TagMetaData&gt;</code></dt>
<dd><p>Create a tag.</p>
</dd>
<dt><a href="#updateTag">updateTag(tag, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;TagMetaData&gt;</code></dt>
<dd><p>Update a tag.</p>
</dd>
<dt><a href="#deleteTag">deleteTag(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Delete a tag.</p>
</dd>
<dt><a href="#readAllLabels">readAllLabels([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;LabelMetadata&gt;&gt;</code></dt>
<dd><p>Read all labels.</p>
</dd>
<dt><a href="#readLabel">readLabel(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;LabelMetadata&gt;</code></dt>
<dd><p>Read a label.</p>
</dd>
<dt><a href="#existsLabel">existsLabel(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Label exists.</p>
</dd>
<dt><a href="#createLabel">createLabel(label, [cancellationToken])</a> ⇒ <code>Promise.&lt;LabelMetadata&gt;</code></dt>
<dd><p>Create a label.</p>
</dd>
<dt><a href="#updateLabel">updateLabel(label, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;LabelMetadata&gt;</code></dt>
<dd><p>Update a label.</p>
</dd>
<dt><a href="#deleteLabel">deleteLabel(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Delete a label.</p>
</dd>
<dt><a href="#readAllVectors">readAllVectors([cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;VectorMetadata&gt;&gt;</code></dt>
<dd><p>Read all vectors.</p>
</dd>
<dt><a href="#readVector">readVector(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;VectorMetadata&gt;</code></dt>
<dd><p>Read a vector.</p>
</dd>
<dt><a href="#existsVector">existsVector(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Vector exists.</p>
</dd>
<dt><a href="#createVector">createVector(vector, [cancellationToken])</a> ⇒ <code>Promise.&lt;VectorMetadata&gt;</code></dt>
<dd><p>Create a vector.</p>
</dd>
<dt><a href="#updateVector">updateVector(vector, guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;VectorMetadata&gt;</code></dt>
<dd><p>Update a vector.</p>
</dd>
<dt><a href="#deleteVector">deleteVector(guid, [cancellationToken])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Delete a vector.</p>
</dd>
<dt><a href="#searchVectors">searchVectors(searchReq, [cancellationToken])</a> ⇒ <code>Promise.&lt;VectorSearchResult&gt;</code></dt>
<dd><p>Search Vectors.</p>
</dd>
<dt><a href="#generateToken">generateToken(email, tenantId, password, [cancellationToken])</a> ⇒ <code>Promise.&lt;Token&gt;</code></dt>
<dd><p>Generate an authentication token.</p>
</dd>
<dt><a href="#getTokenDetails">getTokenDetails(token, [cancellationToken])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetch details about an authentication token.</p>
</dd>
<dt><a href="#getTenantsForEmail">getTenantsForEmail(email, [cancellationToken])</a> ⇒ <code>Promise.&lt;Array.&lt;TenantMetaData&gt;&gt;</code></dt>
<dd><p>Get tenants associated with an email address.</p>
</dd>
<dt><a href="#log">log(sev, msg)</a></dt>
<dd><p>Logs a message with a severity level.</p>
</dd>
<dt><a href="#validateConnectivity">validateConnectivity([cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Validates API connectivity using a HEAD request.</p>
</dd>
<dt><a href="#putCreate">putCreate(url, obj, model, [cancellationToken])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Sends a PUT request to create an object at a given URL.</p>
</dd>
<dt><a href="#head">head(url, [cancellationToken])</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Checks if an object exists at a given URL using a HEAD request.</p>
</dd>
<dt><a href="#get">get(url, model, [cancellationToken], [headers])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Retrieves an object from a given URL using a GET request.</p>
</dd>
<dt><a href="#getDataInBytes">getDataInBytes(url, [cancellationToken])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Retrieves raw data from a given URL using a GET request.</p>
</dd>
<dt><a href="#getMany">getMany(url, model, [cancellationToken], [headers])</a> ⇒ <code>Promise.&lt;Array&gt;</code></dt>
<dd><p>Retrieves a list of objects from a given URL using a GET request.</p>
</dd>
<dt><a href="#putUpdate">putUpdate(url, obj, model, [cancellationToken])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Sends a PUT request to update an object at a given URL.</p>
</dd>
<dt><a href="#delete">delete(url, [cancellationToken])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Sends a DELETE request to remove an object at a given URL.</p>
</dd>
<dt><a href="#post">post(url, data, model, [cancellationToken])</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Submits data using a POST request to a given URL.</p>
</dd>
<dt><a href="#deleteMany">deleteMany(url, obj, [cancellationToken])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Sends a DELETE request to remove an object at a given URL.</p>
</dd>
<dt><a href="#postBatch">postBatch(url, obj, model, [cancellationToken])</a> ⇒ <code>Promise.&lt;(Object|null)&gt;</code></dt>
<dd><p>Submits a POST request.</p>
</dd>
</dl>

<a name="tenantGuid"></a>

## tenantGuid ⇒ <code>string</code>
Getter for the tenant GUID.

**Kind**: global variable  
**Returns**: <code>string</code> - The tenant GUID.  
<a name="tenantGuid"></a>

## tenantGuid
Setter for the tenant GUID.

**Kind**: global variable  
**Throws**:

- <code>Error</code> Throws an error if the tenant GUID is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The tenant GUID. |

<a name="accessKey"></a>

## accessKey ⇒ <code>string</code>
Getter for the access key.

**Kind**: global variable  
**Returns**: <code>string</code> - The access key.  
<a name="accessKey"></a>

## accessKey
Setter for the access key.

**Kind**: global variable  
**Throws**:

- <code>Error</code> Throws an error if the access key is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The access key. |

<a name="accessToken"></a>

## accessToken ⇒ <code>string</code>
Getter for the access token.

**Kind**: global variable  
**Returns**: <code>string</code> - The access token.  
<a name="accessToken"></a>

## accessToken
Setter for the access token.

**Kind**: global variable  
**Throws**:

- <code>Error</code> Throws an error if the access token is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The access token. |

<a name="header"></a>

## header ⇒ <code>string</code>
Getter for the request header prefix.

**Kind**: global variable  
**Returns**: <code>string</code> - The header prefix.  
<a name="header"></a>

## header
Setter for the request header prefix.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The header prefix. |

<a name="endpoint"></a>

## endpoint ⇒ <code>string</code>
Getter for the API endpoint.

**Kind**: global variable  
**Returns**: <code>string</code> - The endpoint URL.  
<a name="endpoint"></a>

## endpoint
Setter for the API endpoint.

**Kind**: global variable  
**Throws**:

- <code>Error</code> Throws an error if the endpoint is null or empty.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The endpoint URL. |

<a name="timeoutMs"></a>

## timeoutMs ⇒ <code>number</code>
Getter for the timeout in milliseconds.

**Kind**: global variable  
**Returns**: <code>number</code> - The timeout in milliseconds.  
<a name="timeoutMs"></a>

## timeoutMs
Setter for the timeout in milliseconds.

**Kind**: global variable  
**Throws**:

- <code>Error</code> Throws an error if the timeout is less than 1.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Timeout value in milliseconds. |

<a name="graphExists"></a>

## graphExists(guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a graph exists by GUID.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - True if the graph exists.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createGraph"></a>

## createGraph(graph, [cancellationToken]) ⇒ <code>Promise.&lt;Graph&gt;</code>
Create a graph.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Graph&gt;</code> - - The created graph.  

| Param | Type | Description |
| --- | --- | --- |
| graph | <code>Object</code> | Information about the graph. |
| graph.GUID | <code>string</code> | Globally unique identifier (automatically generated if not provided). |
| graph.Name | <code>string</code> | Name of the graph. |
| graph.CreatedUtc | <code>Date</code> | Creation timestamp in UTC (defaults to now). |
| graph.Data | <code>Object</code> | Object data associated with the graph (default is null). |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readGraphs"></a>

## readGraphs([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Graph&gt;&gt;</code>
Read all graphs.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Graph&gt;&gt;</code> - - An array of graphs.  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="searchGraphs"></a>

## searchGraphs(searchReq, [cancellationToken]) ⇒ <code>Promise.&lt;SearchResult&gt;</code>
Search graphs.

**Kind**: global function  
**Returns**: <code>Promise.&lt;SearchResult&gt;</code> - - The search result.  

| Param | Type | Description |
| --- | --- | --- |
| searchReq | <code>Object</code> | Information about the search request. |
| searchReq.GraphGUID | <code>string</code> | Globally unique identifier for the graph (defaults to an empty GUID). |
| searchReq.Ordering | <code>string</code> | Ordering of the search results (default is CreatedDescending). |
| searchReq.Expr | <code>Object</code> | Expression used for the search (default is null). |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readGraph"></a>

## readGraph(guid, [cancellationToken]) ⇒ <code>Promise.&lt;Graph&gt;</code>
Read a specific graph.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Graph&gt;</code> - - The requested graph.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateGraph"></a>

## updateGraph(graph, [cancellationToken]) ⇒ <code>Promise.&lt;Graph&gt;</code>
Update a graph.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Graph&gt;</code> - - The updated graph.  

| Param | Type | Description |
| --- | --- | --- |
| graph | <code>Object</code> | Information about the graph. |
| graph.GUID | <code>string</code> | Globally unique identifier (automatically generated if not provided). |
| graph.name | <code>string</code> | Name of the graph. |
| graph.CreatedUtc | <code>Date</code> | Creation timestamp in UTC (defaults to now). |
| graph.data | <code>Object</code> | Object data associated with the graph (default is null). |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteGraph"></a>

## deleteGraph(guid, [cancellationToken], force)
Delete a graph.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |
| force | <code>boolean</code> | Force recursive deletion of edges and nodes. |

<a name="exportGraphToGexf"></a>

## exportGraphToGexf(guid, [cancellationToken]) ⇒ <code>Promise.&lt;string&gt;</code>
Export a graph to GEXF format.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - The GEXF XML data.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="batchExistence"></a>

## batchExistence(graphGuid, existenceRequest, [cancellationToken]) ⇒ <code>Promise.&lt;Object&gt;</code>
Execute a batch existence request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The existence result.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| existenceRequest | <code>Object</code> | Optional initial data for the existence request. |
| existenceRequest.Nodes | <code>Array.&lt;string&gt;</code> | Array of node GUIDs. |
| existenceRequest.Edges | <code>Array.&lt;string&gt;</code> | Array of edge GUIDs. |
| existenceRequest.EdgesBetween | <code>Array.&lt;EdgeBetween&gt;</code> | Array of EdgeBetween instances. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="nodeExists"></a>

## nodeExists(graphGuid, guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if a node exists by GUID.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - True if the node exists.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| guid | <code>string</code> | The GUID of the node. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createNodes"></a>

## createNodes(graphGuid, nodes, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Create multiple nodes.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - - The list of created nodes.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| nodes | <code>Array.&lt;Object&gt;</code> | List of node objects. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createNode"></a>

## createNode(node, [cancellationToken]) ⇒ <code>Promise.&lt;Node&gt;</code>
Create a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Node&gt;</code> - - The created node.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Information about the node. |
| node.GUID | <code>string</code> | Globally unique identifier (automatically generated if not provided). |
| node.GraphGUID | <code>string</code> | Globally unique identifier for the graph (automatically generated if not provided). |
| node.name | <code>string</code> | Name of the node. |
| node.data | <code>Object</code> | Object data associated with the node (default is null). |
| node.CreatedUtc | <code>Date</code> | Creation timestamp in UTC (defaults to now). |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readNodes"></a>

## readNodes(graphGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code>
Read nodes for a specific graph.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code> - - An array of nodes.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="searchNodes"></a>

## searchNodes(searchReq, graphGuid, [cancellationToken]) ⇒ <code>Promise.&lt;SearchResult&gt;</code>
Search nodes.

**Kind**: global function  
**Returns**: <code>Promise.&lt;SearchResult&gt;</code> - - The search result.  

| Param | Type | Description |
| --- | --- | --- |
| searchReq | <code>Object</code> | Information about the search request. |
| searchReq.GraphGUID | <code>string</code> | Globally unique identifier for the graph (defaults to an empty GUID). |
| searchReq.Ordering | <code>string</code> | Ordering of the search results (default is CreatedDescending). |
| searchReq.Expr | <code>Object</code> | Expression used for the search (default is null). |
| graphGuid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readNode"></a>

## readNode(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Node&gt;</code>
Read a specific node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Node&gt;</code> - - The requested node.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| nodeGuid | <code>string</code> | The GUID of the node. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateNode"></a>

## updateNode(node, [cancellationToken]) ⇒ <code>Promise.&lt;Node&gt;</code>
Update a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Node&gt;</code> - - The updated node.  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | Information about the node. |
| node.GUID | <code>string</code> | Globally unique identifier (automatically generated if not provided). |
| node.GraphGUID | <code>string</code> | Globally unique identifier for the graph (automatically generated if not provided). |
| node.name | <code>string</code> | Name of the node. |
| node.data | <code>Object</code> | Object data associated with the node (default is null). |
| node.CreatedUtc | <code>Date</code> | Creation timestamp in UTC (defaults to now). |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteNode"></a>

## deleteNode(graphGuid, nodeGuid, [cancellationToken])
Delete a node.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| nodeGuid | <code>string</code> | The GUID of the node. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteNodes"></a>

## deleteNodes(graphGuid, [cancellationToken])
Delete all nodes within a graph.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteMultipleNodes"></a>

## deleteMultipleNodes(graphGuid, nodeGuids, [cancellationToken])
Delete multiple nodes within a graph.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| nodeGuids | <code>Array.&lt;string&gt;</code> | The list of node GUIDs to delete. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="edgeExists"></a>

## edgeExists(graphGuid, guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if an edge exists by GUID.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - True if exists.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| guid | <code>string</code> | Edge GUID. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createEdges"></a>

## createEdges(graphGuid, edges, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Create multiple edges.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - - The list of created edges.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| edges | <code>Array.&lt;Object&gt;</code> | List of edge objects. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createEdge"></a>

## createEdge(edge, [cancellationToken]) ⇒ <code>Promise.&lt;Edge&gt;</code>
Create an edge.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Edge&gt;</code> - - The created edge.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| edge | <code>Object</code> |  | Information about the edge. |
| [edge.GUID] | <code>string</code> |  | Globally unique identifier for the edge (automatically generated if not provided). |
| [edge.GraphGUID] | <code>string</code> |  | Globally unique identifier for the graph (automatically generated if not provided). |
| [edge.Name] | <code>string</code> |  | Name of the edge. |
| [edge.From] | <code>string</code> |  | Globally unique identifier of the from node. |
| [edge.To] | <code>string</code> |  | Globally unique identifier of the to node. |
| [edge.Cost] | <code>number</code> | <code>0</code> | Cost associated with the edge (default is 0). |
| [edge.CreatedUtc] | <code>Date</code> |  | Creation timestamp in UTC (defaults to current UTC time). |
| [edge.Data] | <code>Object</code> |  | Additional object data associated with the edge (default is null). |
| [cancellationToken] | <code>AbortController</code> |  | Optional cancellation token for cancelling the request. |

<a name="readEdges"></a>

## readEdges(graphGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code>
Read edges.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code> - - List of edges.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="searchEdges"></a>

## searchEdges(graphGuid, searchReq, [cancellationToken]) ⇒ <code>Promise.&lt;SearchResult&gt;</code>
Search edges.

**Kind**: global function  
**Returns**: <code>Promise.&lt;SearchResult&gt;</code> - - The search result.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| searchReq | <code>Object</code> | Information about the search request. |
| searchReq.GraphGUID | <code>string</code> | Globally unique identifier for the graph (defaults to an empty GUID). |
| searchReq.Ordering | <code>string</code> | Ordering of the search results (default is CreatedDescending). |
| searchReq.Expr | <code>Object</code> | Expression used for the search (default is null). |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readEdge"></a>

## readEdge(graphGuid, edgeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Edge&gt;</code>
Read an edge.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Edge&gt;</code> - - The requested edge.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| edgeGuid | <code>string</code> | Edge GUID. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateEdge"></a>

## updateEdge(edge, [cancellationToken]) ⇒ <code>Promise.&lt;Edge&gt;</code>
Update an edge.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Edge&gt;</code> - - The updated edge.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| edge | <code>Object</code> |  | Information about the edge. |
| [edge.GUID] | <code>string</code> |  | Globally unique identifier for the edge (automatically generated if not provided). |
| [edge.GraphGUID] | <code>string</code> |  | Globally unique identifier for the graph (automatically generated if not provided). |
| [edge.Name] | <code>string</code> |  | Name of the edge. |
| [edge.From] | <code>string</code> |  | Globally unique identifier of the from node. |
| [edge.To] | <code>string</code> |  | Globally unique identifier of the to node. |
| [edge.Cost] | <code>number</code> | <code>0</code> | Cost associated with the edge (default is 0). |
| [edge.CreatedUtc] | <code>Date</code> |  | Creation timestamp in UTC (defaults to current UTC time). |
| [edge.Data] | <code>Object</code> |  | Additional object data associated with the edge (default is null). |
| [cancellationToken] | <code>AbortController</code> |  | Optional cancellation token for cancelling the request. |

<a name="deleteEdge"></a>

## deleteEdge(graphGuid, edgeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete an edge.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - - Promise representing the completion of the deletion.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| edgeGuid | <code>string</code> | Edge GUID. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteEdges"></a>

## deleteEdges(graphGuid, [cancellationToken])
Delete all edges within a graph.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteMultipleEdges"></a>

## deleteMultipleEdges(graphGuid, edgeGuids, [cancellationToken])
Delete multiple edges within a graph.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | The GUID of the graph. |
| edgeGuids | <code>Array.&lt;string&gt;</code> | The list of edge GUIDs to delete. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="getEdgesFromNode"></a>

## getEdgesFromNode(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code>
Get edges from a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code> - - Edges.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| nodeGuid | <code>string</code> | Node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getEdgesToNode"></a>

## getEdgesToNode(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code>
Get edges to a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code> - - Edges.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| nodeGuid | <code>string</code> | Node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getEdgesBetween"></a>

## getEdgesBetween(graphGuid, fromNodeGuid, toNodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code>
Get edges from a given node to a given node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code> - - Edges.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| fromNodeGuid | <code>string</code> | From node GUID. |
| toNodeGuid | <code>string</code> | To node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getAllNodeEdges"></a>

## getAllNodeEdges(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code>
Get all edges to or from a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Edge&gt;&gt;</code> - - Edges.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| nodeGuid | <code>string</code> | Node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getChildrenFromNode"></a>

## getChildrenFromNode(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code>
Get child nodes from a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code> - - Child nodes.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| nodeGuid | <code>string</code> | Node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getParentsFromNode"></a>

## getParentsFromNode(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code>
Get parent nodes from a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code> - - Parent nodes.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| nodeGuid | <code>string</code> | Node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getNodeNeighbors"></a>

## getNodeNeighbors(graphGuid, nodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code>
Get neighboring nodes from a node.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Node&gt;&gt;</code> - - Neighboring nodes.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| nodeGuid | <code>string</code> | Node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="getRoutes"></a>

## getRoutes(graphGuid, fromNodeGuid, toNodeGuid, [cancellationToken]) ⇒ <code>Promise.&lt;RouteResult&gt;</code>
Get routes between two nodes.

**Kind**: global function  
**Returns**: <code>Promise.&lt;RouteResult&gt;</code> - - Routes.  

| Param | Type | Description |
| --- | --- | --- |
| graphGuid | <code>string</code> | Graph GUID. |
| fromNodeGuid | <code>string</code> | From node GUID. |
| toNodeGuid | <code>string</code> | To node GUID. |
| [cancellationToken] | <code>AbortSignal</code> | Abort signal for cancellation. |

<a name="readTenants"></a>

## readTenants([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;TenantMetaData&gt;&gt;</code>
Read all tenants.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;TenantMetaData&gt;&gt;</code> - - An array of tenants.  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readTenant"></a>

## readTenant(tenantGuid, [cancellationToken]) ⇒ <code>Promise.&lt;TenantMetaData&gt;</code>
Read a tenant.

**Kind**: global function  
**Returns**: <code>Promise.&lt;TenantMetaData&gt;</code> - - The tenant.  

| Param | Type | Description |
| --- | --- | --- |
| tenantGuid | <code>string</code> | The GUID of the tenant. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createTenant"></a>

## createTenant(tenant, [cancellationToken]) ⇒ <code>Promise.&lt;TenantMetaData&gt;</code>
Create a tenant.

**Kind**: global function  
**Returns**: <code>Promise.&lt;TenantMetaData&gt;</code> - - The created tenant.  

| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>TenantMetaData</code> | The tenant to create. |
| tenant.name | <code>String</code> | The name of the tenant. |
| tenant.Active | <code>boolean</code> | Indicates if tenant is active. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateTenant"></a>

## updateTenant(tenant, guid, [cancellationToken]) ⇒ <code>Promise.&lt;TenantMetaData&gt;</code>
Update a tenant.

**Kind**: global function  
**Returns**: <code>Promise.&lt;TenantMetaData&gt;</code> - - The updated tenant.  

| Param | Type | Description |
| --- | --- | --- |
| tenant | <code>TenantMetaData</code> | The tenant to update. |
| tenant.name | <code>String</code> | The name of the tenant. |
| tenant.Active | <code>boolean</code> | Indicates if tenant is active. |
| guid | <code>string</code> | The GUID of the tenant. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteTenant"></a>

## deleteTenant(tenantGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Delete a tenant.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tenantGuid | <code>string</code> | The GUID of the tenant. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="tenantExists"></a>

## tenantExists(tenantGuid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Tenant exists.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tenantGuid | <code>string</code> | The GUID of the tenant. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="tenantDeleteForce"></a>

## tenantDeleteForce(tenantGuid, [cancellationToken]) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Tenant delete force.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tenantGuid | <code>string</code> | The GUID of the tenant. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readAllUsers"></a>

## readAllUsers([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;UserMetadata&gt;&gt;</code>
Read all users.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;UserMetadata&gt;&gt;</code> - - An array of users.  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readUser"></a>

## readUser(userGuid, [cancellationToken]) ⇒ <code>Promise.&lt;UserMetadata&gt;</code>
Read a user.

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserMetadata&gt;</code> - - The user.  

| Param | Type | Description |
| --- | --- | --- |
| userGuid | <code>string</code> | The GUID of the user. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createUser"></a>

## createUser(user, [cancellationToken]) ⇒ <code>Promise.&lt;UserMetadata&gt;</code>
Create a user.

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserMetadata&gt;</code> - - The created user.  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>UserMetadata</code> | The user to create. |
| user.FirstName | <code>String</code> | The first name of the user. |
| user.LastName | <code>String</code> | The last name of the user. |
| user.Active | <code>boolean</code> | Indicates if user is active. |
| user.Email | <code>string</code> | The email of the user. |
| user.Password | <code>string</code> | The password of the user. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="existsUser"></a>

## existsUser(guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
User exists.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the user. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateUser"></a>

## updateUser(user, guid, [cancellationToken]) ⇒ <code>Promise.&lt;UserMetadata&gt;</code>
Update a user.

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserMetadata&gt;</code> - - The updated user.  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>UserMetadata</code> | The user to update. |
| user.FirstName | <code>String</code> | The first name of the user. |
| user.LastName | <code>String</code> | The last name of the user. |
| user.Active | <code>boolean</code> | Indicates if user is active. |
| user.Email | <code>string</code> | The email of the user. |
| user.Password | <code>string</code> | The password of the user. |
| guid | <code>string</code> | The GUID of the user. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteUser"></a>

## deleteUser(guid, [cancellationToken]) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Delete a user.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the user. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readAllCredentials"></a>

## readAllCredentials([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;CredentialMetadata&gt;&gt;</code>
Read all credentials.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;CredentialMetadata&gt;&gt;</code> - - An array of credentials.  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readCredential"></a>

## readCredential(guid, [cancellationToken]) ⇒ <code>Promise.&lt;CredentialMetadata&gt;</code>
Read a credential.

**Kind**: global function  
**Returns**: <code>Promise.&lt;CredentialMetadata&gt;</code> - - The credential.  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the credential. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createCredential"></a>

## createCredential(credential, [cancellationToken]) ⇒ <code>Promise.&lt;CredentialMetadata&gt;</code>
Create a credential.

**Kind**: global function  
**Returns**: <code>Promise.&lt;CredentialMetadata&gt;</code> - - The created credential.  

| Param | Type | Description |
| --- | --- | --- |
| credential | <code>CredentialMetadata</code> | The credential to create. |
| credential.Name | <code>string</code> | The name of the credential. |
| credential.BearerToken | <code>string</code> | The bearer token of the credential. |
| credential.Active | <code>boolean</code> | Indicates if credential is active. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateCredential"></a>

## updateCredential(credential, guid, [cancellationToken]) ⇒ <code>Promise.&lt;CredentialMetadata&gt;</code>
Update a credential.

**Kind**: global function  
**Returns**: <code>Promise.&lt;CredentialMetadata&gt;</code> - - The updated credential.  

| Param | Type | Description |
| --- | --- | --- |
| credential | <code>CredentialMetadata</code> | The credential to update. |
| credential.Name | <code>string</code> | The name of the credential. |
| credential.BearerToken | <code>string</code> | The bearer token of the credential. |
| credential.Active | <code>boolean</code> | Indicates if credential is active. |
| guid | <code>string</code> | The GUID of the credential. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteCredential"></a>

## deleteCredential(guid, [cancellationToken]) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Delete a credential.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the credential. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="existsCredential"></a>

## existsCredential(guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Credential exists.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the credential. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readAllTags"></a>

## readAllTags([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;TagMetaData&gt;&gt;</code>
Read all tags.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readTag"></a>

## readTag(guid, [cancellationToken]) ⇒ <code>Promise.&lt;TagMetaData&gt;</code>
Read a tag.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tag. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="existsTag"></a>

## existsTag(guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Tag exists.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tag. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createTag"></a>

## createTag(tag, [cancellationToken]) ⇒ <code>Promise.&lt;TagMetaData&gt;</code>
Create a tag.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>TagMetaData</code> | The tag to create. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateTag"></a>

## updateTag(tag, guid, [cancellationToken]) ⇒ <code>Promise.&lt;TagMetaData&gt;</code>
Update a tag.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>TagMetaData</code> | The tag to update. |
| guid | <code>string</code> | The GUID of the tag. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteTag"></a>

## deleteTag(guid, [cancellationToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a tag.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the tag. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readAllLabels"></a>

## readAllLabels([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;LabelMetadata&gt;&gt;</code>
Read all labels.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readLabel"></a>

## readLabel(guid, [cancellationToken]) ⇒ <code>Promise.&lt;LabelMetadata&gt;</code>
Read a label.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the label. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="existsLabel"></a>

## existsLabel(guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Label exists.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the label. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createLabel"></a>

## createLabel(label, [cancellationToken]) ⇒ <code>Promise.&lt;LabelMetadata&gt;</code>
Create a label.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>LabelMetadata</code> | The label to create. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateLabel"></a>

## updateLabel(label, guid, [cancellationToken]) ⇒ <code>Promise.&lt;LabelMetadata&gt;</code>
Update a label.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>LabelMetadata</code> | The label to update. |
| guid | <code>string</code> | The GUID of the label. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteLabel"></a>

## deleteLabel(guid, [cancellationToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a label.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the label. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readAllVectors"></a>

## readAllVectors([cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;VectorMetadata&gt;&gt;</code>
Read all vectors.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="readVector"></a>

## readVector(guid, [cancellationToken]) ⇒ <code>Promise.&lt;VectorMetadata&gt;</code>
Read a vector.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the vector. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="existsVector"></a>

## existsVector(guid, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Vector exists.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the vector. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="createVector"></a>

## createVector(vector, [cancellationToken]) ⇒ <code>Promise.&lt;VectorMetadata&gt;</code>
Create a vector.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>VectorMetadata</code> | The vector to create. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="updateVector"></a>

## updateVector(vector, guid, [cancellationToken]) ⇒ <code>Promise.&lt;VectorMetadata&gt;</code>
Update a vector.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>VectorMetadata</code> | The vector to update. |
| guid | <code>string</code> | The GUID of the vector. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteVector"></a>

## deleteVector(guid, [cancellationToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Delete a vector.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| guid | <code>string</code> | The GUID of the vector. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="searchVectors"></a>

## searchVectors(searchReq, [cancellationToken]) ⇒ <code>Promise.&lt;VectorSearchResult&gt;</code>
Search Vectors.

**Kind**: global function  
**Returns**: <code>Promise.&lt;VectorSearchResult&gt;</code> - - The search result.  

| Param | Type | Description |
| --- | --- | --- |
| searchReq | <code>Object</code> | Information about the search request. |
| searchReq.GraphGUID | <code>string</code> | Globally unique identifier for the graph (defaults to an empty GUID). |
| searchReq.Domain | <code>string</code> | Ordering of the search results (default is CreatedDescending). |
| searchReq.SearchType | <code>String</code> | Expression used for the search (default is null). |
| searchReq.Labels | <code>Array.&lt;string&gt;</code> | The domain of the search type. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="generateToken"></a>

## generateToken(email, tenantId, password, [cancellationToken]) ⇒ <code>Promise.&lt;Token&gt;</code>
Generate an authentication token.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Token&gt;</code> - The generated authentication token  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The user's email address. |
| tenantId | <code>string</code> | The tenant ID. |
| password | <code>string</code> | The user's password. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="getTokenDetails"></a>

## getTokenDetails(token, [cancellationToken]) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetch details about an authentication token.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The token details  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The authentication token to inspect. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="getTenantsForEmail"></a>

## getTenantsForEmail(email, [cancellationToken]) ⇒ <code>Promise.&lt;Array.&lt;TenantMetaData&gt;&gt;</code>
Get tenants associated with an email address.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;TenantMetaData&gt;&gt;</code> - Array of tenants associated with the email  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The email address to lookup tenants for. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="log"></a>

## log(sev, msg)
Logs a message with a severity level.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sev | <code>string</code> | The severity level (e.g., SeverityEnum.Debug, 'warn'). |
| msg | <code>string</code> | The message to log. |

<a name="validateConnectivity"></a>

## validateConnectivity([cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Validates API connectivity using a HEAD request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - Resolves to true if the connection is successful.  
**Throws**:

- <code>Error</code> Rejects with the error in case of failure.


| Param | Type | Description |
| --- | --- | --- |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="putCreate"></a>

## putCreate(url, obj, model, [cancellationToken]) ⇒ <code>Promise.&lt;Object&gt;</code>
Sends a PUT request to create an object at a given URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the created object.  
**Throws**:

- <code>Error</code> Rejects if the URL or object is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL where the object is created. |
| obj | <code>Object</code> | The object to be created. |
| model | <code>Class</code> | Modal to deserialize on |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="head"></a>

## head(url, [cancellationToken]) ⇒ <code>Promise.&lt;boolean&gt;</code>
Checks if an object exists at a given URL using a HEAD request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - Resolves to true if the object exists.  
**Throws**:

- <code>Error</code> Rejects if the URL is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to check. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="get"></a>

## get(url, model, [cancellationToken], [headers]) ⇒ <code>Promise.&lt;Object&gt;</code>
Retrieves an object from a given URL using a GET request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the retrieved object.  
**Throws**:

- <code>Error</code> Rejects if the URL is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the object. |
| model | <code>Class</code> | Modal to deserialize on |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |
| [headers] | <code>Object</code> | Additional headers. |

<a name="getDataInBytes"></a>

## getDataInBytes(url, [cancellationToken]) ⇒ <code>Promise.&lt;Object&gt;</code>
Retrieves raw data from a given URL using a GET request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the retrieved data.  
**Throws**:

- <code>Error</code> Rejects if the URL is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the object. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="getMany"></a>

## getMany(url, model, [cancellationToken], [headers]) ⇒ <code>Promise.&lt;Array&gt;</code>
Retrieves a list of objects from a given URL using a GET request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array&gt;</code> - Resolves with the list of retrieved objects.  
**Throws**:

- <code>Error</code> Rejects if the URL is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the objects. |
| model | <code>Class</code> | Modal to deserialize on |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |
| [headers] | <code>Object</code> | Additional headers. |

<a name="putUpdate"></a>

## putUpdate(url, obj, model, [cancellationToken]) ⇒ <code>Promise.&lt;Object&gt;</code>
Sends a PUT request to update an object at a given URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the created object.  
**Throws**:

- <code>Error</code> Rejects if the URL or object is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL where the object is created. |
| obj | <code>Object</code> | The object to be created. |
| model | <code>Class</code> | Modal to deserialize on |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="delete"></a>

## delete(url, [cancellationToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Sends a DELETE request to remove an object at a given URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - Resolves if the object is successfully deleted.  
**Throws**:

- <code>Error</code> Rejects if the URL is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the object to delete. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="post"></a>

## post(url, data, model, [cancellationToken]) ⇒ <code>Promise.&lt;Object&gt;</code>
Submits data using a POST request to a given URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the response data.  
**Throws**:

- <code>Error</code> Rejects if the URL or data is invalid or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to post data to. |
| data | <code>Object</code> \| <code>string</code> | The data to send in the POST request. |
| model | <code>Class</code> | Modal to deserialize on |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="deleteMany"></a>

## deleteMany(url, obj, [cancellationToken]) ⇒ <code>Promise.&lt;void&gt;</code>
Sends a DELETE request to remove an object at a given URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - Resolves if the object is successfully deleted.  
**Throws**:

- <code>Error</code> Rejects if the URL is invalid, the object is not serializable, or if the request fails.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the object to delete. |
| obj | <code>Object</code> | The object to be created. |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token for cancelling the request. |

<a name="postBatch"></a>

## postBatch(url, obj, model, [cancellationToken]) ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>
Submits a POST request.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(Object\|null)&gt;</code> - The response data parsed as an object of type Object, or null if unsuccessful.  
**Throws**:

- <code>Error</code> If the URL is invalid or the object cannot be serialized to JSON.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to which the request is sent. |
| obj | <code>Object</code> | The object to send in the POST request body. |
| model | <code>Class</code> | Modal to deserialize on |
| [cancellationToken] | <code>AbortController</code> | Optional cancellation token to cancel the request. |

