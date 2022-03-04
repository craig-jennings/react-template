import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('pages/Home'));
const Page404 = lazy(() => import('pages/Page404'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Page404 />} path="*" />
        </Routes>
      </Suspense>

      <div data-testid="notifications">
        <Toaster containerStyle={{ width: '300px' }} position="bottom-left" />
      </div>
    </BrowserRouter>
  );
}

export default App;
