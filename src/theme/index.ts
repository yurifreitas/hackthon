import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
  >;

export interface IThemeInterface {
  primaryLightColor: string;
  secondaryLightColor: string;
  primaryDarkColor: string;
  secondaryDarkColor: string;
  messageBackgroundColor: string;
}

export const darkTheme = {
  primaryLightColor: '#e9e9eb',
  secondaryLightColor: '#777',
  primaryDarkColor: '#1e5266',
  secondaryDarkColor: '#111',
  messageBackgroundColor: '#3d3c3c',
};

export const lightTheme = {
  primaryLightColor: '#e9e9eb',
  secondaryLightColor: '#ff020b',
  primaryDarkColor: '#ff020b',
  secondaryDarkColor: '#ffffff',
  messageBackgroundColor: '#000000',
};

export default styled;
export { css, keyframes, ThemeProvider };