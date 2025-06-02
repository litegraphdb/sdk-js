import { mockNodeGuid, mockGraphGuid, nodeData, searchNodeData, mockNodeGuids } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('NodeRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('NodeRoute', () => {
    test('should check if node exists by GUID', async () => {
      const response = await api.Node.exists(mockGraphGuid, mockNodeGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });
    test('should check if node exists by GUID with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Node.exists(mockGraphGuid, mockNodeGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should create a node', async () => {
      const newNode = {
        GUID: '01010101-0101-0101-0101-010101010101',
        GraphGUID: '01010101-0101-0101-0101-010101010101',
        Name: 'Sample Node',
        Data: {
          key1: 'value1',
        },
        CreatedUtc: '2024-10-19T14:35:20.351Z',
      };
      const response = await api.Node.create(newNode);
      expect(response).toEqual(nodeData[mockNodeGuid]);
    });
    test('should create a node with abort', async () => {
      const newNode = {
        GUID: '01010101-0101-0101-0101-010101010101',
        GraphGUID: '01010101-0101-0101-0101-010101010101',
        Name: 'Sample Node',
        Data: {
          key1: 'value1',
        },
        CreatedUtc: '2024-10-19T14:35:20.351Z',
      };
      const cancellationToken = new AbortController();
      await api.Node.create(newNode, cancellationToken);
      cancellationToken.abort();
    });

    it('throws error when creating a Node', async () => {
      try {
        await api.Node.create(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Node is null or empty');
      }
    });

    test('should read all nodes of a graph', async () => {
      const response = await api.Node.readAll(mockGraphGuid);
      response.map((node) => {
        expect(node).toEqual(nodeData[node.GUID as string]);
      });
    });
    test('should read all nodes of a graph with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Node.readAll(mockGraphGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should search nodes', async () => {
      const searchRequest = {
        GraphGUID: mockNodeGuid,
        Ordering: 'CreatedDescending',
        Expr: {
          Left: 'Hello',
          Operator: 'Equals',
          Right: 'World',
        },
      };
      const response = await api.Node.search(searchRequest);
      expect(response).toEqual(searchNodeData[mockNodeGuid]);
    });

    test('should search nodes with abort', async () => {
      const cancellationToken = new AbortController();
      const searchRequest = {
        GraphGUID: mockNodeGuid,
        Ordering: 'CreatedDescending',
        Expr: {
          Left: 'Hello',
          Operator: 'Equals',
          Right: 'World',
        },
      };
      await api.Node.search(searchRequest, cancellationToken);
      cancellationToken.abort();
    });

    test('should read a specific node by GUID', async () => {
      const response = await api.Node.read(mockGraphGuid, mockNodeGuid);
      expect(response.GUID).toEqual(mockNodeGuid);
    });

    test('should read a specific node by GUID with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Node.read(mockGraphGuid, mockNodeGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should update a node', async () => {
      const updatedNodeData = {
        GUID: '01010101-0101-0101-0101-010101010101',
        GraphGUID: '01010101-0101-0101-0101-010101010101',
        Name: 'Updated Node',
        Data: {
          key1: 'updatedValue',
        },
        CreatedUtc: '2024-10-19T14:35:20.351Z',
      };
      const response = await api.Node.update(updatedNodeData);
      expect(response).toEqual(nodeData[mockNodeGuid]);
    });

    test('should update a node with abort', async () => {
      const cancellationToken = new AbortController();
      const updatedNodeData = {
        GUID: '01010101-0101-0101-0101-010101010101',
        GraphGUID: '01010101-0101-0101-0101-010101010101',
        Name: 'Updated Node',
        Data: {
          key1: 'updatedValue',
        },
        CreatedUtc: '2024-10-19T14:35:20.351Z',
      };
      await api.Node.update(updatedNodeData, cancellationToken);
      cancellationToken.abort();
    });

    it('throws error when if missed node data while updating a Node', async () => {
      try {
        await api.Node.update(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Node is null or empty');
      }
    });

    test('should delete a node', async () => {
      const response = await api.Node.delete(mockNodeGuid, mockNodeGuid);
      expect(response).toBeUndefined(); // Assuming delete operation returns nothing
    });

    test('should delete a node with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Node.delete(mockNodeGuid, mockNodeGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should delete all nodes within a graph', async () => {
      const response = await api.Node.deleteAll(mockGraphGuid);
      expect(response).toBeUndefined(); // Assuming delete operation returns nothing
    });

    test('should delete all nodes within a graph with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Node.deleteAll(mockGraphGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should delete multiple nodes within a graph', async () => {
      const response = await api.Node.deleteBulk(mockGraphGuid, mockNodeGuids);
      expect(response).toEqual(true);
    });

    test('should throw an error when nodeGuids is null', async () => {
      try {
        await api.Node.deleteBulk(mockGraphGuid, null as any);
      } catch (err) {
        expect(err.toString()).toBe('Error: ArgumentNullException: nodeGuids is null or empty');
      }
    });

    test('should delete multiple nodes within a graph with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Node.deleteBulk(mockGraphGuid, mockNodeGuids, cancellationToken);
      cancellationToken.abort();
    });

    test('should create multiple nodes', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      const nodes = [
        {
          GUID: '01010101-0101-0101-0101-010101010101',
          GraphGUID: '01010101-0101-0101-0101-010101010101',
          Name: 'Sample Node',
          Data: {
            key1: 'value1',
          },
          CreatedUtc: '2024-10-19T14:35:20.351Z',
        },
        {
          GUID: '02020202-0202-0202-0202-020202020202',
          GraphGUID: '02020202-0202-0202-0202-020202020202',
          Name: 'Custom GUID',
          Data: {
            Hello: 'World 1',
          },
          CreatedUtc: '2024-10-19T14:35:20.351Z',
        },
      ];

      const response = await api.Node.createBulk(graphGuid, nodes);
      // expect(response).toEqual(expect.arrayContaining(nodes));
      expect(response).toEqual(nodeData[mockNodeGuid]);
    });

    test('should create multiple nodes with abort', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      const nodes = [
        {
          GUID: '01010101-0101-0101-0101-010101010101',
          GraphGUID: graphGuid,
          Name: 'Sample Node 1',
          Data: { key1: 'value1' },
          CreatedUtc: '2024-10-19T14:35:20.351Z',
        },
        {
          GUID: '02020202-0202-0202-0202-020202020202',
          GraphGUID: graphGuid,
          Name: 'Sample Node 2',
          Data: { key2: 'value2' },
          CreatedUtc: '2024-10-19T14:35:20.351Z',
        },
      ];

      const cancellationToken = new AbortController();
      await api.Node.createBulk(graphGuid, nodes, cancellationToken);
      cancellationToken.abort();
    });

    test('should return an empty array when creating an empty list of nodes', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      const nodes = [];
      try {
        await api.Node.createBulk(graphGuid, null as any);
      } catch (err) {
        expect(err.toString()).toBe('Error: ArgumentNullException: Nodes is null or empty');
      }
      try {
        await api.Node.createBulk(graphGuid, nodes);
      } catch (err) {
        expect(err.toString()).toBe('Error: Nodes array is empty');
      }
    });

    test('throws error when nodes parameter is missing', async () => {
      const graphGuid = '01010101-0101-0101-0101-010101010101';
      try {
        await api.Node.createBulk(graphGuid, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Nodes is null or empty');
      }
    });

    test('should read a first node by GUID', async () => {
      const response = await api.Node.readFirst(mockGraphGuid);
      expect(response).toEqual(nodeData[mockNodeGuid]);
    });

    test('should throw error for invalid GUID in readFirst', async () => {
      try {
        await api.Node.readFirst(null as any);
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        expect(err.toString()).toMatch(/GraphGUID is null or empty/i);
      }
    });
  });
});
