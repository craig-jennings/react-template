import { addToast } from 'utils/notifications';
import { Button } from 'components/common/Buttons';
import { CenterBox, FlexBox, InlineBox } from 'components/common/Box';
import { Link } from 'react-router-dom';
import StandardNotification from 'components/notifications/StandardNotification';
import SWUpdate from 'components/notifications/types/SWUpdate';

function Home() {
  /* -- Hooks -- */
  /* -- Event Handlers -- */
  const handleErrorClick = () => {
    addToast(<StandardNotification variant="error">Error</StandardNotification>);
  };

  const handleSuccessClick = () => {
    addToast(<StandardNotification variant="success">Success</StandardNotification>);
  };

  const handleServiceWorkerClick = () => {
    addToast(
      <SWUpdate
        onUpdateClick={() => {
          console.log('updated');
        }}
      />,
      { isDismissable: false },
    );
  };

  /* -- Rendering -- */
  return (
    <FlexBox alignItems="center" data-testid="home-page" flexDirection="column">
      <div>Howdy React Template!</div>

      <div>
        <InlineBox mr="md">
          <Button onClick={handleSuccessClick}>Success</Button>
        </InlineBox>

        <InlineBox mr="md">
          <Button onClick={handleErrorClick}>Error</Button>
        </InlineBox>

        <InlineBox>
          <Button onClick={handleServiceWorkerClick}>Service Worker</Button>
        </InlineBox>
      </div>

      <CenterBox>
        <Link to="unknown">Go to nowhere!</Link>
      </CenterBox>
    </FlexBox>
  );
}

export default Home;
