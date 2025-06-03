import { http } from 'msw';
import { HttpResponse } from 'msw';
import { handlers } from './handlers';
import { getServer } from './server';
import { api, mockEndpoint, sdk, mockTenantId, mockAccessToken } from './setupTest';
import { GraphSdk } from '../src/base/GraphSdk';
import { NodeSdk } from '../src/base/NodeSdk';
import { EdgeSdk } from '../src/base/EdgeSdk';
import { RouteSdk } from '../src/base/RouteSdk';
import { TenantSdk } from '../src/base/TenantSdk';
import { UserSdk } from '../src/base/UserSdk';
import { CredentialSdk } from '../src/base/CredentialSdk';
import { TagSdk } from '../src/base/TagSdk';
import { LabelSdk } from '../src/base/LabelSdk';
import { VectorSdk } from '../src/base/VectorSdk';
import SdkBase from '../src/base/SdkBase';
import { AuthenticationSdk } from '../src/base/AuthenticationSdk';
import { BackupSdk } from '../src/base/BackupSdk';
import { SdkConfiguration } from '../src/base/SdkConfiguration';

class TestSdk extends SdkBase {
  constructor(config: SdkConfiguration) {
    super(config);
  }

  // Expose protected methods for testing
  public get<T>(url: string, cancellationToken?: AbortController, headers?: any): Promise<T> {
    return super.get(url, cancellationToken, headers);
  }

  public putCreate<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return super.putCreate(url, obj, cancellationToken);
  }

  public putUpdate<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return super.putUpdate(url, obj, cancellationToken);
  }

  public post<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return super.post(url, obj, cancellationToken);
  }

  public postBatch<T>(url: string, obj: any, cancellationToken?: AbortController): Promise<T> {
    return super.postBatch(url, obj, cancellationToken);
  }
  public del(url: string, cancellationToken?: AbortController): Promise<boolean> {
    return super.del(url, cancellationToken);
  }

  public deleteMany(url: string, obj: any, cancellationToken?: AbortController): Promise<boolean> {
    return super.deleteMany(url, obj, cancellationToken);
  }
}

