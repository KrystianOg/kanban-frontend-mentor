import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "~/../next-i18next.config.mjs";

const getServerSideTranslations =
  (scopes: string[] | string) =>
  async ({ locale }: { locale: string }) => ({
    props: {
      ...(await serverSideTranslations(
        locale,
        Array.isArray(scopes) ? scopes : [scopes],
        nextI18nConfig,
        ["en", "pl"]
      )),
    },
  });

export default getServerSideTranslations;
