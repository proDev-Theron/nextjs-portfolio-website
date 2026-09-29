import isPropValid from '@emotion/is-prop-valid';
import Head from 'next/head';
import { StyleSheetManager } from 'styled-components';

import Theme from '../styles/theme';

// styled-components v6 forwards all props to the DOM; keep only valid HTML attributes.
const shouldForwardProp = (propName, target) =>
  typeof target === 'string' ? isPropValid(propName) : true;

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Head>
        <title>Theron Bueno - Site Reliability Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Theron Bueno, Site Reliability Engineer for banking platforms." />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </StyleSheetManager>
  );
}
 