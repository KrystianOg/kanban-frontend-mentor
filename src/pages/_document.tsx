import { Html, Head, Main, NextScript } from "next/document";
// TODO: to be added
// import { useTernaryDarkMode } from "usehooks-ts";

const Document = () => {
  // TODO: add context for this
  // const { isDarkMode } = useTernaryDarkMode();
  return (
    <Html className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
