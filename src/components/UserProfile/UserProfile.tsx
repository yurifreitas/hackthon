import * as React from 'react';
import { connect } from 'react-redux';
import StyledUserProfile from './StyledUserProfile';
import {IAppContext } from '../../utilities/TranslationsProvider';
import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';
import { Dispatch } from 'redux';
import {changeEndereco, changeIdade, changeUsername} from '../../store/message/actions';

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
        <input type='text' name='senha' value={senha} onChange={this.handleSenhaChange}/>
      </StyledUserProfile>
    );
  }

  private handleTelephoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
    storeToLocalStorageDebounced('telefone', e.currentTarget.value);
    // @ts-ignore
    this.props.changeUsername(e.currentTarget.value);
  };


  private handleSenhaChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
    storeToLocalStorageDebounced('senha', e.currentTarget.value);
    // @ts-ignore
    this.props.changeEndereco(e.currentTarget.value);
  };

}

// Map dispatch function into props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  changeUsername: (username: string) => dispatch(changeUsername(username)),
  changeEndereco: (endereco: string) => dispatch(changeEndereco(endereco)),
  changeIdade: (idade: string) => dispatch(changeIdade(idade))


});

export default connect(null, mapDispatchToProps)(UserProfile);