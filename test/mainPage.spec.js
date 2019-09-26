import { appUrl } from './utils/roots';
import MainPage from './components/MainPage';

const mainPage = new MainPage();

fixture('Main Page')
  .page(appUrl)

test('should show greeting', async (t) => {
  await t.expect(mainPage.container.textContent).eql('Howdy React Template');
});
