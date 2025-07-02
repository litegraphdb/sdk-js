import { http, HttpResponse } from 'msw';
import { mockEnumerateUsersResponse, mockUserId, userData, userMockApiResponse } from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  // Check if a user exists by GUID
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserId}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true'); // Simulating user exists
  }),

  // Create a user
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
    // // Return the created user
    return HttpResponse.json(userData);
  }),

  // Read all users
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
    // Return an array of users
    const hasGuids = request.url.includes('guids');
    if (hasGuids) {
      return HttpResponse.json([userData]);
    }
    return HttpResponse.json(userMockApiResponse);
  }),

  // Read a specific user by GUID
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserId}`, ({ request, params, cookies }) => {
    return HttpResponse.json(userData);
  }),

  // Update a user
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserId}`, ({ request, params, cookies }) => {
    // // Update the user data in `userData`
    return HttpResponse.json(userData);
  }),

  // Delete a user
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/users/${mockUserId}`, ({ request, params, cookies }) => {
    // Simulate user deletion
    return HttpResponse.json(userData);
  }),

  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEnumerateUsersResponse);
  }),

  http.post(`${mockEndpoint}v2.0/tenants/${mockTenantId}/users`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEnumerateUsersResponse);
  }),
];
