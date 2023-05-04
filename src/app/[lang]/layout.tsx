import type { PropsWithChildren } from "react";
import "~/styles/globals.css";
import type { Locale } from "../../types/i18n";

type LayoutProps = PropsWithChildren<{
  params: {
    lang: Locale;
  };
}>;

export default function Layout({ children, params: { lang } }: LayoutProps) {
  return (
    <html lang={lang}>
      <head>
        <title>Kanban App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
