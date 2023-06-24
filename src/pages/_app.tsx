import 'normalize.css/normalize.css';
import '../bemit/bemit_main.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
