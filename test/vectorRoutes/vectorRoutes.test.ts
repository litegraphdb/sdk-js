import { mockEnumerateVectorsResponse, mockVectorGuid, vectorData } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('vectorRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Vector Route', () => {
    test('should check if vector exists by GUID', async () => {
      const response = await api.Vector.exists(mockVectorGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a vector', async () => {
      const newVector = {
        GUID: mockVectorGuid,
        TenantGUID: '987e6543-a21b-45c3-b678-789012345678',
        GraphGUID: '321e6543-a21b-45c3-b678-789012345679',
        NodeGUID: '123e4567-e89b-12d3-a456-426614174001',
        EdgeGUID: '123e4567-e89b-12d3-a456-426614174002',
        Model: 'SampleModel',
        Dimensionality: 128,
        Content: 'Sample vector content',
        Vectors: [0.1, 0.2, 0.3, 0.4, 0.5],
        CreatedUtc: '2025-01-10T10:00:00.000Z',
        LastUpdateUtc: '2025-01-10T12:00:00.000Z',
      };
      const response = await api.Vector.createBulk([
        {
          GraphGUID: '321e6543-a21b-45c3-b678-789012345679',
          NodeGUID: '123e4567-e89b-12d3-a456-426614174001',
          EdgeGUID: '123e4567-e89b-12d3-a456-426614174002',
          Model: 'SampleModel',
          Dimensionality: 128,
          Content: 'Sample vector content',
          Vectors: [0.1, 0.2, 0.3, 0.4, 0.5],
        },
      ]);
      response.forEach((vector) => {
        expect(vector).toEqual(vectorData);
      });
    });

    test('should throw error when creating multiple vectors with empty array', async () => {
      try {
        await api.Vector.createBulk(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: vectors is null or empty');
      }
      try {
        await api.Vector.createBulk([]);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Vectors array is empty');
      }
    });

    test('should create a vector', async () => {
      const response = await api.Vector.create(vectorData);
      expect(response).toEqual(vectorData);
    });

    it('throws error when creating a vector', async () => {
      try {
        await api.Vector.create(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: vector is null or empty');
      }
    });

    test('should read all vectors', async () => {
      const response = await api.Vector.readAll();
      response.forEach((vector) => {
        expect(vector).toEqual(vectorData);
      });
    });

    test('should read a specific vector by GUID', async () => {
      const response = await api.Vector.read(mockVectorGuid);
      expect(typeof response.CreatedUtc).toEqual(typeof vectorData.CreatedUtc);
    });

    test('should update a vector', async () => {
      const updateVector = {
        TenantGUID: '987e6543-a21b-45c3-b678-789012345678',
        GraphGUID: '321e6543-a21b-45c3-b678-789012345679',
        NodeGUID: '123e4567-e89b-12d3-a456-426614174001',
        EdgeGUID: '123e4567-e89b-12d3-a456-426614174002',
        Model: 'SampleModel',
        Dimensionality: 128,
        Content: 'Sample vector content',
        Vectors: [0.1, 0.2, 0.3, 0.4, 0.5],
        CreatedUtc: '2025-01-10T10:00:00.000Z',
        LastUpdateUtc: '2025-01-10T12:00:00.000Z',
        GUID: mockVectorGuid,
      };
      const response = await api.Vector.update(updateVector);
      expect(response).toEqual(vectorData);
    });

    it('throws error when if missed vector guid while updating a vector', async () => {
      try {
        await api.Vector.update(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: vector is null or empty');
      }
    });

    it('throws error when if missed vector guid while updating a vector', async () => {
      try {
        const updateVector = {
          TenantGUID: '987e6543-a21b-45c3-b678-789012345678',
          GraphGUID: '321e6543-a21b-45c3-b678-789012345679',
          NodeGUID: '123e4567-e89b-12d3-a456-426614174001',
          EdgeGUID: '123e4567-e89b-12d3-a456-426614174002',
          Model: 'SampleModel',
          Dimensionality: 128,
          Content: 'Sample vector content',
          Vectors: [0.1, 0.2, 0.3, 0.4, 0.5],
          CreatedUtc: '2025-01-10T10:00:00.000Z',
          LastUpdateUtc: '2025-01-10T12:00:00.000Z',
          GUID: '',
        };
        await api.Vector.update(updateVector);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: vector.GUID is null or empty');
      }
    });

    test('should delete a vector', async () => {
      const response = await api.Vector.delete(mockVectorGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete a vector with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Vector.delete(mockVectorGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should delete multiple vectors', async () => {
      const response = await api.Vector.deleteBulk([mockVectorGuid]);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should throw error when deleting multiple vectors with empty array', async () => {
      try {
        await api.Vector.deleteBulk(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guids is null or empty');
      }
      try {
        await api.Vector.deleteBulk([]);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Vectors array is empty');
      }
    });

    test('should enumerate vectors', async () => {
      const response = await api.Vector.enumerate();
      expect(response).toEqual(mockEnumerateVectorsResponse);
    });

    test('should enumerate vectors with request', async () => {
      const response = await api.Vector.enumerateAndSearch({
        Ordering: 'CreatedDescending',
        IncludeData: false,
        IncludeSubordinates: false,
        MaxResults: 5,
        ContinuationToken: null,
        Labels: [],
        Tags: {},
        Expr: {},
      });
      expect(response).toEqual(mockEnumerateVectorsResponse);
    });

    test('should read multiple vectors', async () => {
      const response = await api.Vector.readMany([mockVectorGuid]);
      expect(response).toEqual([vectorData]);
    });

    test('should throw error when reading multiple vectors with null or empty vectorGuids', async () => {
      try {
        await api.Vector.readMany(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: vectorGuids is null or empty');
      }
    });
  });
});
