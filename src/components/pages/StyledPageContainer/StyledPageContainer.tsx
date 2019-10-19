import styled from '../../../theme';

const StyledPageContainer = styled("section")`
  text-align: center;
  margin-top: 55px;
  height: calc( 100vh - 60px);
  color: ${props => props.theme.secondaryLightColor};
  background-color: ${props => props.theme.secondaryDarkColor};
  
  img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  text-indent:50px;
    }
    
  .avatarIcon{
    width:50px;
    height: 60px;
  }
`;



export default StyledPageContainer;