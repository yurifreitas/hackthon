import * as React from 'react';
import { connect } from 'react-redux';
import StyledUserProfile from './StyledUserProfile';
import {IAppContext } from '../../utilities/TranslationsProvider';
import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';
import { Dispatch } from 'redux';
import {changeEndereco, changeIdade, changeUsername} from '../../store/message/actions';

interface IUserProfileState {
  username: string;
  endereco: string;
  idade: string;
  sexo: string;
}

export class UserProfile extends React.Component<{ translations: IAppContext }> {
  public state: IUserProfileState = {
    username: readRecord('username') || 'guest0001',
    endereco: readRecord('endereco') || 'Rua das Flores, 672',
    idade: readRecord('idade') || '18',
    sexo: readRecord('sexo') || 'Masculino'

  };

  public render() {
    const { translations } = this.props;

    let username;
    let endereco;
    let idade;
    let sexo;
    return (
      <StyledUserProfile>
        <label htmlFor='username'>{translations.userName}</label>
        <input type='text' name='username' value={username} onChange={this.handleUserNameChange}/>
        <label htmlFor='endereco'>{translations.endereco}</label>
        <input type='text' name='endereco' value={endereco} onChange={this.handleEnderecoChange}/>
        <label htmlFor='idade'>{translations.idade}</label>
        <input type='text' name='idade' value={idade} onChange={this.handleIdadeChange}/>
        <select value={sexo}>
          <option value="notSelected">Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
      </StyledUserProfile>
    );
  }

  private handleUserNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
    storeToLocalStorageDebounced('username', e.currentTarget.value);
    // @ts-ignore
    this.props.changeUsername(e.currentTarget.value);
  };

  private handleIdadeChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
    storeToLocalStorageDebounced('idade', e.currentTarget.value);
    // @ts-ignore
    this.props.changeIdade(e.currentTarget.value);
  };

  private handleEnderecoChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ username: e.currentTarget.value });
    storeToLocalStorageDebounced('endereco', e.currentTarget.value);
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