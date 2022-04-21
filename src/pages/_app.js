import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Mateus Zanatti Saraiva | Developer</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 