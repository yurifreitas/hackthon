import * as React from 'react';
// import ClockModeSelector from '../../ClockModeSelector';
// import ThemeSelector from '../../ThemeSelector';
// import SendingOptions from '../../SendingOptions';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';
import NextButton from "../../NextButton";
import logo from "../../../utilities/samu_logo.png";
import {UserProfileDetail} from "../../UserDetailedProfile/UserProfileDetail";

const SettingsDetailedPage = ({ appContext, changeLanguage, changeTheme }:
                        { appContext: IAppContext, changeLanguage: () => void, changeTheme: () => void }) => (
  <StyledPageContainer>
      <img src={logo}/>
      <UserProfileDetail translations={appContext}/>
      <NextButton translations={appContext}/>
  </StyledPageContainer>
);

export default withTranslations(SettingsDetailedPage as React.FunctionComponent);