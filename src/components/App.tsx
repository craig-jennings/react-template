import { Toaster } from 'react-hot-toast';
import Providers from './Providers';
import Router from './Router';

function App() {
  return (
    <Providers>
      <Router />
      <Toaster containerStyle={{ width: '300px' }} position="bottom-left" />
    </Providers>
  );
}

export default App;
