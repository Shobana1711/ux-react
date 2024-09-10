import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // console.log("initialProps", JSON.stringify(initialProps, null, 2));
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="shortcut icon"
            href={`${publicRuntimeConfig.basePath || ""}/favicon.png`}
            type="image/png"
          /> */}
          <link
            rel="alternate"
            type="application/rss+xml"
            title="ux-ui"
            href="#"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
