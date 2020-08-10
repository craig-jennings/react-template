import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Page404 } from '../pages';
import Notifications from './notifications/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>

      <Notifications />
    </BrowserRouter>
  );
}

export default App;
