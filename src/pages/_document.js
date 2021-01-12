import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export default class extends Document {
  render() {
    return (
        <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
        </Html>
    )
  }
}