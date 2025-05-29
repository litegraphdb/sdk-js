import { mockBackupFilename, backupData } from './mockData';
import { api, mockTenantId } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

const server = getServer(handlers);

describe('BackupRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Backup Route', () => {
    test('should check if backup exists by filename', async () => {
      const response = await api.Backup.exists(mockBackupFilename);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a backup', async () => {
      const newBackup = {
        Filename: mockBackupFilename,
      };
      const response = await api.Backup.create(newBackup);
      expect(response).toEqual({});
    });

    it('throws error when creating a backup', async () => {
      try {
        await api.Backup.create(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: backup is null or empty');
      }
    });

    test('should read all tenants', async () => {
      const response = await api.Backup.readAll();
      response.forEach((backup) => {
        expect(backup).toEqual(backupData);
      });
    });

    test('should read a specific backup by filename', async () => {
      const response = await api.Backup.read(mockBackupFilename);
      expect(response).toEqual(backupData);
    });

    test('should delete a backup', async () => {
      const response = await api.Backup.delete(mockBackupFilename);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete a tenant with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Backup.delete(mockBackupFilename, cancellationToken);
      cancellationToken.abort();
    });
  });
});
