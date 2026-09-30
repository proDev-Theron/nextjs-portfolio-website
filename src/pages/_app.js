import Head from 'next/head';

import '../styles/site.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Theron Bueno · Site Reliability Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Theron Bueno, Site Reliability Engineer. Evidence-driven incident diagnosis, AWS, EKS, Terraform, and networking." />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Theron Bueno · Site Reliability Engineer" />
        <meta property="og:description" content="Case studies in incident diagnosis, production migrations, and infrastructure guardrails." />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content="#F5F6F4" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
