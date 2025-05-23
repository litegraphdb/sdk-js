import { mockEdgeGuid, mockGraphGuid, edgeData, searchEdgeData, mockEdgeGuids, mockEmptyEdgeGuids } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('EdgeRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('EdgeRoute', () => {
    test('should check if edge exists by GUID', async () => {
      const response = await api.edgeExists(mockGraphGuid, mockEdgeGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a edge', async () => {
      const newEdge = {
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
      const response = await api.createEdge(newEdge);
      expect(response).toEqual(edgeData[mockEdgeGuid]);
    });

    it('throws error when creating a Edge', async () => {
      try {
        await api.createEdge(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: edge is null or empty');
      }
    });

    test('should read all edges of a graph', async () => {
      const response = await api.readEdges(mockGraphGuid);
      response.map((edge) => {
        expect(edge).toEqual(edgeData[edge.GUID as string]);
      });
    });

    test('should search edges', async () => {
      const searchRequest = {
        GraphGUID: mockGraphGuid,
        Ordering: 'CreatedDescending',
        Expr: {
          Left: 'Hello',
          Operator: 'Equals',
          Right: 'World',
        },
      };
      const response = await api.searchEdges(searchRequest);
      expect(response).toEqual(searchEdgeData[mockGraphGuid]);
    });

    test('should read a specific edge by GUID', async () => {
      const response = await api.readEdge(mockGraphGuid, mockEdgeGuid);
      expect(response.GUID).toEqual(mockEdgeGuid);
    });

    test('should update a edge', async () => {
      const updatedEdgeData = {
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
      const response = await api.updateEdge(updatedEdgeData);
      expect(response).toEqual(edgeData[mockEdgeGuid]);
    });

    it('throws error when if missed edge data while updating a Edge', async () => {
      try {
        await api.updateEdge(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Edge is null or empty');
      }
    });

    test('should delete a edge', async () => {
      const response = await api.deleteEdge(mockEdgeGuid, mockEdgeGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete all edges within a graph', async () => {
      const response = await api.deleteAllEdges(mockGraphGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete all edges within a graph with abort', async () => {
      const cancellationToken = new AbortController();
      await api.deleteAllEdges(mockGraphGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should delete multiple edges within a graph', async () => {
      const response = await api.deleteEdges(mockGraphGuid, mockEdgeGuids);
      expect(response).toEqual(true);
    });

    test('should throw an error when edgeGuids is null', async () => {
      try {
        await api.deleteEdges(mockGraphGuid, null as any);
      } catch (err) {
        expect(err.toString()).toBe('Error: ArgumentNullException: edgeGuids is null or empty');
      }
    });

    test('should return true if edgeGuids is an empty array', async () => {
      try {
        await api.deleteEdges(mockGraphGuid, mockEmptyEdgeGuids);
      } catch (err) {
        expect(err.toString()).toBe('Error: Edges array is empty');
      }
    });

    test('should delete multiple edges within a graph with abort', async () => {
      const cancellationToken = new AbortController();
      await api.deleteEdges(mockGraphGuid, mockEdgeGuids, cancellationToken);
      cancellationToken.abort();
    });

    test('should create multiple edges', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      const edges = [
        {
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
        },
        {
          GUID: '02020202-0202-0202-0202-020202020202',
          GraphGUID: '02020202-0202-0202-0202-020202020202',
          Name: 'My test edge',
          From: '2b1520be-d285-4f22-8c74-f296047162b9',
          To: '784cfa37-fb06-4f81-b10d-f1167dfe2b22',
          Cost: 10,
          Data: {
            Hello: 'World 1',
          },
          CreatedUtc: '2024-07-01 15:43:06.991834',
        },
      ];

      const response = await api.createEdges(graphGuid, edges);
      // expect(response).toEqual(expect.arrayContaining(edges));
      expect(response).toEqual(edgeData[mockEdgeGuid]);
    });

    test('should create multiple edges with abort', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      const edges = [
        {
          GUID: '01010101-0101-0101-0101-010101010101',
          GraphGUID: graphGuid,
          Name: 'Sample Edge 1',
          Data: { key1: 'value1' },
          CreatedUtc: '2024-10-19T14:35:20.351Z',
        },
        {
          GUID: '02020202-0202-0202-0202-020202020202',
          GraphGUID: graphGuid,
          Name: 'Sample Edge 2',
          Data: { key2: 'value2' },
          CreatedUtc: '2024-10-19T14:35:20.351Z',
        },
      ];

      const cancellationToken = new AbortController();
      await api.createEdges(graphGuid, edges, cancellationToken);
      cancellationToken.abort();
    });

    test('should return an empty array when creating an empty list of edges', async () => {
      try {
        const graphGuid = '01010101-0101-0101-0101-010101010101';
        const edges = [];

        await api.createEdges(graphGuid, edges);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Edges array is empty');
      }
    });

    test('throws error when edges parameter is missing', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      try {
        await api.createEdges(graphGuid, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Edges is null or empty');
      }
    });
  });
});
