import * as React from 'react';
import StyledNextButton from './StyledNextButton';
import {IAppContext } from '../../utilities/TranslationsProvider';
import {Link} from "react-router-dom";


class NextButton extends React.Component<{ translations: IAppContext }> {
  public render() {
    return (
      <StyledNextButton>
        <Link to="/chat">
          <button type="button">
            Entrar
          </button>
        </Link>
      </StyledNextButton>
    );
  }
}

export default NextButton;