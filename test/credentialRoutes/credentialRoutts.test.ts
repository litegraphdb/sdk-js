import { mockCredentialGuid, credentialData, mockEnumerateCredentialsResponse } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('credentialRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Credential Route', () => {
    test('should check if credential exists by GUID', async () => {
      const response = await api.Credential.exists(mockCredentialGuid);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should throw error when checking if credential exists with null or empty GUID', async () => {
      try {
        await api.Credential.exists(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    test('should create a credential', async () => {
      const newCredential = {
        UserGUID: '00000000-0000-0000-0000-000000000000',
        Name: 'New credential',
        BearerToken: 'foobar',
        Active: true,
      };
      const response = await api.Credential.create(newCredential);
      expect(response).toEqual(credentialData);
    });

    it('throws error when creating a credential', async () => {
      try {
        await api.Credential.create(undefined as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toEqual('Error: ArgumentNullException: credential is null or empty');
      }
    });

    test('should read all credentials', async () => {
      const response = await api.Credential.readAll();
      response.forEach((credential) => {
        expect(credential).toEqual(credentialData);
      });
    });

    test('should read a specific credential by GUID', async () => {
      const response = await api.Credential.read(mockCredentialGuid);
      expect(response).toEqual(credentialData);
    });

    test('should throw error when reading a credential with null or empty GUID', async () => {
      try {
        await api.Credential.read(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    test('should update a credential', async () => {
      const updateCredential = {
        GUID: mockCredentialGuid,
        CreatedUtc: '2024-12-27T18:12:38.653402Z',
        LastUpdateUtc: '2024-12-27T18:12:38.653402Z',
        UserGUID: mockCredentialGuid,
        Name: 'Updated credential',
        BearerToken: 'default',
        Active: true,
      };
      const response = await api.Credential.update(updateCredential);
      expect(response).toEqual(credentialData);
    });

    it('throws error when if missed credential data while updating a Credential', async () => {
      try {
        await api.Credential.update(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: credential is null or empty');
      }
    });

    it('throws error when if missed credential guid while updating a Credential', async () => {
      try {
        const updateCredential = {
          UserGUID: mockCredentialGuid,
          Name: 'Updated credential',
          BearerToken: 'default',
          Active: true,
          GUID: '',
          CreatedUtc: '',
          LastUpdateUtc: '',
        };
        await api.Credential.update(updateCredential);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: credential.GUID is null or empty');
      }
    });

    test('should delete a credential', async () => {
      const response = await api.Credential.delete(mockCredentialGuid);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete a credential with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Credential.delete(mockCredentialGuid, cancellationToken);
      cancellationToken.abort();
    });

    test('should throw error when deleting a credential with null or empty GUID', async () => {
      try {
        await api.Credential.delete(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
      }
    });

    test('should enumerate credentials', async () => {
      const response = await api.Credential.enumerate();
      expect(response).toEqual(mockEnumerateCredentialsResponse);
    });

    test('should enumerate credentials with request', async () => {
      const response = await api.Credential.enumerateAndSearch({
        Ordering: 'CreatedDescending',
        IncludeData: false,
        IncludeSubordinates: false,
        MaxResults: 5,
        ContinuationToken: null,
        Labels: [],
        Tags: {},
        Expr: {},
      });
      expect(response).toEqual(mockEnumerateCredentialsResponse);
    });

    test('should read multiple credentials', async () => {
      const response = await api.Credential.readMany([mockCredentialGuid]);
      expect(response).toEqual([credentialData]);
    });

    test('should throw error when reading multiple credentials with null or empty credentialGuids', async () => {
      try {
        await api.Credential.readMany(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: credentialGuids is null or empty');
      }
    });
  });
});
