import { LiteGraphSdk } from 'litegraphdb';
import { Edge, Graph, Node, NodeCreateRequest, NodeEdgeSearchRequest } from 'litegraphdb/dist/types/types';

var api = new LiteGraphSdk(
  'http://ec2-18-217-169-161.us-east-2.compute.amazonaws.com:8701/',
  '5317813d-99b2-4236-8c24-9827f79338c7',
  'litegraphadmin'
);
var guid = '<graph-guid>'; // {String}
var nodeGuid = '<node-guid>'; // {String}
var toNodeGuid = '<to-node-guid>';
var fromNodeGuid = '<from-node-guid>';
var edgeGuid = '<edge-guid>';
// region Graph
const getGraphById = async () => {
  try {
    const data = await api.Graph.read(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getGraphList = async () => {
  try {
    const data = await api.Graph.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createGraph = async () => {
  // Graph object to create
  try {
    const createdGraph = await api.Graph.create({ Name: 'New Graph' });
    console.log(createdGraph, 'Graph created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating graph:', JSON.stringify(err));
  }
};

const updateGraph = async () => {
  // Graph object to update
  const graph: Graph = {
    GUID: '08944937-e506-416a-b96e-d7b40344c618',
    Name: 'Sample Node',
    CreatedUtc: '2024-10-19T14:35:20.351Z',
    Data: {
      key1: 'value2',
    },
    Labels: ['test'],
    Tags: {
      Type: 'ActiveDirectory',
    },
    Vectors: [],
  };

  try {
    const updatedGraph = await api.Graph.update(graph);
    console.log(updatedGraph, 'Graph updated successfully');
  } catch (err) {
    console.log('Error creating graph:', JSON.stringify(err));
  }
};

const deleteGraphById = async () => {
  try {
    const data = await api.Graph.delete(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfGraphExistsById = async () => {
  try {
    const data = await api.Graph.exists(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const searchGraph = async () => {
  // Graph object to search

  const searchRequest = {
    GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    Ordering: 'CreatedDescending',
    Expr: {
      Left: 'Hello',
      Operator: 'Equals',
      Right: 'World',
    },
  };

  try {
    const response = await api.Graph.search(searchRequest);
    console.log(response, 'Graph searched successfully');
  } catch (err) {
    console.log('Error searching graph:', JSON.stringify(err), err);
  }
};

const exportGraphToGexf = async () => {
  try {
    const data = await api.Graph.exportGexf('00900db5-c9b7-4631-b250-c9e635a9036e');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

// region Node
const getNodeById = async () => {
  try {
    const data = await api.Node.read(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getNodeList = async () => {
  try {
    const data = await api.Node.readAll(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createNode = async () => {
  // Node object to create
  const node = {
    GUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    Name: 'Sample Node',
    Data: {
      key1: 'value2',
    },
    CreatedUtc: '2024-10-19T14:35:20.351Z',
  };
  try {
    const createdNode = await api.Node.create(node);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating node:', JSON.stringify(err));
  }
};

const multipleNodes = async () => {
  const newMultipleNodes: NodeCreateRequest[] = [
    {
      Name: 'Active Directory',
      Labels: ['test'],
      Tags: {
        Type: 'ActiveDirectory',
      },
      Data: {
        Name: 'Active Directory',
      },
      GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
    },
    {
      Name: 'Website',
      Labels: ['test'],
      Tags: {
        Type: 'Website',
      },
      Data: {
        Name: 'Website',
      },
      GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
    },
  ];

  try {
    const createdNode = await api.Node.createBulk(guid, newMultipleNodes);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating node:', JSON.stringify(err));
  }
};
const updateNode = async () => {
  // Node object to update
  const node: Node = {
    GUID: 'ab31cc6e-000f-4e31-8068-372d1b038d3d',
    GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    Name: 'Sample Node',
    Data: {
      key1: 'value2',
    },
    CreatedUtc: '2024-10-19T14:35:20.351Z',
    Labels: ['test'],
    Tags: {
      Type: 'ActiveDirectory',
    },
    Vectors: [],
    LastUpdateUtc: '2024-10-19T14:35:20.351Z',
  };

  try {
    const updatedNode = await api.Node.update(node);
    console.log(updatedNode, 'Node updated successfully');
  } catch (err) {
    console.log('Error creating node:', JSON.stringify(err));
  }
};

const deleteNodeById = async () => {
  try {
    const data = await api.Node.delete(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfNodeExistsById = async () => {
  try {
    const data = await api.Node.exists(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const searchNodes = async () => {
  // Graph object to update

  const searchRequest: NodeEdgeSearchRequest = {
    GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    Ordering: 'CreatedDescending',
    Expr: {
      Left: 'Hello',
      Operator: 'Equals',
      Right: 'World',
    },
  };

  try {
    const response = await api.Node.search(searchRequest);
    console.log(response, 'Graph searched successfully');
  } catch (err) {
    console.log('Error searching graph:', JSON.stringify(err), err);
  }
};

// region Edge
const getEdgeById = async () => {
  try {
    const data = await api.Edge.read(guid, edgeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getEdgeList = async () => {
  try {
    const data = await api.Edge.readAll(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createEdge = async () => {
  // Edge object to create
  const edge = {
    GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
    Name: 'My test edge',
    From: '2b1520be-d285-4f22-8c74-f296047162b9',
    To: '784cfa37-fb06-4f81-b10d-f1167dfe2b22',
    Cost: 10,
    Data: {
      Hello: 'World',
    },
  };
  try {
    const createdEdge = await api.Edge.create(edge);
    console.log(createdEdge, 'Edge created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating edge:', JSON.stringify(err));
  }
};

const updateEdge = async () => {
  // Edge object to update
  const edge: Edge = {
    GUID: '01010101-0101-0101-0101-010101010101',
    GraphGUID: '01010101-0101-0101-0101-010101010101',
    Name: 'My test edge',
    From: '2b1520be-d285-4f22-8c74-f296047162b9',
    To: '784cfa37-fb06-4f81-b10d-f1167dfe2b22',
    Cost: 10,
    Data: {
      Hello: 'World',
    },
    CreatedUtc: '2024-07-01 15:43:06.991834',
    Labels: ['test'],
    Tags: {
      Type: 'ActiveDirectory',
    },
    Vectors: [],
    LastUpdateUtc: '2024-07-01 15:43:06.991834',
  };

  try {
    const createdEdge = await api.Edge.update(edge);
    console.log(createdEdge, 'Edge created successfully');
  } catch (err) {
    console.log('Error creating edge:', JSON.stringify(err));
  }
};

const deleteEdgeById = async () => {
  try {
    const data = await api.Edge.delete(guid, edgeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfEdgeExistsById = async () => {
  try {
    const data = await api.Edge.exists(guid, edgeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const searchEdges = async () => {
  // Graph object to update

  const searchRequest = {
    GraphGUID: '01010101-0101-0101-0101-010101010101',
    Ordering: 'CreatedDescending',
    Expr: {
      Left: 'Hello',
      Operator: 'Equals',
      Right: 'World',
    },
  };

  try {
    const response = await api.Edge.search(searchRequest);
    console.log(response, 'Graph searched successfully');
  } catch (err) {
    console.log('Error searching graph:', JSON.stringify(err), err);
  }
};

//region Routes & Traversal
const getEdgesFromNode = async () => {
  try {
    const data = await api.Route.getEdgesFromNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const getEdgesToNode = async () => {
  try {
    const data = await api.Route.getEdgesToNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getEdgesBetween = async () => {
  try {
    const data = await api.Route.getEdgesBetween(guid, fromNodeGuid, toNodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getAllNodeEdges = async () => {
  try {
    const data = await api.Route.getAllNodeEdges(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getChildrenFromNode = async () => {
  try {
    const data = await api.Route.getChildrenFromNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getParentsFromNode = async () => {
  try {
    const data = await api.Route.getParentsFromNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getNodeNeighbors = async () => {
  try {
    const data = await api.Route.getNodeNeighbors(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getRoutes = async () => {
  try {
    const data = await api.Route.getRoutes(guid, fromNodeGuid, toNodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const deleteMultipleNodes = async () => {
  try {
    const data = await api.Node.deleteBulk(guid, [
      '2221ee97-41ea-45f2-a3f4-48f63e490c16',
      'e8fad9e1-ccfb-41a3-a871-df07f382ad98',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

//endregion

//region User
const readAllUsers = async () => {
  try {
    const data = await api.User.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readUser = async () => {
  try {
    const data = await api.User.read('199eb859-5857-4313-b487-5b0a5fb2abf8');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createUser = async () => {
  try {
    const data = await api.User.create({
      FirstName: 'Another',
      LastName: 'User',
      Email: 'another@user.com',
      Password: 'password',
      Active: true,
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsUser = async () => {
  try {
    const data = await api.User.exists('8ac86e7e-5612-4193-95d6-2f217dbaeedf');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateUser = async () => {
  try {
    const data = await api.User.update({
      GUID: '8ac86e7e-5612-4193-95d6-2f217dbaeedf',
      FirstName: 'Again Updated',
      LastName: 'User',
      Email: 'anotherbbb@user.com',
      Password: 'password',
      Active: true,
      CreatedUtc: '2024-12-27T18:12:38.653402Z',
      LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteUser = async () => {
  try {
    const data = await api.User.delete('8ac86e7e-5612-4193-95d6-2f217dbaeedf');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Tenant
const readTenants = async () => {
  try {
    const data = await api.Tenant.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readTenant = async () => {
  try {
    const data = await api.Tenant.read('00000000-0000-0000-0000-000000000000');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createTenant = async () => {
  try {
    const data = await api.Tenant.create({
      Name: 'Another tenant',
      Active: true,
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const tenantExists = async () => {
  try {
    const data = await api.Tenant.exists('029b9092-3a4c-4f5e-8527-b1b947494e32');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateTenant = async () => {
  try {
    const data = await api.Tenant.update({
      GUID: '029b9092-3a4c-4f5e-8527-b1b947494e32',
      Name: 'Updated tenant',
      Active: true,
      CreatedUtc: '2024-12-27T18:12:38.653402Z',
      LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteTenant = async () => {
  try {
    const data = await api.Tenant.delete('029b9092-3a4c-4f5e-8527-b1b947494e32');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteForceTenant = async () => {
  try {
    const data = await api.Tenant.delete('db548e9f-32bf-4fe0-9be1-a629b26fed0b', true);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Credentials
const readAllCredentials = async () => {
  try {
    const data = await api.Credential.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readCredential = async () => {
  try {
    const data = await api.Credential.read('8882bae3-abb1-4d4a-8671-fa7b80e18515');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createCredential = async () => {
  /** @type {CredentialMetadata} */
  const credential = {
    UserGUID: 'a2b230c7-c57f-4194-b042-1333102226b1',
    Name: 'New credential',
    BearerToken: 'foobar',
    Active: true,
  };

  try {
    const data = await api.Credential.create(credential);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsCredential = async () => {
  try {
    const data = await api.Credential.exists('fba86eda-21ea-4095-852c-5f5c542f0ffc');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateCredential = async () => {
  try {
    const data = await api.Credential.update(
      {
        UserGUID: 'a2b230c7-c57f-4194-b042-1333102226b1',
        Name: 'Updated credential',
        BearerToken: 'default',
        Active: true,
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        GUID: 'fba86eda-21ea-4095-852c-5f5c542f0ffc',
        TenantGUID: '',
      },
      'fba86eda-21ea-4095-852c-5f5c542f0ffc'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteCredential = async () => {
  try {
    const data = await api.Credential.delete('fba86eda-21ea-4095-852c-5f5c542f0ffc');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Labels
const readAllLabels = async () => {
  try {
    const data = await api.Label.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readLabel = async () => {
  try {
    const data = await api.Label.read('bc850d2f-3433-4003-83fc-920d6be29ea0');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createLabel = async () => {
  try {
    const data = await api.Label.create({
      GraphGUID: '5de4ba59-cd38-4ed5-a4cc-09b2532e65b2',
      NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
      Label: 'test',
      EdgeGUID: null,
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsLabel = async () => {
  try {
    const data = await api.Label.exists('48cee235-5be0-4197-b67f-a9183c7f52b2');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateLabel = async () => {
  try {
    const data = await api.Label.update({
      GUID: '48cee235-5be0-4197-b67f-a9183c7f52b2',
      GraphGUID: '5de4ba59-cd38-4ed5-a4cc-09b2532e65b2',
      NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
      Label: 'updatedkey',
      EdgeGUID: 'e9702f09-cd73-413b-8e00-5f871472a02d',
      CreatedUtc: '2024-12-27T18:12:38.653402Z',
      LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
      TenantGUID: '',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteLabel = async () => {
  try {
    const data = await api.Label.delete('48cee235-5be0-4197-b67f-a9183c7f52b2');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Tag
const readAllTags = async () => {
  try {
    const data = await api.Tag.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readTag = async () => {
  try {
    const data = await api.Tag.read('c1328564-c700-4e43-b17a-056cf36fd62b');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createTag = async () => {
  try {
    const data = await api.Tag.create({
      GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
      NodeGUID: 'b8837eb9-b180-479f-b09e-d3ad8adab9ee',
      EdgeGUID: 'e9702f09-cd73-413b-8e00-5f871472a02d',
      Key: 'mykey',
      Value: 'myvalue',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsTag = async () => {
  try {
    const data = await api.Tag.exists('51e84292-8be4-468e-b9af-5e44c10dc551');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateTag = async () => {
  try {
    const data = await api.Tag.update(
      {
        Key: 'updatedkey',
        Value: 'myvalue',
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
        GUID: '',
        TenantGUID: '',
        GraphGUID: '',
        NodeGUID: '',
        EdgeGUID: '',
      },
      '51e84292-8be4-468e-b9af-5e44c10dc551'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteTag = async () => {
  try {
    const data = await api.Tag.delete('51e84292-8be4-468e-b9af-5e44c10dc551');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createMultipleTags = async () => {
  try {
    const data = await api.Tag.createBulk([
      {
        GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Key: 'mykey test',
        Value: 'myvalue test',
      },
      {
        GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Key: 'mykey test 2',
        Value: 'myvalue test 2',
      },
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createMultipleTags();

const deleteMultipleTags = async () => {
  try {
    const data = await api.Tag.deleteBulk([
      '5ab74644-888b-4215-90ba-23a01b1fdbe3',
      'd842fa4b-163f-4edd-85b1-df38facb9bed',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleTags();

//endregion

//region Vectors

const readAllVectors = async () => {
  try {
    const data = await api.Vector.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readVector = async () => {
  try {
    const data = await api.Vector.read('8efc5ca4-52a4-4344-a856-db2fb198c617');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createVector = async () => {
  try {
    const data = await api.Vector.create({
      GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
      NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
      EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
      Model: 'all-MiniLM-L6-v2',
      Dimensionality: 384,
      Content: 'test',
      Vectors: [0.1, 0.2, 0.3],
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsVector = async () => {
  try {
    const data = await api.Vector.exists('70cd93dd-0f38-435d-b57d-f5d1bc1b4481');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateVector = async () => {
  try {
    const data = await api.Vector.update(
      {
        GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 388,
        Content: 'test Ashish',
        Vectors: [0.5, 0.7, 0.9],
        GUID: '',
        TenantGUID: '',
        CreatedUtc: '',
        LastUpdateUtc: '',
      },
      '70cd93dd-0f38-435d-b57d-f5d1bc1b4481'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteVector = async () => {
  try {
    const data = await api.Vector.delete('70cd93dd-0f38-435d-b57d-f5d1bc1b4481');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteMultipleVectors = async () => {
  try {
    const data = await api.Vector.deleteBulk([
      '64ee007a-14f5-43b0-99a0-9a22fb4a24b9',
      '9823faa0-a8ae-4479-a87d-56cf18d27696',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleVectors();

const createMultipleVectors = async () => {
  try {
    const data = await api.Vector.createBulk([
      {
        GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        Content: 'test Ash',
        Vectors: [0.1, 0.2, 0.3],
      },
      {
        GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 390,
        Content: 'test Ashish',
        Vectors: [0.5, 0.7, 0.9],
      },
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createMultipleVectors();

//endregion

const createMultipleLabels = async () => {
  try {
    const data = await api.Label.createBulk([
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Label: 'label multiple',
      },
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        EdgeGUID: '53b94bd9-98ea-47e6-9e5a-4fe346298717',
        Label: 'label multiple 2',
      },
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createMultipleLabels();

const deleteMultipleLabels = async () => {
  try {
    const data = await api.Label.deleteBulk([
      '23513268-7fe7-4867-ab3e-c7a5dc4b2e57',
      '9f8d49e0-031a-4de0-b643-ce48dc3774fe',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleLabels();

const createMultipleNodes = async () => {
  try {
    const data = await api.Node.createBulk('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
      {
        Name: 'Active Directory',
        Labels: ['test'],
        Tags: {
          Type: 'ActiveDirectory',
        },
        Data: {
          Name: 'Active Directory',
        },
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
      },
      {
        Name: 'Website',
        Labels: ['test'],
        Tags: {
          Type: 'Website',
        },
        Data: {
          Name: 'Website',
        },
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
      },
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createMultipleNodes();

const deleteMultipleNodes2 = async () => {
  try {
    const data = await api.Node.deleteBulk('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
      'a204853e-5ba1-4795-9a2b-46349847f92f',
      '76df872f-a138-4e28-9cd0-95941c6fd657',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleNodes2();

const createMultipleEdges = async () => {
  try {
    const data = await api.Edge.createBulk('00900db5-c9b7-4631-b250-c9e635a9036e', [
      {
        Name: 'DigitalOcean to Control Plane',
        From: 'dce18cf8-6443-4d14-b4a3-c72dcc28d6d8',
        To: '38eff321-7eaa-457e-b5e0-5f7fa7041e63',
        Cost: 100,
        Labels: ['test'],
        Tags: {
          type: 'edge',
          test: 'true',
        },
        Data: {
          hello: 'world',
        },
        GraphGUID: '00900db5-c9b7-4631-b250-c9e635a9036e',
      },
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createMultipleEdges();

const deleteMultipleEdges = async () => {
  try {
    const data = await api.Edge.deleteBulk('00900db5-c9b7-4631-b250-c9e635a9036e', [
      '934c11b3-61df-4fc5-972c-6e9d0ee3aa19',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleEdges();

// region Backup

const createBackup = async () => {
  try {
    const data = await api.Backup.create({
      Filename: 'test2.db',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createBackup();

const readAllBackups = async () => {
  try {
    const data = await api.Backup.readAll();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// readAllBackups();

const readBackup = async () => {
  try {
    const data = await api.Backup.read('my-backup.db');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
readBackup();

const existsBackup = async () => {
  try {
    const data = await api.Backup.exists('test2.db');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// existsBackup();

const deleteBackup = async () => {
  try {
    const data = await api.Backup.delete('test2.db');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteBackup();

// region ValidateConnectivity

const ValidateConnectivity = async () => {
  try {
    const data = await api.validateConnectivity();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// ValidateConnectivity();
