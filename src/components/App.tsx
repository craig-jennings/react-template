import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Page404 } from '@pages/index';
import Notifications from './notifications/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Notifications />
    </BrowserRouter>
  );
}

export default App;
