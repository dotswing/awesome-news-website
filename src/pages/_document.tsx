import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ __NEXT_DATA__ }: any) {
  const pageProps = __NEXT_DATA__?.props?.pageProps;
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
