import * as React from 'react';
// import ClockModeSelector from '../../ClockModeSelector';
import LanguageSelector from '../../LanguageSelector';
// import ThemeSelector from '../../ThemeSelector';
// import SendingOptions from '../../SendingOptions';
import UserProfile from '../../UserProfile';
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import { IAppContext } from '../../../utilities/TranslationsProvider';
import NextButton from "../../NextButton";

const SettingsPage = ({ appContext, changeLanguage, changeTheme }:
                        { appContext: IAppContext, changeLanguage: () => void, changeTheme: () => void }) => (
  <StyledPageContainer>
      <LanguageSelector translations={appContext} changeLanguage={changeLanguage}/>
      <UserProfile translations={appContext}/>
      <NextButton translations={appContext}/>
  </StyledPageContainer>
);

export default withTranslations(SettingsPage as React.FunctionComponent);