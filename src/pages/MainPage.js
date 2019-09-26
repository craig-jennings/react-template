import { Box } from '../components/base/Box';
import Card from '../components/base/Card';

const MainPage = () => (
  <Box data-testid="main-page" py={3}>
    <Card alignItems="center" animate displayRaw="flex" justifyContent="center" p={3}>
      <Box>Howdy React Template</Box>
    </Card>
  </Box>
);

export default MainPage;
