import { mockTenantId, tenantData } from './mockData';
import { api } from '../setupTest'; // Adjust paths as needed
import { handlers } from './handlers';
import { getServer } from '../server';

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
      const response = await api.tenantExists(mockTenantId);
      expect(response).toBe(true); // Assuming the mock returns true
    });

    test('should create a tenant', async () => {
      const newTenant = {
        GUID: mockTenantId,
        Name: 'Another tenant',
        Active: true,
      };
      const response = await api.createTenant(newTenant);
      expect(response).toEqual(tenantData);
    });

    it('throws error when creating a tenant', async () => {
      try {
        await api.createTenant(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    test('should read all tenants', async () => {
      const response = await api.readTenants();
      response.forEach((tenant) => {
        expect(tenant).toEqual(tenantData);
      });
    });

    test('should read a specific tenant by GUID', async () => {
      const response = await api.readTenant(mockTenantId);
      expect(response).toEqual(tenantData);
    });

    test('should update a tenant', async () => {
      const updateTenant = {
        GUID: mockTenantId,
        Name: 'Updated tenant',
        Active: true,
      };
      const response = await api.updateTenant(updateTenant);
      expect(response).toEqual(tenantData);
      expect(response.GUID).toBe(mockTenantId);
    });

    it('throws error when if missed tenant data while updating a Tenant', async () => {
      try {
        await api.updateTenant(null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant is null or empty');
      }
    });

    it('throws error when if missed tenant guid while updating a Tenant', async () => {
      try {
        const updateTenant = {
          Name: 'Updated tenant',
          Active: true,
        };
        await api.updateTenant(updateTenant, null as any);
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: tenant.GUID is null or empty');
      }
    });

    test('should delete a tenant', async () => {
      const response = await api.deleteTenant(mockTenantId);
      expect(response).toBe(true); // Assuming delete operation returns nothing
    });

    test('should delete a tenant with abort', async () => {
      const cancellationToken = new AbortController();
      await api.deleteTenant(mockTenantId, cancellationToken);
      cancellationToken.abort();
    });
  });
});
