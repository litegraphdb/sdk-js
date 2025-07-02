export const mockTagGuid = '00000000-0000-0000-0000-000000000000';

export const tagData = {
  GUID: mockTagGuid,
  TenantGUID: '00000000-0000-0000-0000-000000000000',
  GraphGUID: '00000000-0000-0000-0000-000000000000',
  NodeGUID: '158c634b-53d2-4a60-be87-61c39c990451',
  EdgeGUID: 'cdf28e4f-9a28-4a70-b246-e3ae9ccb35d6',
  Key: 'mykey',
  Value: 'myvalue',
  CreatedUtc: '2025-01-16T09:40:26.979741Z',
  LastUpdateUtc: '2025-01-16T09:40:26.979741Z',
};

export const tagMockApiResponse = [tagData];

export const mockEnumerateTagsResponse = {
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
  Objects: [tagData],
};
