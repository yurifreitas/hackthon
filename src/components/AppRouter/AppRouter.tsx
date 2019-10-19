import * as React from 'react';
import { HashRouter, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ChatPage from '../pages/Chat/ChatPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import UserDetails from '../pages/UserDetailedProfile/UserProfileDetail';
import { ComponentType } from 'react';

// Fix React Router active class setting for redux connected components
const BlockedNavigation = withRouter(Navigation as ComponentType<RouteComponentProps>);

export const AppRouter: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <BlockedNavigation />
          <Route exact={true} path='/' component={SettingsPage} />
          <Route path='/chat' component={ChatPage} />
          <Route path='/settings' component={SettingsPage} />
          <Route path='/register' component={UserDetails} />
      </React.Fragment>
    </HashRouter>
  );
};

export default AppRouter;