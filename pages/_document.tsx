import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="fr">
        <Head>
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="preload"
            href="/fonts/spline-sans-v8-latin-700.woff"
            as="font"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://cpemael.avenir-resa.fr/"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
