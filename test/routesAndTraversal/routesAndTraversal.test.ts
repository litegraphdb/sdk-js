import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';
import { mockGraphGuid, mockNodeGuid, fromNodeGuid, toNodeGuid, edgeData, nodeData, routesData } from './mockData';

const server = getServer(handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Node Routes and Traversal', () => {
  it('should get edges from a node (success)', async () => {
    const response = await api.Route.getEdgesFromNode(mockGraphGuid, mockNodeGuid);
    // expect(response).toEqual(edgeMockApiResponse);
    response.map((edge) => {
      expect(edge).toEqual(edgeData[edge.GUID as string]);
    });
  });

  it('should get edges to a node (success)', async () => {
    const response = await api.Route.getEdgesToNode(mockGraphGuid, mockNodeGuid);
    // expect(response).toEqual(edgeMockApiResponse);
    response.map((edge) => {
      expect(edge).toEqual(edgeData[edge.GUID as string]);
    });
  });

  it('should get edges between nodes (success)', async () => {
    const response = await api.Route.getEdgesBetween(mockGraphGuid, fromNodeGuid, toNodeGuid);
    // expect(response).toEqual(edgeMockApiResponse);
    response.map((edge) => {
      expect(edge).toEqual(edgeData[edge.GUID as string]);
    });
  });

  it('should get all edges for a node (success)', async () => {
    const response = await api.Route.getAllNodeEdges(mockGraphGuid, mockNodeGuid);
    // expect(response).toEqual(edgeMockApiResponse);
    response.map((edge) => {
      expect(edge).toEqual(edgeData[edge.GUID as string]);
    });
  });

  it('should get child nodes from a node (success)', async () => {
    const response = await api.Route.getChildrenFromNode(mockGraphGuid, mockNodeGuid);
    // expect(response).toEqual(nodeMockApiResponse);
    response.map((node) => {
      expect(node).toEqual(nodeData[node.GUID as string]);
    });
  });

  it('should get parent nodes from a node (success)', async () => {
    const response = await api.Route.getParentsFromNode(mockGraphGuid, mockNodeGuid);
    // expect(response).toEqual(nodeMockApiResponse);
    response.map((node) => {
      expect(node).toEqual(nodeData[node.GUID as string]);
    });
  });

  it('should get neighboring nodes (success)', async () => {
    const response = await api.Route.getNodeNeighbors(mockGraphGuid, mockNodeGuid);
    // expect(response).toEqual(nodeMockApiResponse);
    response.map((node) => {
      expect(node).toEqual(nodeData[node.GUID as string]);
    });
  });

  it('should get routes between nodes (success)', async () => {
    const response = await api.Route.getRoutes(mockGraphGuid, fromNodeGuid, toNodeGuid);
    expect(response).toEqual(routesData[mockNodeGuid as string]);
  });
});
