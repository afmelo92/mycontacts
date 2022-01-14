import { Switch, Route } from 'react-router-dom';

import EditContactPage from './pages/EditContact';
import HomePage from './pages/Home';
import NewContactPage from './pages/NewContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/new" component={NewContactPage} />
      <Route path="/edit/:id" component={EditContactPage} />
    </Switch>
  );
}
