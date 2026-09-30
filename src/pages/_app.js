import Head from 'next/head';

import '../styles/site.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Theron Bueno · Site Reliability Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Theron Bueno, Site Reliability Engineer for banks and SaaS platforms. Available for remote SRE contracts." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
