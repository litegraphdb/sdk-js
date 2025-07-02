import { http, HttpResponse } from 'msw';
import { mockVectorGuid, vectorMockApiResponse, vectorData, mockEnumerateVectorsResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  // Check if a vector exists by GUID
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors/${mockVectorGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true'); // Simulating vector exists
  }),

  // Create a vector
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors`, ({ request, params, cookies }) => {
    // // Return the created vector, using `mockVectorGuid` and vectorData for consistency
    return HttpResponse.json(vectorData);
  }),

  // Read all vectors
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors`, ({ request, params, cookies }) => {
    // Return an array of vectors
    const hasGuids = request.url.includes('guids');
    if (hasGuids) {
      return HttpResponse.json([vectorData]);
    }
    return HttpResponse.json(vectorMockApiResponse);
  }),

  // Read a specific vector by GUID
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors/${mockVectorGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(vectorData);
  }),

  // Update a vector
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors/${mockVectorGuid}`, ({ request, params, cookies }) => {
    // // Update the vector data in `vectorData`
    return HttpResponse.json(vectorData);
  }),

  // Delete a vector
  http.delete(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors/${mockVectorGuid}`,
    ({ request, params, cookies }) => {
      // Simulate vector deletion
      return HttpResponse.json(vectorData);
    }
  ),

  // Delete multiple vectors
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors/bulk`, ({ request, params, cookies }) => {
    // Simulate vector deletion
    return HttpResponse.text('Deleted');
  }),
  //create multiple vectors
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/vectors/bulk`, ({ request, params, cookies }) => {
    // Simulate vector creation
    return HttpResponse.json([vectorData]);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/vectors`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEnumerateVectorsResponse);
  }),

  http.post(`${mockEndpoint}v2.0/tenants/${mockTenantId}/vectors`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEnumerateVectorsResponse);
  }),
];
