import { Button } from '@common/Buttons';
import { FlexBox, InlineBox } from '@common/Box';
import { useNotificationActionsContext } from '@contexts/NotificationContext';
import StandardNotification from '@components/notifications/StandardNotification';
import SWUpdate from '@components/notifications/types/SWUpdate';

function Home() {
  /* -- Hooks -- */
  const { addNotification } = useNotificationActionsContext();

  /* -- Event Handlers -- */
  const handleErrorClick = () => {
    addNotification(<StandardNotification variant="error">Error</StandardNotification>);
  };

  const handleSuccessClick = () => {
    addNotification(<StandardNotification variant="success">Success</StandardNotification>);
  };

  const handleServiceWorkerClick = () => {
    addNotification(<SWUpdate onUpdateClick={() => {}} />);
  };

  /* -- Rendering -- */
  return (
    <FlexBox alignItems="center" data-testid="home-page" flexDirection="column">
      <div>Howdy React Template!</div>

      <div>
        <InlineBox mr={2}>
          <Button onClick={handleSuccessClick}>Success</Button>
        </InlineBox>

        <InlineBox mr={2}>
          <Button onClick={handleErrorClick}>Error</Button>
        </InlineBox>

        <InlineBox>
          <Button onClick={handleServiceWorkerClick}>Service Worker</Button>
        </InlineBox>
      </div>
    </FlexBox>
  );
}

export default Home;
