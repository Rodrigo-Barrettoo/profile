import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rodrigo Barreto</title>
        <meta
          name="description"
          content="Algumas informações dez Rodrigo Barreto"
        />
        <link rel="icon" href="/rb-dark.png" type="image/x-icon" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
