import { addToast } from 'utils/notifications';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';
import SWUpdate from './notifications/types/SWUpdate';

function SWInstaller() {
  useEffect(() => {
    if (import.meta.env.NODE_ENV !== 'production') return;

    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js');

      let updatePending = false;

      wb.addEventListener('waiting', () => {
        if (updatePending) return;

        updatePending = true;

        const onUpdateClick = () => {
          wb.addEventListener('controlling', () => window.location.reload());

          wb.messageSkipWaiting();
        };

        addToast(<SWUpdate onUpdateClick={onUpdateClick} />);
      });

      wb.register();
    }
  }, []);

  return null;
}

export default SWInstaller;
