import { createGlobalStyle } from 'styled-components';

const fontUrl =
  "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')";
const GlobalStyle = createGlobalStyle`
  fontUrl;
  body{
  padding:0;
  margin:0;
  font-family: 'Roboto', sans-serif;
}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
