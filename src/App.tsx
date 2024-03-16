import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SearchCommander } from './pages/search-commander';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchCommander />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
