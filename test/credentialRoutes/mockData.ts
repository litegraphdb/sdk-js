import { CredentialMetadata } from '../../src/types';

export const mockCredentialGuid = '00000000-0000-0000-0000-000000000000';

export const credentialData: CredentialMetadata = {
  GUID: '00000000-0000-0000-0000-000000000000',
  TenantGUID: '00000000-0000-0000-0000-000000000000',
  UserGUID: '00000000-0000-0000-0000-000000000000',
  Name: 'New credential',
  BearerToken: 'foobar',
  Active: true,
  CreatedUtc: '2025-01-17T09:12:09.761247Z',
  LastUpdateUtc: '2025-01-17T09:12:09.761247Z',
};

export const credentialMockApiResponse = [credentialData];

export const mockEnumerateCredentialsResponse = {
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
  Objects: [credentialData],
};