import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { SearchCommander } from '../pages/search-commander';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<SearchCommander />} />)
);
