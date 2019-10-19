import * as React from "react";
import StyledSideBar from './StyledSideBar';
import {Link} from 'react-router-dom';

export class SideBar extends React.Component {
    public render() {
        return (
            <StyledSideBar>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/atendimento">Atendimento</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
            </StyledSideBar>
        );
    }
}

export default (SideBar);
