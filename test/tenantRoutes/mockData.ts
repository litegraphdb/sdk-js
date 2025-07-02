export const mockTenantId = '00000000-0000-0000-0000-000000000000';

export const tenantData = {
  GUID: '00000000-0000-0000-0000-000000000000',
  TenantGUID: '00000000-0000-0000-0000-000000000000',
  FirstName: 'Again Updated',
  LastName: 'User',
  Email: 'anotherbbb@user.com',
  Password: 'password',
  Active: true,
  CreatedUtc: '2024-12-27T22:19:02.045989Z',
  LastUpdateUtc: '2025-01-16T07:14:01.282869Z',
};

export const tenantMockApiResponse = [tenantData];

export const mockEnumerateTenantsResponse = {
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
  Objects: [
    {
      GUID: '00000000-0000-0000-0000-000000000000',
      Name: 'Default tenant',
      Active: true,
      CreatedUtc: '2025-06-23T05:49:56.798615Z',
      LastUpdateUtc: '2025-06-23T05:49:56.798112Z',
    },
  ],
};

export const mockTenantStatisticsResponse = {
  [mockTenantId]: {
    Graphs: 1,
    Nodes: 1,
    Edges: 1,
    Labels: 1,
    Tags: 1,
    Vectors: 1,
  },
};
