import { createRoot } from 'react-dom/client';
import App from 'components/App';

let container = document.getElementById('root');

if (!container) {
  container = document.createElement('div');
  container.id = 'root';
  document.body.prepend(container);
}

const root = createRoot(container);

root.render(<App />);
