import * as React from 'react';
import { connect } from 'react-redux';
import StyledUserProfile from './StyledUserProfile';
import {IAppContext } from '../../utilities/TranslationsProvider';
import { readRecord } from '../../utilities/localStorageService';
import { Dispatch } from 'redux';
import {changeSenha, changeUsername} from '../../store/message/actions';
import StyledNextButton from "../NextButton/StyledNextButton";

interface IUserProfileState {
  telefone: string;
  senha: string;
}


export class UserProfile extends React.Component<{ translations: IAppContext }> {
  public state: IUserProfileState = {
    telefone: readRecord('telefone') || '88474004',
    senha: readRecord('senha') || 'senhasecreta'

  };

  public render() {

    let telefone;
    let senha;
    return (
      <StyledUserProfile>
        <label htmlFor='telefone'>Telefone:</label>
        <input type='text' name='telefone' value={telefone} onChange={this.handleTelephoneChange}/>
        <label htmlFor='senha'>Senha:</label>
        <input type='password' name='senha' value={senha} onChange={this.handleSenhaChange}/>
        <StyledNextButton>
            <button onClick={this.login} type="button">
              Entrar
            </button>
        </StyledNextButton>
      </StyledUserProfile>

    );
  }

  private login = () => {
    if(this.state.telefone != '88474004' || this.state.senha != 'abcd'){
      window.alert("Você ainda não tem registro no nosso sistema, por favor faça seu cadastro");
      window.location.hash = "#/register";
    }else{
      window.location.hash = "#/chat";
    }
  }

  private handleTelephoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ telefone: e.currentTarget.value });
  };


  private handleSenhaChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ senha: e.currentTarget.value });
  };

}

// Map dispatch function into props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  changeUsername: (username: string) => dispatch(changeUsername(username)),
  changeSenha: (senha: string) => dispatch(changeSenha(senha)),


});

export default connect(null, mapDispatchToProps)(UserProfile);