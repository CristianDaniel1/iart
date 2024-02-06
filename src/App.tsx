import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root.tsx';
import Home from './pages/Home.tsx';
import Arts from './pages/Arts.tsx';
import Examples from './pages/Examples.tsx';
import Error from './pages/Error.tsx';

import { queryClient } from './util/http.ts';
import { QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'artes',
        element: <Arts />,
      },
      {
        path: 'exemplos',
        element: <Examples />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
