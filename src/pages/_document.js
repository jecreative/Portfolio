import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!-- link manifest.json --> */}
          <link rel='manifest' href='/manifest.json' />
          {/* <!-- this sets the color of url bar  --> */}
          <meta name='theme-color' content='#2f4c65' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://pro.fontawesome.com/releases/v5.15.1/css/all.css'
            integrity='sha384-9ZfPnbegQSumzaE7mks2IYgHoayLtuto3AS6ieArECeaR8nCfliJVuLh/GaQ1gyM'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css'
          />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-8V3CKB1XZX'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || []; function gtag()
      {dataLayer.push(arguments)}
      gtag('js', new Date()); gtag('config', 'G-8V3CKB1XZX');
        `,
            }}
          />
        </Head>
        <body className='w-screen max-w-full overflow-x-hidden font-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
