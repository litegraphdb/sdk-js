import { http, HttpResponse } from 'msw';
import {
  mockGraphGuid,
  mockNodeGuid,
  fromNodeGuid,
  toNodeGuid,
  edgeMockApiResponse,
  routesData,
  nodeMockApiResponse,
} from './mockData';
import { mockEndpoint, mockTenantId } from '../setupTest';

export const handlers = [
  // Get edges from a node
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/nodes/${mockNodeGuid}/edges/from`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(edgeMockApiResponse);
    }
  ),

  // Get edges to a node
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/nodes/${mockNodeGuid}/edges/to`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(edgeMockApiResponse);
    }
  ),

  // Get edges between node
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/edges/between?from=${fromNodeGuid}&to=${toNodeGuid}`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(edgeMockApiResponse);
    }
  ),

  // Get all edges for a node
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/nodes/${mockNodeGuid}/edges`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(edgeMockApiResponse);
    }
  ),

  // Get child nodes from a node
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/nodes/${mockNodeGuid}/children`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(nodeMockApiResponse);
    }
  ),

  // Get parent nodes from a node
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/nodes/${mockNodeGuid}/parents`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(nodeMockApiResponse);
    }
  ),

  // Get neighboring nodes
  http.get(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/nodes/${mockNodeGuid}/neighbors`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(nodeMockApiResponse);
    }
  ),

  // Get routes between nodes
  http.post(
    `${mockEndpoint}v1.0/tenants/${mockTenantId}/graphs/${mockGraphGuid}/routes`,
    ({ request, params, cookies }) => {
      return HttpResponse.json(routesData[mockNodeGuid]);
    }
  ),
];