// Create a test instance
const testApi = new TestSdk(api.config);

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
    describe('SDK Module Initialization Tests', () => {
      it('should initialize all SDK modules correctly', () => {
        expect(api.Graph).toBeInstanceOf(GraphSdk);
        expect(api.Node).toBeInstanceOf(NodeSdk);
        expect(api.Edge).toBeInstanceOf(EdgeSdk);
        expect(api.Route).toBeInstanceOf(RouteSdk);
        expect(api.Tenant).toBeInstanceOf(TenantSdk);
        expect(api.User).toBeInstanceOf(UserSdk);
        expect(api.Credential).toBeInstanceOf(CredentialSdk);
        expect(api.Tag).toBeInstanceOf(TagSdk);
        expect(api.Label).toBeInstanceOf(LabelSdk);
        expect(api.Vector).toBeInstanceOf(VectorSdk);
        expect(api.Authentication).toBeInstanceOf(AuthenticationSdk);
        expect(api.Backup).toBeInstanceOf(BackupSdk);
      });

      it('should pass the same config to all modules', () => {
        const apiWithConfig = api as any; // Type assertion to bypass protection

        expect(apiWithConfig.Graph.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Node.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Edge.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Route.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Tenant.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.User.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Credential.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Tag.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Label.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Vector.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Authentication.config).toBe(apiWithConfig.config);
        expect(apiWithConfig.Backup.config).toBe(apiWithConfig.config);
      });
    });

    describe('Constructor and Logger Tests', () => {
      it('should throw error when config is null', () => {
        expect(() => {
          new sdk.LiteGraphSdk(null as any);
        }).toThrow();
      });

      it('should handle logging with null message', () => {
        const consoleSpy = jest.spyOn(console, 'debug').mockImplementation();
        consoleSpy.mockRestore();
      });
    });

    describe('Configuration Tests', () => {
      it('should initialize with default endpoint when no parameters provided', () => {
        const defaultSdk = new sdk.LiteGraphSdk();
        expect(defaultSdk.config.endpoint).toBe('http://localhost:8000/');
      });

      it('should initialize with custom endpoint', () => {
        const customSdk = new sdk.LiteGraphSdk('https://api.example.com/');
        expect(customSdk.config.endpoint).toBe('https://api.example.com/');
      });

      it('should initialize with endpoint, tenant, and access key', () => {
        const fullSdk = new sdk.LiteGraphSdk(mockEndpoint, mockTenantId, mockAccessToken);
        expect(fullSdk.config.endpoint).toBe(mockEndpoint);
        expect(fullSdk.config.tenantGuid).toBe(mockTenantId);
        expect(fullSdk.config.accessKey).toBe(mockAccessToken);
      });
    });

    describe('HTTP Method Tests', () => {
      describe('GET Method Tests', () => {
        it('should handle successful GET request', async () => {
          const response = await testApi.get(`${mockEndpoint}/test-get`);
          expect(response).toEqual({ data: 'test' });
        });

        it('should handle GET request with invalid URL', async () => {
          await expect(testApi.get('')).rejects.toThrow('URL cannot be null or empty');
        });

        it('should handle GET request with custom headers', async () => {
          const customHeaders = { 'X-Custom-Header': 'test-value' };
          const response = (await testApi.get(`${mockEndpoint}/test-get-headers`, undefined, customHeaders)) as {
            receivedHeader: string;
          };
          expect(response.receivedHeader).toBe('test-value');
        });

        it('should handle GET request with different response types', async () => {
          const response = await testApi.get(`${mockEndpoint}/test-get-different-types`);
          expect(response).toEqual({
            string: 'test',
            number: 123,
            boolean: true,
            array: [1, 2, 3],
            object: { key: 'value' },
          });
        });

        it('should handle GET request with error', async () => {
          await expect(testApi.get(`${mockEndpoint}/test-get-error`)).rejects.toEqual({});
        });

        it('should handle GET request cancellation', async () => {
          const cancellationToken = new AbortController();
          const promise = testApi.get(`${mockEndpoint}/test-get`, cancellationToken);
          cancellationToken.abort();

          try {
            await promise;
            fail('Expected promise to be rejected');
          } catch (error) {
            expect(error).toBeDefined();
          }
        });

        it('should handle GET request with empty response body', async () => {
          const response = await testApi.get(`${mockEndpoint}/test-get-empty`);
          expect(response).toBe('');
        });
      });

      describe('PUT Method Tests', () => {
        it('should handle successful PUT create', async () => {
          const testData = { id: 1, name: 'test' };
          const response = await testApi.putCreate(`${mockEndpoint}/test-put-create`, testData);
          expect(response).toEqual(testData);
        });

        it('should handle PUT create with error', async () => {
          const testData = { id: 1, name: 'test' };
          await expect(testApi.putCreate(`${mockEndpoint}/test-put-create-error`, testData)).rejects.toEqual({});
        });

        it('should handle PUT create with invalid URL', async () => {
          await expect(testApi.putCreate('', {})).rejects.toThrow('URL cannot be null or empty');
        });

        it('should handle PUT create with null object', async () => {
          await expect(testApi.putCreate(`${mockEndpoint}/test-put-create`, null)).rejects.toThrow(
            'Object cannot be null'
          );
        });

        it('should handle PUT create with different content types', async () => {
          const testData = { id: 1, name: 'test' };
          const response = await testApi.putCreate(`${mockEndpoint}/test-put-create-content-type`, testData);
          expect(response).toEqual(testData);
        });

        it('should handle successful PUT update', async () => {
          const testData = { id: 1, name: 'updated' };
          const response = await testApi.putUpdate(`${mockEndpoint}/test-put-update`, testData);
          expect(response).toEqual(testData);
        });

        it('should handle PUT update with error', async () => {
          const testData = { id: 1, name: 'updated' };
          await expect(testApi.putUpdate(`${mockEndpoint}/test-put-update-error`, testData)).rejects.toEqual({});
        });

        it('should handle PUT update with empty response', async () => {
          const testData = { id: 1, name: 'updated' };
          const response = await testApi.putUpdate(`${mockEndpoint}/test-put-update-empty`, testData);
          expect(response).toBe('');
        });
      });

      describe('POST Method Tests', () => {
        it('should handle successful POST request', async () => {
          const testData = { id: 1, name: 'test' };
          const response = await testApi.post(`${mockEndpoint}/test-post`, testData);
          expect(response).toEqual(testData);
        });

        it('should handle POST request with error', async () => {
          const testData = { id: 1, name: 'test' };
          await expect(testApi.post(`${mockEndpoint}/test-post-error`, testData)).rejects.toEqual({});
        });

        it('should handle POST request with invalid URL', async () => {
          await expect(testApi.post('', {})).rejects.toThrow('URL cannot be null or empty');
        });

        it('should handle POST with different data types', async () => {
          const testData = {
            string: 'test',
            number: 123,
            boolean: true,
            array: [1, 2, 3],
            object: { key: 'value' },
          };
          const response = await testApi.post(`${mockEndpoint}/test-post-different-types`, testData);
          expect(response).toEqual(testData);
        });

        it('should handle successful POST batch request', async () => {
          const testData = { items: [{ id: 1 }, { id: 2 }] };
          const response = await testApi.postBatch(`${mockEndpoint}/test-post-batch`, testData);
          expect(response).toEqual(testData);
        });

        it('should handle POST batch with error', async () => {
          const testData = { items: [{ id: 1 }, { id: 2 }] };
          await expect(testApi.postBatch(`${mockEndpoint}/test-post-batch-error`, testData)).rejects.toEqual({});
        });

        it('should handle POST batch with non-serializable object', async () => {
          const circularObj: any = {};
          circularObj.self = circularObj;
          await expect(testApi.postBatch(`${mockEndpoint}/test-post-batch`, circularObj)).rejects.toThrow(
            'Converting circular structure to JSON'
          );
        });

        it('should handle POST batch with empty response', async () => {
          const testData = { items: [{ id: 1 }, { id: 2 }] };
          const promise = testApi.postBatch(`${mockEndpoint}/test-post-batch-empty`, testData);
          await expect(
            Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))])
          ).rejects.toThrow('Timeout');
        }, 10000);
      });

      describe('DELETE Method Tests', () => {
        it('should handle successful DELETE request', async () => {
          const response = await testApi.del(`${mockEndpoint}/test-delete`);
          expect(response).toBe(true);
        });

        it('should handle DELETE request with invalid URL', async () => {
          await expect(testApi.del('')).rejects.toThrow('URL cannot be null or empty');
        });

        it('should handle successful DELETE many request', async () => {
          const testData = { ids: [1, 2, 3] };
          const response = await testApi.deleteMany(`${mockEndpoint}/test-delete-many`, testData);
          expect(response).toBe(true);
        });

        it('should handle DELETE many with invalid URL', async () => {
          await expect(testApi.deleteMany('', {})).rejects.toThrow('URL cannot be null or empty');
        });

        it('should handle DELETE many with different request formats', async () => {
          const testData = {
            ids: [1, 2, 3],
            filter: { status: 'active' },
            options: { cascade: true },
          };
          const response = await testApi.deleteMany(`${mockEndpoint}/test-delete-many-complex`, testData);
          expect(response).toBe(true);
        });

        it('should handle DELETE many with different status codes', async () => {
          const testData = { ids: [1, 2, 3] };
          const response = await testApi.deleteMany(`${mockEndpoint}/test-delete-many-status`, testData);
          expect(response).toBe(true);
        });
      });
    });
  });
});
