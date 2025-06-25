import { http, HttpResponse } from 'msw';
import { mockBackupFilename, backupData, backupMockApiResponse } from './mockData';
import { mockEndpoint } from '../setupTest';

export const handlers = [
  // Check if a backup exists by filename
  http.head(`${mockEndpoint}v1.0/backups/${mockBackupFilename}`, ({ request, params, cookies }) => {
    return HttpResponse.text('true'); // Simulating backup exists
  }),

  // Create a backup
  http.post(`${mockEndpoint}v1.0/backups`, ({ request, params, cookies }) => {
    // // Return the created edge, using `mockEdgeGuid` and edgeData for consistency
    return HttpResponse.text('');
  }),

  // Read all backups
  http.get(`${mockEndpoint}v1.0/backups`, ({ request, params, cookies }) => {
    // Return an array of backups
    return HttpResponse.json(backupMockApiResponse);
  }),

  // Read a specific backup by filename
  http.get(`${mockEndpoint}v1.0/backups/${mockBackupFilename}`, ({ request, params, cookies }) => {
    return HttpResponse.json(backupData);
  }),

  // Delete a backup
  http.delete(`${mockEndpoint}v1.0/backups/${mockBackupFilename}`, ({ request, params, cookies }) => {
    // Simulate edge deletion
    return HttpResponse.json(backupData);
  }),
];
