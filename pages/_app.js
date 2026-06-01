import '../styles/globals.css';
import FireflyCursor from '../components/FireflyCursor';

export default function App({ Component, pageProps }) {
  return (
    <>
      <FireflyCursor />
      <Component {...pageProps} />
    </>
  );
}
