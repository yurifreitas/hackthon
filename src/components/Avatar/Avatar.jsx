import * as React from "react";
import StyledAvatar from './StyledAvatar';

export class Avatar extends React.Component {
    render() {
        return (
            <StyledAvatar>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </StyledAvatar>
        );
    }
}

export default (Avatar);
