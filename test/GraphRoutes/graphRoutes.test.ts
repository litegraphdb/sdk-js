import {
  mockGraphGuid,
  graphData,
  searchGraphData,
  mockEnumerateGraphsResponse,
  mockGraphStatisticsResponse,
  mockVectorIndexStatsResponse,
  mockVectorIndexConfigResponse,
} from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('GraphRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  describe('GraphRoute', () => {
    test('should check if graph exists by GUID', async () => {
      const response = await api.Graph.exists(mockGraphGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a graph', async () => {
      const response = await api.Graph.create({
        Name: 'Sample Node',
      });
      expect(response.GUID).toEqual(mockGraphGuid);
      expect(response).toEqual(graphData[mockGraphGuid]);
    });

    it('throws error when creating a Graph', async () => {
      try {
        await api.Graph.create(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Graph is null or empty');
      }
    });

    test('should read all graphs', async () => {
      const response = await api.Graph.readAll();
      response.map((graph) => {
        expect(graph).toEqual(graphData[graph.GUID]);
      });
    });

    test('should search graphs', async () => {
      const searchRequest = {
        Ordering: 'CreatedDescending',
        Expr: {
          Left: 'Hello',
          Operator: 'Equals',
          Right: 'World',
        },
      };
      const response = await api.Graph.search(searchRequest);
      expect(response).toEqual(searchGraphData[mockGraphGuid]);
    });

    test('should throw error when searching graphs with null or empty search request', async () => {
      try {
        await api.Graph.search(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Search Request is null or empty');
      }
    });

    test('should read a specific graph by GUID', async () => {
      const response = await api.Graph.read(mockGraphGuid);
      expect(response.GUID).toEqual(mockGraphGuid);
    });

    test('should update a graph', async () => {
      const updatedGraphData = {
        GUID: '01010101-0101-0101-0101-010101010101',
        GraphGUID: '01010101-0101-0101-0101-010101010101',
        Name: 'Sample Node',
        Data: {
          key1: 'value1',
        },
        CreatedUtc: '2024-10-19T14:35:20.351Z',
      };
      const response = await api.Graph.update(updatedGraphData as any);
      expect(response).toEqual(graphData[mockGraphGuid]);
    });

    it('throws error when if missed graph data while updating a Graph', async () => {
      try {
        await api.Graph.update(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Graph is null or empty');
      }
    });

    test('should delete a graph', async () => {
      const response = await api.Graph.delete(mockGraphGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should export a graph to GEXF format', async () => {
      const response = await api.Graph.exportGexf(mockGraphGuid);
      expect(response).toContain('<?xml'); // Checking for GEXF format
    });

    test('should export a graph to GEXF format with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Graph.exportGexf(mockGraphGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should read the first node of a graph by GUID', async () => {
      const response = await api.Graph.readFirst({});
      expect(response).toBeDefined();
      expect(response).toEqual(graphData[mockGraphGuid]);
    });

    test('should throw error for invalid GUID in readFirst', async () => {
      try {
        await api.Graph.readFirst(null as any);
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        expect(err.toString()).toMatch(/Request is null or empty/i);
      }
    });

    test('should enumerate graphs', async () => {
      const response = await api.Graph.enumerate();
      expect(response).toEqual(mockEnumerateGraphsResponse);
    });

    test('should enumerate graphs with request', async () => {
      const response = await api.Graph.enumerateAndSearch({
        Ordering: 'CreatedDescending',
        IncludeData: false,
        IncludeSubordinates: false,
        MaxResults: 5,
        ContinuationToken: null,
        Labels: [],
        Tags: {},
        Expr: {},
      });
      expect(response).toEqual(mockEnumerateGraphsResponse);
    });

    test('should read all graphs statistics', async () => {
      const response = await api.Graph.readStatistics();
      expect(response).toEqual(mockGraphStatisticsResponse);
    });

    test('should read a graph statistics', async () => {
      const response = await api.Graph.readStatistic(mockGraphGuid);
      expect(response).toEqual(mockGraphStatisticsResponse[mockGraphGuid]);
    });

    test('should throw error when reading a graph statistics with null or empty graphGuid', async () => {
      try {
        await api.Graph.readStatistic(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: graphGuid is null or empty');
      }
    });

    test('should read multiple graphs', async () => {
      const response = await api.Graph.readMany([mockGraphGuid]);
      expect(response).toEqual([graphData[mockGraphGuid]]);
    });

    test('should throw error when reading multiple graphs with null or empty graphGuids', async () => {
      try {
        await api.Graph.readMany(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: graphGuids is null or empty');
      }
    });

    test('should enable vector index', async () => {
      const response = await api.Graph.enableVectorIndex(mockGraphGuid, {
        VectorIndexType: 'HnswSqlite',
        VectorIndexFile: 'graph-00000000-0000-0000-0000-000000000000-hnsw.db',
        VectorDimensionality: 384,
        VectorIndexM: 16,
        VectorIndexEf: 50,
        VectorIndexEfConstruction: 200,
        VectorIndexThreshold: null,
      });
      expect(response).toEqual(mockVectorIndexConfigResponse);
    });

    test('should rebuild vector index', async () => {
      const response = await api.Graph.rebuildVectorIndex(mockGraphGuid);
      expect(response).toEqual(true);
    });

    test('should read vector index stats', async () => {
      const response = await api.Graph.readVectorIndexStats(mockGraphGuid);
      expect(response).toEqual(mockVectorIndexStatsResponse);
    });

    test('should read vector index config', async () => {
      const response = await api.Graph.readVectorIndexConfig(mockGraphGuid);
      expect(response).toEqual(mockVectorIndexConfigResponse);
    });

    test('should delete vector index', async () => {
      const response = await api.Graph.deleteVectorIndex(mockGraphGuid);
      expect(response).toEqual(true);
    });
  });
});
