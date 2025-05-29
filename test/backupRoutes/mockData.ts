import { BackupMetaData } from '../../src/types';

export const mockBackupFilename = 'test2.db';

export const backupData: BackupMetaData = {
  Filename: mockBackupFilename,
  CreatedUtc: '2024-12-27T22:19:02.045989Z',
  Length: 100,
  MD5Hash: '1234567890',
  SHA1Hash: '1234567890',
  SHA256Hash: '1234567890',
  LastUpdateUtc: '2024-12-27T22:19:02.045989Z',
  LastAccessUtc: '2024-12-27T22:19:02.045989Z',
};

export const backupMockApiResponse = [backupData];
