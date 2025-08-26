import { http, HttpResponse } from 'msw';
import {
  mockGraphGuid,
  graphData,
  searchGraphData,
  graphGEXFData,
  graphMockApiResponse,
  graphMockSearchApiResponse,
  mockEnumerateGraphsResponse,
  mockGraphStatisticsResponse,
  mockVectorIndexConfigResponse,
  mockVectorIndexStatsResponse,
} from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs`, ({ request, params, cookies }) => {
    const hasGuids = request.url.includes('guids');
    if (hasGuids) {
      return HttpResponse.json([graphData[mockGraphGuid]]);
    }
    return HttpResponse.json(graphMockApiResponse);
  }),
  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(graphData[mockGraphGuid]);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs`, ({ request, params, cookies }) => {
    return HttpResponse.json(graphData[mockGraphGuid]);
  }),
  http.put(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(graphData[mockGraphGuid]);
  }),
  http.delete(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.json(graphData[mockGraphGuid]);
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true');
  }),
  http.head(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${'wrongID'}`, ({ request, params, cookies }) => {
    return HttpResponse.text('false', { status: 404 });
  }),
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/search`, ({ request, params, cookies }) => {
    return HttpResponse.json(searchGraphData[mockGraphGuid]);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/export/gexf`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(graphGEXFData[mockGraphGuid]);
    }
  ),
  http.post(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/first`, ({ request, params, cookies }) => {
    return HttpResponse.json(graphData[mockGraphGuid]);
  }),
  http.get(`${mockEndpoint}v2.0/tenants/${mockTenantId}/graphs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEnumerateGraphsResponse);
  }),
  http.post(`${mockEndpoint}v2.0/tenants/${mockTenantId}/graphs`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockEnumerateGraphsResponse);
  }),

  http.get(`${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/stats`, ({ request, params, cookies }) => {
    return HttpResponse.json(mockGraphStatisticsResponse);
  }),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/stats`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(mockGraphStatisticsResponse[mockGraphGuid]);
    }
  ),

  http.put(
    `${mockEndpoint}v2.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/vectorindex/enable`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(mockVectorIndexConfigResponse);
    }
  ),
  http.post(
    `${mockEndpoint}v2.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/vectorindex/rebuild`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(true);
    }
  ),
  http.delete(
    `${mockEndpoint}v2.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/vectorindex`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(true);
    }
  ),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/vectorindex/stats`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(mockVectorIndexStatsResponse);
    }
  ),
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/vectorindex/config`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(mockVectorIndexConfigResponse);
    }
  ),
];
