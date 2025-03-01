import * as React from 'react';
// import ClockModeSelector from '../../ClockModeSelector';
// import ThemeSelector from '../../ThemeSelector';
// import SendingOptions from '../../SendingOptions';
import UserProfile from '../../UserProfile';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';
import logo from "../../../utilities/samu_logo.png";


const SettingsPage = ({ appContext, changeLanguage, changeTheme }:
                        { appContext: IAppContext, changeLanguage: () => void, changeTheme: () => void }) => (
  <StyledPageContainer>
      <img src={logo}/>
      <UserProfile translations={appContext}/>
  </StyledPageContainer>
);

export default withTranslations(SettingsPage as React.FunctionComponent);