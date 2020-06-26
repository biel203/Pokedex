import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    @font-face {
      font-family: 'SF Pro Display';
      src: url('//db.onlinewebfonts.com/t/0b51833ff62e4af8acb5fd3e2bf59e97.woff2') format("woff2");
   }
   max-width: 36rem;
   padding: 0 1rem;
   margin: 3rem auto 6rem;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
