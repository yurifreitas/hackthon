import styled from '../../theme';

const StyledSideBar = styled("ul")`
 width:20%;
 list-style:none;
 text-align:left;
 border-bottom: 1px solid ${props => props.theme.primaryDarkColor};
`;

export default StyledSideBar;