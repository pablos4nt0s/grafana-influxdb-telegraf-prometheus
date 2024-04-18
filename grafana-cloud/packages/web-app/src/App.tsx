import { Route } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { InternalLayout } from './layouts/InternalLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FeedbacksGivenPage } from './pages/FeedbacksGivenPage';
import { FeedbacksReceivedPage } from './pages/FeedbacksReceivedPage';
import { GiveFeedbackPage } from './pages/GiveFeedbackPage';

export const App = () => {
  const queryClient = new QueryClient();
  const routes = (
    <Route path="/" element={<InternalLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path="/feedbacks/given" element={<FeedbacksGivenPage />} />
        <Route path="/feedbacks/received" element={<FeedbacksReceivedPage />} />
        <Route path="/feedbacks/new" element={<GiveFeedbackPage />} />
      </Route>
    </Route>
  );
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
