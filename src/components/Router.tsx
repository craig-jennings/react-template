import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Page404 = lazy(() => import('pages/Page404'));

function Router() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Page404 />} path="*" />
      </Routes>
    </Suspense>
  );
}

export default Router;
