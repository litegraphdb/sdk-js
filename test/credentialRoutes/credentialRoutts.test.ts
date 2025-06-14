import { mockCredentialGuid, credentialData } from './mockData';
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

    test('should update a credential', async () => {
      const updateCredential = {
        UserGUID: mockCredentialGuid,
        Name: 'Updated credential',
        BearerToken: 'default',
        Active: true,
      };
      const response = await api.Credential.update(updateCredential, mockCredentialGuid);
      expect(response).toEqual(credentialData);
    });

    it('throws error when if missed credential data while updating a Credential', async () => {
      try {
        await api.Credential.update(null as any, mockCredentialGuid);
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
        };
        await api.Credential.update(updateCredential, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: guid is null or empty');
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
  });
});
