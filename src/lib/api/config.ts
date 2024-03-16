import { HttpHeaders } from './types';

// TODO: Check with BE to get correct port & base route
export const baseUrl = 'http://localhost:5000/api';

export const getHeaders = (): HttpHeaders<string> => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});
