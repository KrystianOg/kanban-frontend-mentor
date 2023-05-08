import { type NextPage } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "~/components";
import { getServerSideTranslations } from "~/utils";

const Custom404: NextPage = () => {
  const { t } = useTranslation("404");
  return (
    <>
      <Head>
        <title>Kanban | {t("title")}</title>
        <meta name="description" content="This is board of our kanban app" />
      </Head>
      <div className="flex h-screen w-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-700 dark:text-white">
        <Header />
        <main className="mb-40 flex flex-grow  flex-col items-center justify-center gap-6 text-center">
          <h2 className="mb-10 text-8xl text-primary-light">{t("title")}</h2>
          <h1 className="text-7xl">{t("header")}</h1>
          <h3 className="text-4xl text-slate-200">{t("description")}</h3>
          <Link
            href="/"
            className="rounded-full px-16 py-4 text-3xl text-primary"
          >
            {t("redirect")}
          </Link>
        </main>
      </div>
    </>
  );
};

export default Custom404;

export const getStaticProps = getServerSideTranslations("404");
