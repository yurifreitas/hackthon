import styled from '../../theme';

const StyledNextButton = styled("div")`
  width: 100%;
  position: fixed;
  bottom: 14px;
  
  button {
    border-radius:10px;
    marginTop: 20
    width: 40%;
    line-height: 28px;
    font-size: 1.1em;
    padding: 7px;
    color: ${(props) => props.theme.secondaryDarkColor};
    background-color: ${(props) => props.theme.secondaryLightColor};
  }
`;

export default StyledNextButton;