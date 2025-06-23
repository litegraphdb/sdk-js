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

export const mockEnumerateBackupsResponse = {
  Success: true,
  Timestamp: {
    Start: '2025-06-23T08:43:26.472061Z',
    End: '2025-06-23T08:43:26.475994Z',
    TotalMs: 3.93,
    Messages: {},
  },
  MaxResults: 1000,
  EndOfResults: true,
  TotalRecords: 1,
  RecordsRemaining: 0,
  Objects: [backupData],
};
