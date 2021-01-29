import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Notifications from './notifications/Notifications';

const Home = lazy(() => import('@pages/Home'));
const Page404 = lazy(() => import('@pages/Page404'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Notifications />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
