import { handlers } from './handlers';
import { getServer } from './server';
import { api, mockEndpoint, sdk, mockTenantId, mockAccessToken } from './setupTest';

const server = getServer(handlers);

describe('LiteGraph SDK', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
  describe('test Base SDK methods', () => {
    it('intialze sdk with default endpoint and tty updating headers', async () => {
      const api2 = new sdk.LiteGraphSdk(mockEndpoint, mockTenantId, mockAccessToken);
      expect(api2.config.defaultHeaders).toEqual({ Authorization: 'Bearer default' });
      expect(api2.config.header).toBe('[LiteGraphSdk] ');
      expect(api2.config.timeoutMs).toBe(300000);
    });

    it('should set endpoint and throw error for invalid endpoint', async () => {
      try {
        api.config.endpoint = mockEndpoint;
        api.config.endpoint = '';
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: ArgumentNullException: Endpoint is null or empty');
      }
    });

    it('should set timeout and throw error for invalid timeout', async () => {
      try {
        api.config.timeoutMs = 30000;
        api.config.timeoutMs = 0;
      } catch (err) {
        expect(err instanceof Error).toBe(true);
        expect(err.toString()).toBe('Error: TimeoutMs must be greater than 0.');
      }
    });

    it('should validate connectivity', async () => {
      const response = await api.validateConnectivity();
      expect(response).toBe(true);
    });

    it('should validate connectivity with abort', async () => {
      const cancellationToken = new AbortController();
      await api.validateConnectivity(cancellationToken);
      cancellationToken.abort();
    });

    //   it('calls retrieve methods without url param', async () => {
    //     try {
    //       await api.retrieve();
    //     } catch (err) {
    //       expect(err instanceof Error).toBe(true);
    //       expect(err.toString()).toBe('Error: ArgumentNullException: url is null or empty');
    //     }
    //   });

    //   it('calls retrieve methods without Modal param', async () => {
    //     try {
    //       await api.retrieve('path');
    //     } catch (err) {
    //       expect(err instanceof Error).toBe(true);
    //       expect(err.toString()).toBe('Error: ArgumentNullException: Modal Class is null or empty');
    //     }
    //   });
  });
});
