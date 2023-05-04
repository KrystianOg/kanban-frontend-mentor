import { type NextRequest, NextResponse } from "next/server";
import { i18n, type Locale } from "../i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // eslint-disable-next-line
  // @ts-ignore-next-line
  const locales: Locale[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

function splitPath(url: string): [string, string] {
  const parts = url.split("/");
  const firstPart = parts.slice(1, 2).join();
  const secondPart = parts.slice(2).join("/");

  console.info(firstPart, ":", secondPart);

  return [firstPart, secondPart];
}

export function middleware(request: NextRequest) {
  const pathname = splitPath(request.nextUrl.pathname);
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !(pathname[0] === locale) && pathname[0] !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname[1]}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
