import {
  mockEnumerateTenantsResponse,
  mockTenantId,
  mockTenantStatisticsResponse,
  tenantData,
  tenantMockApiResponse,
} from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';
import { TenantMetaData } from '../../src/types';

const server = getServer(handlers);

describe('TenantRoute Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Tenant Route', () => {
    test('should check if tenant exists by GUID', async () => {
      const response = await api.Tenant.exists(mockTenantId);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a tenant', async () => {
      const newTenant = {
        GUID: mockTenantId,
        Name: 'Another tenant',
        Active: true,
      };
      const response = await api.Tenant.create(newTenant);
      expect(response).toEqual(tenantData);
    });

    it('throws error when creating a tenant', async () => {
      try {
        await api.Tenant.create(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    test('should read all tenants', async () => {
      const response = await api.Tenant.readAll();
      response.forEach((tenant) => {
        expect(tenant).toEqual(tenantData);
      });
    });

    test('should read a specific tenant by GUID', async () => {
      const response = await api.Tenant.read(mockTenantId);
      expect(response).toEqual(tenantData);
    });

    test('should update a tenant', async () => {
      const updateTenant: TenantMetaData = {
        CreatedUtc: '2024-12-27T22:19:02.045989Z',
        LastUpdateUtc: '2024-12-27T22:19:02.045989Z',
        GUID: mockTenantId,
        Name: 'Updated tenant',
        Active: true,
      };
      const response = await api.Tenant.update(updateTenant);
      expect(response).toEqual(tenantData);
      expect(response.GUID).toBe(mockTenantId);
    });

    it('throws error when if missed tenant data while updating a Tenant', async () => {
      try {
        await api.Tenant.update(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    it('throws error when if missed tenant guid while updating a Tenant', async () => {
      try {
        const updateTenant: TenantMetaData = {
          CreatedUtc: '2024-12-27T22:19:02.045989Z',
          LastUpdateUtc: '2024-12-27T22:19:02.045989Z',
          GUID: mockTenantId,
          Name: 'Updated tenant',
          Active: true,
        };
        await api.Tenant.update(updateTenant, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant.GUID is null or empty');
      }
    });

    test('should delete a tenant', async () => {
      const response = await api.Tenant.delete(mockTenantId);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete a tenant with abort', async () => {
      const cancellationToken = new AbortController();
      await api.Tenant.delete(mockTenantId, undefined, cancellationToken);
      cancellationToken.abort();
    });

    test('should enumerate tenants', async () => {
      const response = await api.Tenant.enumerate();
      expect(response).toEqual(mockEnumerateTenantsResponse);
    });

    test('should enumerate tenants with request', async () => {
      const response = await api.Tenant.enumerateAndSearch({
        Ordering: 'CreatedDescending',
        IncludeData: false,
        IncludeSubordinates: false,
        MaxResults: 5,
        ContinuationToken: null,
        Labels: [],
        Tags: {},
        Expr: {},
      });
      expect(response).toEqual(mockEnumerateTenantsResponse);
    });

    test('should read all tenants statistics', async () => {
      const response = await api.Tenant.readStatistics();
      expect(response).toEqual(mockTenantStatisticsResponse);
    });

    test('should read a tenant statistics', async () => {
      const response = await api.Tenant.readStatistic(mockTenantId);
      expect(response).toEqual(mockTenantStatisticsResponse[mockTenantId]);
    });

    test('should throw error when reading a tenant statistics with null or empty tenantGuid', async () => {
      try {
        await api.Tenant.readStatistic(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenantGuid is null or empty');
      }
    });
  });
});
