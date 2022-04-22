/*
This file is required by Next.js,
Not intended to be modified in any way for SPA configuration. 
Global styles can only be imported here.
*/
import 'src/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
