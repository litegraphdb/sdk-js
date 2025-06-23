export const mockLabelGuid = '00000000-0000-0000-0000-000000000000';

export const labelData = {
  GUID: mockLabelGuid,
  TenantGUID: '00000000-0000-0000-0000-000000000000',
  GraphGUID: '00000000-0000-0000-0000-000000000000',
  NodeGUID: '00000000-0000-0000-0000-000000000000',
  Label: 'test',
  CreatedUtc: '2025-01-16T07:23:26.752372Z',
};

export const labelMockApiResponse = [labelData];

export const mockEnumerateLabelsResponse = {
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
  Objects: [labelData],
};