import * as React from 'react';
import { connect } from 'react-redux';
import StyledDetailedUserProfile from './StyledDetailedUserProfile';
import {IAppContext } from '../../utilities/TranslationsProvider';
import { readRecord, storeToLocalStorageDebounced } from '../../utilities/localStorageService';
import { Dispatch } from 'redux';
import { MDBInput } from "mdbreact";

interface IUserProfileDetailState {
  cpf: string;
  rg: string;
  telefone: string;
  cep: string;
  cidade: string;
  bairro: string;
  numero: string;
  referencia: string;


}

export class UserProfileDetail extends React.Component<{ translations: IAppContext }> {
  public state: IUserProfileDetailState = {
    cpf: readRecord('username') || 'guest0001',
    rg: readRecord('endereco') || 'Rua das Flores, 672',
    telefone: readRecord('idade') || '18',
    cep: readRecord('sexo') || 'Masculino',
    cidade: readRecord('cidade') || 'Floripa',
    bairro: readRecord('bairro') || 'Trindade',
    numero: readRecord('numero') || '2223',
    referencia: readRecord('referencia') || 'Em frente ao posto',
  };

  public render() {
    console.log(this.props);
    let username;
    let endereco;
    let idade;
    let sexo;
    return (
      <StyledDetailedUserProfile>
          <MDBInput label="Material input" />
        <label htmlFor='username'>Usuário</label>
        <input type='text' name='username' value={username} onChange={this.handleUserNameChange}/>
        <label htmlFor='endereco'>Endereço</label>
        <input type='text' name='endereco' value={endereco} onChange={this.handleEnderecoChange}/>
        <label htmlFor='idade'>Idade</label>
        <input type='text' name='idade' value={idade} onChange={this.handleIdadeChange}/>
        <select value={sexo}>
          <option value="notSelected">Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
      </StyledDetailedUserProfile>
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
 // changeUsername: (username: string) => dispatch(changeUsername(username)),
 // changeEndereco: (endereco: string) => dispatch(changeEndereco(endereco)),
 // changeIdade: (idade: string) => dispatch(changeIdade(idade))

});

export default connect(null, mapDispatchToProps)(UserProfileDetail);