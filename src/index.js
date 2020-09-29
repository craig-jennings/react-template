import { NotificationProvider } from './contexts/NotificationContext';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import ReactDOM from 'react-dom';
import SWInstaller from './components/SWInstaller';

const Root = () => (
  <NotificationProvider>
    <GlobalStyles />
    <App />
    <SWInstaller />
  </NotificationProvider>
);

ReactDOM.render(<Root />, document.querySelector('main'));
