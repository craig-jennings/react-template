import { addNotification, NotificationType } from '../actions/notifications';
import { Button } from '../components/base/Buttons';
import { FlexBox, InlineBox } from '../components/base/Box';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  return (
    <FlexBox alignItems="center" data-testid="home-page" flexDirection="column">
      <div>Howdy React Template!</div>

      <div>
        <InlineBox mr={2}>
          <Button
            onClick={() => dispatch(addNotification(NotificationType.SUCCESS, { text: 'Success' }))}
          >
            Success
          </Button>
        </InlineBox>

        <InlineBox mr={2}>
          <Button
            onClick={() => dispatch(addNotification(NotificationType.ERROR, { text: 'Error' }))}
          >
            Error
          </Button>
        </InlineBox>

        <InlineBox>
          <Button onClick={() => dispatch(addNotification(NotificationType.SERVICE_WORKER))}>
            Service Worker
          </Button>
        </InlineBox>
      </div>
    </FlexBox>
  );
}

export default Home;
