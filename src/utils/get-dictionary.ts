import "server-only";
import type { Locale } from "~/../i18n-config";

type Namespaces = "common";

type Dictionaries = {
  [key in Locale]: {
    [key in Namespaces]: () => Promise<Record<string, string>>;
  };
};

const dictionaries: Dictionaries = {
  en: {
    common: () =>
      import(`public/locales/en/common.json`).then((module) => module.default),
  },
  pl: {
    common: () =>
      import("public/locales/pl/common.json").then((module) => module.default),
  },
};

export const getDictionary = async (
  locale: Locale,
  namespace: Namespaces = "common"
) => await dictionaries[locale][namespace]();
