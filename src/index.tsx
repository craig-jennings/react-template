import { NotificationProvider } from './contexts/NotificationContext';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import Providers from './components/Providers';
import ReactDOM from 'react-dom';
import SWInstaller from './components/SWInstaller';

const Root = () => (
  <Providers>
    <GlobalStyles />
    <App />
    <SWInstaller />
  </Providers>
);

ReactDOM.render(<Root />, document.querySelector('main'));
