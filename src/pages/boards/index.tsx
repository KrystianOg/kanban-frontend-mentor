import { type NextPage } from "next";
import Head from "next/head";
import { getServerSideTranslations } from "~/utils";
import { Default as DefaultLayout } from "~/layouts";

const Boards: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kanban | Board</title>
        <meta name="description" content="This is board of our kanban app" />
      </Head>
      <DefaultLayout>
        <main></main>
      </DefaultLayout>
    </>
  );
};

export default Boards;

export const getServerSideProps = getServerSideTranslations("boards");
