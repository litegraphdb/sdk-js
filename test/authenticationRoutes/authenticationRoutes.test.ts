import { api } from '../setupTest';
import { mockTenants, mockTokenDetails, mockToken } from './mockData';
import { handlers } from './handler';
import { getServer } from '../server';

const server = getServer(handlers);

describe('Authentication Tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe('Authentication Routes', () => {
    test('should get tenants for email', async () => {
      const tenants = await api.Authentication.getTenantsForEmail('test@test.com');
      expect(tenants).toEqual(mockTenants);
    });

    it('should get token details', async () => {
      const tokenDetails = await api.Authentication.getTokenDetails('test');
      expect(tokenDetails).toEqual(mockTokenDetails);
    });

    it('should generate token', async () => {
      const token = await api.Authentication.generateToken('test@test.com', 'test', 'test');
      expect(token).toEqual(mockToken);
    });

    it('should throw error when if not email while generating token', async () => {
      await expect(api.Authentication.generateToken('', 'test', 'test')).rejects.toThrow();
    });

    it('should throw error when if not password generating token', async () => {
      await expect(api.Authentication.generateToken('test@test.com', '', 'test')).rejects.toThrow();
    });

    it('should throw error when if not tenantId while generating token', async () => {
      await expect(api.Authentication.generateToken('test@test.com', 'test', '')).rejects.toThrow();
    });

    it('should throw error when if not token while getting token details', async () => {
      await expect(api.Authentication.getTokenDetails('')).rejects.toThrow();
    });

    it('should throw error when if not token while getting tenants for email', async () => {
      await expect(api.Authentication.getTenantsForEmail('')).rejects.toThrow();
    });
  });
});
