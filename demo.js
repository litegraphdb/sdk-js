var { LiteGraphSdk } = require('litegraphdb');

var api = new LiteGraphSdk(
  'http://ec2-18-217-169-161.us-east-2.compute.amazonaws.com:8701/',
  '00000000-0000-0000-0000-000000000000',
  'litegraphadmin'
);
var guid = '00900db5-c9b7-4631-b250-c9e635a9036e'; // {String}
var nodeGuid = '0fa34090-46d5-4d6a-99dd-65a53f74f3c4'; // {String}
var toNodeGuid = '01010101-0101-0101-0101-010101010101';
var fromNodeGuid = '01010101-0101-0101-0101-010101010101';
var edgeGuid = 'cbabe93f-c4d5-40a9-b0ff-1ee596a4293f';
// region Graph
const getGraphById = async () => {
  try {
    const data = await api.readGraph(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getGraphList = async () => {
  try {
    const data = await api.readGraphs();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createGraph = async () => {
  // Graph object to create
  try {
    const createdGraph = await api.createGraph('02020202-0202-0202-0202-020202020202', 'Custom GUID', {
      key1: 'value1',
    });
    console.log(createdGraph, 'Graph created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating graph:', JSON.stringify(err));
  }
};

const updateGraph = async () => {
  // Graph object to update
  const graph = {
    GUID: '01010101-0101-0101-0101-010101010101',
    GraphGUID: '01010101-0101-0101-0101-010101010101',
    Name: 'Sample Node',
    Data: {
      key1: 'value2',
    },
    CreatedUtc: '2024-10-19T14:35:20.351Z',
  };

  try {
    const createdGraph = await api.updateGraph(graph);
    console.log(createdGraph, 'Graph created successfully');
  } catch (err) {
    console.log('Error creating graph:', JSON.stringify(err));
  }
};

const deleteGraphById = async () => {
  try {
    const data = await api.deleteGraph(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfGraphExistsById = async () => {
  try {
    const data = await api.graphExists(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const searchGraph = async () => {
  // Graph object to search

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
    const response = await api.searchGraphs(searchRequest);
    console.log(response, 'Graph searched successfully');
  } catch (err) {
    console.log('Error searching graph:', JSON.stringify(err), err);
  }
};

const exportGraphToGexf = async () => {
  try {
    const data = await api.exportGraphToGexf('7f371867-cfd1-4f76-904d-682660dc91ec');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

// region Node
const getNodeById = async () => {
  try {
    const data = await api.readNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getNodeList = async () => {
  try {
    const data = await api.readNodes(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createNode = async () => {
  // Node object to create
  const node = {
    GUID: '01010101-0101-0101-0101-010101010101',
    GraphGUID: '01010101-0101-0101-0101-010101010101',
    Name: 'Sample Node',
    Data: {
      key1: 'value2',
    },
    CreatedUtc: '2024-10-19T14:35:20.351Z',
  };
  try {
    const createdNode = await api.createNode(node);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating node:', JSON.stringify(err));
  }
};

const multipleNodes = async () => {
  const newMultipleNodes = [
    {
      Name: 'Active Directory',
      Labels: ['test'],
      Tags: {
        Type: 'ActiveDirectory',
      },
      Data: {
        Name: 'Active Directory',
      },
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
    },
  ];

  try {
    const createdNode = await api.createNodes(guid, newMultipleNodes);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating node:', JSON.stringify(err));
  }
};
const updateNode = async () => {
  // Node object to update
  const node = {
    GUID: '01010101-0101-0101-0101-010101010101',
    GraphGUID: '01010101-0101-0101-0101-010101010101',
    Name: 'Sample Node',
    Data: {
      key1: 'value2',
    },
    CreatedUtc: '2024-10-19T14:35:20.351Z',
  };

  try {
    const createdNode = await api.updateNode(node);
    console.log(createdNode, 'Node created successfully');
  } catch (err) {
    console.log('Error creating node:', JSON.stringify(err));
  }
};

const deleteNodeById = async () => {
  try {
    const data = await api.deleteNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfNodeExistsById = async () => {
  try {
    const data = await api.graphExists(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
const searchNodes = async () => {
  // Graph object to update

  const searchRequest = {
    Ordering: 'CreatedDescending',
    Expr: {
      Left: 'Hello',
      Operator: 'Equals',
      Right: 'World',
    },
  };

  try {
    const response = await api.searchNodes('00900db5-c9b7-4631-b250-c9e635a9036e', searchRequest);
    console.log(response, 'Graph searched successfully');
  } catch (err) {
    console.log('Error searching graph:', JSON.stringify(err), err);
  }
};

// region Edge
const getEdgeById = async () => {
  try {
    const data = await api.readEdge(guid, edgeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const getEdgeList = async () => {
  try {
    const data = await api.readEdges(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const createEdge = async () => {
  // Edge object to create
  const edge = {
    Name: 'My test edge',
    From: '2b1520be-d285-4f22-8c74-f296047162b9',
    To: '784cfa37-fb06-4f81-b10d-f1167dfe2b22',
    Cost: 10,
    Data: {
      Hello: 'World',
    },
    CreatedUtc: '2024-07-01 15:43:06.991834',
  };
  try {
    const createdEdge = await api.createEdge(edge);
    console.log(createdEdge, 'Edge created successfully');
  } catch (err) {
    console.log('err: ', err);
    console.log('Error creating edge:', JSON.stringify(err));
  }
};

const updateEdge = async () => {
  // Edge object to update
  const edge = {
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
  };

  try {
    const createdEdge = await api.updateEdge(edge);
    console.log(createdEdge, 'Edge created successfully');
  } catch (err) {
    console.log('Error creating edge:', JSON.stringify(err));
  }
};

const deleteEdgeById = async () => {
  try {
    const data = await api.deleteEdge(guid, edgeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const checkIfEdgeExistsById = async () => {
  try {
    const data = await api.graphExists(guid, edgeGuid);
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
    const response = await api.searchEdges('01010101-0101-0101-0101-010101010101', searchRequest);
    console.log(response, 'Graph searched successfully');
  } catch (err) {
    console.log('Error searching graph:', JSON.stringify(err), err);
  }
};

//region Routes & Traversal
const getEdgesFromNode = async () => {
  try {
    const data = await api.getEdgesFromNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const getEdgesToNode = async () => {
  try {
    const data = await api.getEdgesToNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getEdgesBetween = async () => {
  try {
    const data = await api.getEdgesBetween(guid, fromNodeGuid, toNodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getAllNodeEdges = async () => {
  try {
    const data = await api.getAllNodeEdges(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getChildrenFromNode = async () => {
  try {
    const data = await api.getChildrenFromNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getParentsFromNode = async () => {
  try {
    const data = await api.getParentsFromNode(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getNodeNeighbors = async () => {
  try {
    const data = await api.getNodeNeighbors(guid, nodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};
const getRoutes = async () => {
  try {
    const data = await api.getRoutes(guid, fromNodeGuid, toNodeGuid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

const deleteMultipleNodes = async () => {
  try {
    const data = await api.deleteMultipleNodes(guid, ['a8s7d87asd', '7a6sd8767ad']);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err), err);
  }
};

//endregion

//region User
const readAllUsers = async () => {
  try {
    const data = await api.readAllUsers();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readUser = async () => {
  try {
    const data = await api.readUser('00000000-0000-0000-0000-000000000000');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createUser = async () => {
  try {
    const data = await api.createUser({
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
    const data = await api.existsUser('00000000-0000-0000-0000-000000000000');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateUser = async () => {
  try {
    const data = await api.updateUser(
      {
        FirstName: 'Again Updated',
        LastName: 'User',
        Email: 'anotherbbb@user.com',
        Password: 'password',
        Active: true,
      },
      'eda4872a-fe66-475c-9c33-4b50ec14de0d'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteUser = async () => {
  try {
    const data = await api.deleteUser('eda4872a-fe66-475c-9c33-4b50ec14de0d');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Tenant
const readTenants = async () => {
  try {
    const data = await api.readTenants();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readTenant = async () => {
  try {
    const data = await api.readTenant('00000000-0000-0000-0000-000000000000');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createTenant = async () => {
  try {
    const data = await api.createTenant({
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
    const data = await api.tenantExists('00000000-0000-0000-0000-000000000000');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateTenant = async () => {
  try {
    const data = await api.updateTenant(
      {
        Name: 'Updated tenant',
        Active: true,
      },
      '62147b5c-19f0-4eb1-9640-b28784ca2645'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteTenant = async () => {
  try {
    const data = await api.deleteTenant('0a28221b-fa65-430d-8b29-158546639347');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteForceTenant = async () => {
  try {
    const data = await api.tenantDeleteForce('db548e9f-32bf-4fe0-9be1-a629b26fed0b');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Credentials
const readAllCredentials = async () => {
  try {
    const data = await api.readAllCredentials();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readCredential = async () => {
  try {
    const data = await api.readCredential('bcce2a7c-d102-42e2-97d4-a449f470f57c');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createCredential = async () => {
  /** @type {CredentialMetadata} */
  const credential = {
    UserGUID: '00000000-0000-0000-0000-000000000000',
    Name: 'New credential',
    BearerToken: 'foobar',
    Active: true,
  };

  try {
    const data = await api.createCredential(credential);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsCredential = async () => {
  try {
    const data = await api.existsCredential('bcce2a7c-d102-42e2-97d4-a449f470f57c');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateCredential = async () => {
  try {
    const data = await api.updateCredential(
      {
        UserGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'Updated credential',
        BearerToken: 'default',
        Active: true,
      },
      'bcce2a7c-d102-42e2-97d4-a449f470f57c'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteCredential = async () => {
  try {
    const data = await api.deleteCredential('1f4ac56e-69da-49b3-8bd5-e29a639d6392');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Labels
const readAllLabels = async () => {
  try {
    const data = await api.readAllLabels();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readLabel = async () => {
  try {
    const data = await api.readLabel('a051c94d-90f9-4471-8e03-5234c4f4f061');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createLabel = async () => {
  try {
    const data = await api.createLabel({
      GraphGUID: '00000000-0000-0000-0000-000000000000',
      NodeGUID: '00000000-0000-0000-0000-000000000000',
      Label: 'test',
      CreatedUtc: '2025-01-16T07:23:26.752372Z',
      LastUpdateUtc: '2025-01-16T07:23:26.752417Z',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const existsLabel = async () => {
  try {
    const data = await api.existsLabel('a051c94d-90f9-4471-8e03-5234c4f4f061');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateLabel = async () => {
  try {
    const data = await api.updateLabel(
      {
        Key: 'updatedkey',
        Value: 'myvalue',
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
      },
      '2717241e-ca54-45d9-8857-2303305c4554'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteLabel = async () => {
  try {
    const data = await api.deleteLabel('a169ec1d-bbc9-4538-90f5-2c1fbf281282');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

//endregion

//region Tag
const readAllTags = async () => {
  try {
    const data = await api.readAllTags();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const readTag = async () => {
  try {
    const data = await api.readTag('461c0b76-b7ae-4a6f-8b25-50c78239ecce');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createTag = async () => {
  try {
    const data = await api.createTag({
      GraphGUID: '00000000-0000-0000-0000-000000000000',
      NodeGUID: '158c634b-53d2-4a60-be87-61c39c990451',
      EdgeGUID: 'cdf28e4f-9a28-4a70-b246-e3ae9ccb35d6',
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
    const data = await api.existsTag('461c0b76-b7ae-4a6f-8b25-50c78239ecce');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const updateTag = async () => {
  try {
    const data = await api.updateTag(
      {
        Key: 'updatedkey',
        Value: 'myvalue',
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
      },
      'fa3d7a1b-7bad-4d7b-b0dc-93bb42872651'
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteTag = async () => {
  try {
    const data = await api.deleteTag('3e49bc06-8fb6-41f1-8bb4-1a4af6319264');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createMultipleTags = async () => {
  try {
    const data = await api.createTags([
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: null,
        EdgeGUID: null,
        Key: 'mykey test',
        Value: 'myvalue test',
      },
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: null,
        EdgeGUID: null,
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
    const data = await api.deleteTags([
      '4cbfe0cd-13b9-426c-8a6b-84e77abe8f6d',
      'dc0c1298-3f79-4c6e-ac25-7491eb8a5b25',
      '5618fe18-47f1-43eb-abae-96ba6a88b341',
      '445369d4-b6d8-465e-9a46-c7109b085d39',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleTags();

const deleteMultipleVectors = async () => {
  try {
    const data = await api.deleteVectors(['ff9d5654-654c-41e7-a5c8-50a1963de72c']);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleVectors();
const createMultipleVectors = async () => {
  try {
    const data = await api.createVectors([
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: null,
        EdgeGUID: null,
        Model: 'all-MiniLM-L6-v2',
        Dimensionality: 384,
        Content: 'test',
        Vectors: [0.1, 0.2, 0.3],
      },
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// createMultipleVectors();

const createMultipleLabels = async () => {
  try {
    const data = await api.createLabels([
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: null,
        EdgeGUID: null,
        Label: 'label multiple',
      },
      {
        GraphGUID: '8e72e2b7-86fe-4f94-8483-547c23c8a833',
        NodeGUID: null,
        EdgeGUID: null,
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
    const data = await api.deleteLabels([
      '33c8c905-b78b-4548-98ff-af0197d5fa97',
      '96d4f123-a265-4c60-aef1-664a5ed0d7df',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
// deleteMultipleLabels();

const createMultipleNodes = async () => {
  try {
    const data = await api.createNodes('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
      {
        Name: 'Active Directory',
        Labels: ['test'],
        Tags: {
          Type: 'ActiveDirectory',
        },
        Data: {
          Name: 'Active Directory',
        },
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
    const data = await api.deleteNodes('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
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
    const data = await api.createEdges('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
      {
        Name: 'DigitalOcean to Control Plane',
        From: 'a76c18ed-78be-4666-858a-5154350240d8',
        To: '768191c0-0d4d-4be0-a13e-a5c9cabdaa46',
        Cost: 100,
        Labels: ['test'],
        Tags: {
          type: 'edge',
          test: 'true',
        },
        Data: {
          hello: 'world',
        },
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
    const data = await api.deleteEdges('8e72e2b7-86fe-4f94-8483-547c23c8a833', [
      'a76c18ed-78be-4666-858a-5154350240d8',
    ]);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
deleteMultipleEdges();

const useSdk = async () => {
  //region Graph calls
  // await getGraphById();
  // await getGraphList();
  // await createGraph();
  // await updateGraph();
  // await deleteGraphById();
  // await checkIfGraphExistsById();
  // await searchGraph();
  //await exportGraphToGexf();
  //region Node calls
  // await getNodeById();
  // await getNodeList();
  // await createNode();
  // await updateNode();
  // await deleteNodeById();
  // await checkIfNodeExistsById();
  // await searchNodes();
  //region Edge calls
  // await getEdgeById();
  // await getEdgeList();
  // await createEdge();
  // await updateEdge();
  // await deleteEdgeById();
  // await checkIfEdgeExistsById();
  // await searchEdges();
  //region Routes & Traversal calls
  // await getEdgesFromNode();
  // await getEdgesToNode();
  // await getEdgesBetween();
  // await getAllNodeEdges();
  // await getChildrenFromNode();
  // await getParentsFromNode();
  // await getNodeNeighbors();
  // await getRoutes();
  // await deleteMultipleNodes();
  //region Tenant calls
  // readTenants();
  // readTenant();
  // createTenant();
  // tenantExists();
  // updateTenant();
  // deleteTenant();
  //await deleteForceTenant();
  //region User calls
  // await readAllUsers();
  // await readUser();
  // await createUser();
  // await existsUser();
  // await updateUser();
  // await deleteUser();
  //region Credential calls
  // await readAllCredentials();
  // await readCredential();
  // await createCredential();
  // await existsCredential();
  // await updateCredential();
  // await deleteCredential();
  //region Label calls
  // await readAllLabels();
  // await readLabel();
  // await createLabel();
  // await existsLabel();
  // await updateLabel();
  // await deleteLabel();
  //region Tag calls
  //await readAllTags();
  // await readTag();
  // await createTag();
  // await existsTag();
  // await updateTag();
  // await deleteTag();
  //region Vectors
  // await readAllVectors();
  // await readVector();
  // await createVector();
  // await existsVector();
  // await updateVector();
  // await deleteVector();
  //await multipleNodes();
};
useSdk();
