import App from "next/app";
import Theme from "../components/base/Theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    @font-face {
      font-family: 'SF Pro Display Bold';
      src: url('/font/SFProDisplay-Bold.woff2') format("woff2");

      font-family: 'SF Pro Display Regular';
      src: url('/font/SFProDisplay-Regular.woff2') format("woff2");
   }
   font-family: "SF Pro Display Regular";
   max-width: 55rem;
   padding: 0 1rem;
   margin: 3rem auto 6rem;
   background-color: #e5e5e5
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    );
  }
}
