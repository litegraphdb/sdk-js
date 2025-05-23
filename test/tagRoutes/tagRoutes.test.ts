import { mockTagGuid, tagData } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('tagRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Tag Route', () => {
    test('should check if tag exists by GUID', async () => {
      const response = await api.existsTag(mockTagGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a tag', async () => {
      const newTag = {
        GUID: mockTagGuid,
        GraphGUID: '00000000-0000-0000-0000-000000000000',
        NodeGUID: '158c634b-53d2-4a60-be87-61c39c990451',
        EdgeGUID: 'cdf28e4f-9a28-4a70-b246-e3ae9ccb35d6',
        Key: 'mykey',
        Value: 'myvalue',
      };
      const response = await api.createTag(newTag);
      expect(response).toEqual(tagData);
    });

    test('should create multiple tags', async () => {
      const response = await api.createTags([
        {
          GraphGUID: '00000000-0000-0000-0000-000000000000',
          NodeGUID: '158c634b-53d2-4a60-be87-61c39c990451',
          EdgeGUID: 'cdf28e4f-9a28-4a70-b246-e3ae9ccb35d6',
          Key: 'mykey',
          Value: 'myvalue',
        },
      ]);
      response.forEach((tag) => {
        expect(tag).toEqual(tagData);
      });
    });

    test('should throw error when creating multiple tags with empty array', async () => {
      try {
        await api.createTags(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tags is null or empty');
      }
      try {
        await api.createTags([]);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Tags array is empty');
      }
    });
    it('throws error when creating a tag', async () => {
      try {
        await api.createTag(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tag is null or empty');
      }
    });

    test('should read all tags', async () => {
      const response = await api.readAllTags();
      response.forEach((tag) => {
        expect(tag).toEqual(tagData);
      });
    });

    test('should read a specific tag by GUID', async () => {
      const response = await api.readTag(mockTagGuid);
      expect(response).toEqual(tagData);
    });

    test('should update a tag', async () => {
      const updateTag = {
        Key: 'updatedkey',
        Value: 'myvalue',
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
      };
      const response = await api.updateTag(updateTag, mockTagGuid);
      expect(response).toEqual(tagData);
    });

    it('throws error when if missed tag data while updating a tag', async () => {
      try {
        await api.updateTag(null as any, mockTagGuid);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tag is null or empty');
      }
    });

    it('throws error when if missed tag guid while updating a tag', async () => {
      try {
        const updateTag = {
          Key: 'updatedkey',
          Value: 'myvalue',
          CreatedUtc: '2024-12-27T18:12:38.653402Z',
          LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
        };
        await api.updateTag(updateTag, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    test('should delete a tag', async () => {
      const response = await api.deleteTag(mockTagGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete multiple tags', async () => {
      const response = await api.deleteTags([mockTagGuid]);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete multiple tags', async () => {
      const response = await api.deleteTags([mockTagGuid]);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete multiple tags with abort', async () => {
      const cancellationToken = new AbortController();
      await api.deleteTags([mockTagGuid], cancellationToken);
      cancellationToken.abort();
    });

    test('should throw error when deleting multiple tags with empty array', async () => {
      try {
        await api.deleteTags(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guids is null or empty');
      }
      try {
        await api.deleteTags([]);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: Tags array is empty');
      }
    });
    test('should delete a tag with abort', async () => {
      const cancellationToken = new AbortController();
      await api.deleteTag(mockTagGuid, cancellationToken);
      cancellationToken.abort();
    });
  });
});
