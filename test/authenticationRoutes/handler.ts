import { http, HttpResponse } from 'msw';
import { mockEndpoint } from '../setupTest';
import { mockTenants, mockToken, mockTokenDetails } from './mockData';

export const handlers = [
  http.get(`${mockEndpoint}v1.0/token/tenants`, ({ request }) => {
    return HttpResponse.json(mockTenants);
  }),

  http.get(`${mockEndpoint}v1.0/token/details`, ({ request }) => {
    return HttpResponse.json(mockTokenDetails);
  }),

  http.get(`${mockEndpoint}v1.0/token`, ({ request }) => {
    return HttpResponse.json(mockToken);
  }),
];
