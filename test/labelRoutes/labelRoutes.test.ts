import { labelData, mockLabelGuid } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('labelRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Label Route', () => {
    test('should check if label exists by GUID', async () => {
      const response = await api.existsLabel(mockLabelGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a label', async () => {
      const newLabel = {
        EdgeGUID: '00000000-0000-0000-0000-000000000000',
        TenantGUID: '00000000-0000-0000-0000-000000000000',
        GraphGUID: '00000000-0000-0000-0000-000000000000',
        NodeGUID: '00000000-0000-0000-0000-000000000000',
        Label: 'test',
        CreatedUtc: '2025-01-16T07:23:26.752372Z',
        LastUpdateUtc: '2025-01-16T07:23:26.752417Z',
      };
      const response = await api.createLabel(newLabel);
      expect(response).toEqual(labelData);
    });

    test('should create multiple labels', async () => {
      const response = await api.createLabels([
        {
          EdgeGUID: '00000000-0000-0000-0000-000000000000',
          GraphGUID: '00000000-0000-0000-0000-000000000000',
          NodeGUID: '00000000-0000-0000-0000-000000000000',
          Label: 'test',
        },
      ]);
      response.forEach((label) => {
        expect(label).toEqual(labelData);
      });
    });

    test('should throw error when creating multiple labels with empty array', async () => {
      try {
        await api.createLabels(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: labels is null or empty');
      }
      try {
        await api.createLabels([]);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Labels array is empty');
      }
    });

    it('throws error when creating a label', async () => {
      try {
        await api.createLabel(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: label is null or empty');
      }
    });

    test('should read all labels', async () => {
      const response = await api.readAllLabels();
      response.forEach((label) => {
        expect(label).toEqual(labelData);
      });
    });

    test('should read a specific label by GUID', async () => {
      const response = await api.readLabel(mockLabelGuid);
      expect(response).toEqual(labelData);
    });

    test('should update a label', async () => {
      const updateLabel = {
        GUID: mockLabelGuid,
        Key: 'updatedkey',
        Value: 'myvalue',
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
      };
      const response = await api.updateLabel(updateLabel);
      expect(response).toEqual(labelData);
    });

    it('throws error when if missed label guid while updating a label', async () => {
      try {
        await api.updateLabel(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: label is null or empty');
      }
    });

    it('throws error when if missed label guid while updating a label', async () => {
      try {
        const updateLabel = {
          Key: 'updatedkey',
          Value: 'myvalue',
          CreatedUtc: '2024-12-27T18:12:38.653402Z',
          LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
        };
        await api.updateLabel(updateLabel, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: label.GUID is null or empty');
      }
    });

    test('should delete a label', async () => {
      const response = await api.deleteLabel(mockLabelGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete multiple labels', async () => {
      const response = await api.deleteLabels([mockLabelGuid]);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should throw error when deleting multiple labels with empty array', async () => {
      try {
        await api.deleteLabels(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guids is null or empty');
      }
      try {
        await api.deleteLabels([]);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Labels array is empty');
      }
    });

    test('should delete a label with abort', async () => {
      const cancellationToken = new AbortController();
      await api.deleteLabel(mockLabelGuid, cancellationToken);
      cancellationToken.abort();
    });
  });
});
