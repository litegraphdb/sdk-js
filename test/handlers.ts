import { http, HttpResponse } from 'msw';
import { mockEndpoint } from './setupTest';

export const handlers = [
  // Check if a edge exists by GUID
  http.head(mockEndpoint, ({ request, params, cookies }) => {
    return HttpResponse.text('Hello'); // Simulating edge exists
  }),

  // Test successful GET request
  http.get(`${mockEndpoint}/test-get`, () => {
    return HttpResponse.json({ data: 'test' });
  }),

  // Test GET request with error response
  http.get(`${mockEndpoint}/test-get-error`, () => {
    return new HttpResponse(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }),

  // Test GET request with custom headers
  http.get(`${mockEndpoint}/test-get-headers`, ({ request }) => {
    const customHeader = request.headers.get('X-Custom-Header');
    return HttpResponse.json({
      data: 'test',
      receivedHeader: customHeader,
    });
  }),

  // Test successful PUT create
  http.put(`${mockEndpoint}/test-put-create`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),

  // Test PUT create with error
  http.put(`${mockEndpoint}/test-put-create-error`, () => {
    return new HttpResponse(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }),

  // Test successful PUT update
  http.put(`${mockEndpoint}/test-put-update`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),

  // Test PUT update with error
  http.put(`${mockEndpoint}/test-put-update-error`, () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }),

  // Test successful POST request
  http.post(`${mockEndpoint}/test-post`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),

  // Test POST request with error
  http.post(`${mockEndpoint}/test-post-error`, () => {
    return new HttpResponse(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }),

  // Test successful POST batch
  http.post(`${mockEndpoint}/test-post-batch`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),

  // Test POST batch with error
  http.post(`${mockEndpoint}/test-post-batch-error`, () => {
    return new HttpResponse(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }),

  // Test successful DELETE request
  http.delete(`${mockEndpoint}/test-delete`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Test DELETE request with error
  http.delete(`${mockEndpoint}/test-delete-error`, () => {
    return new HttpResponse(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }),

  // Test successful DELETE many
  http.delete(`${mockEndpoint}/test-delete-many`, async ({ request }) => {
    const body = await request.json();
    return new HttpResponse(null, { status: 204 });
  }),

  // Test DELETE many with error
  http.delete(`${mockEndpoint}/test-delete-many-error`, () => {
    return new HttpResponse(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }),

  // Add to handlers.ts
  http.get(`${mockEndpoint}/test-get-empty`, () => {
    return new HttpResponse(null, { status: 200 });
  }),

  http.get(`${mockEndpoint}/test-get-different-types`, () => {
    return HttpResponse.json({
      string: 'test',
      number: 123,
      boolean: true,
      array: [1, 2, 3],
      object: { key: 'value' },
    });
  }),

  http.put(`${mockEndpoint}/test-put-create-content-type`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),

  http.put(`${mockEndpoint}/test-put-update-empty`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.post(`${mockEndpoint}/test-post-different-types`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),

  http.post(`${mockEndpoint}/test-post-batch-empty`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.delete(`${mockEndpoint}/test-delete-many-complex`, async ({ request }) => {
    const body = await request.json();
    return new HttpResponse(null, { status: 204 });
  }),

  http.delete(`${mockEndpoint}/test-delete-many-status`, async ({ request }) => {
    const body = await request.json();
    return new HttpResponse(null, { status: 202 });
  }),
];
