import { createRoot } from 'react-dom/client';
import App from 'components/App';
import GlobalStyles from 'components/GlobalStyles';
import Providers from 'components/Providers';
import SWInstaller from 'components/SWInstaller';

const Root = () => (
  <Providers>
    <GlobalStyles />
    <App />
    <SWInstaller />
  </Providers>
);

const container = document.querySelector('main');

if (!container) {
  throw new Error('Missing root DOM element');
}

const root = createRoot(container);

root.render(<Root />);
