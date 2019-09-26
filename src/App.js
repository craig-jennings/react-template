import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { MainPage } from './pages';
import { Provider } from 'react-redux';
import GlobalStyles from './GlobalStyles';
import Modal from './components/modal/Modal';
import Notifications from './components/notifications/Notifications';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>

      {/* TODO: Handle unknown route */}

      <Modal />
      <Notifications />
    </BrowserRouter>
  </Provider>
);

export default hot(App);
