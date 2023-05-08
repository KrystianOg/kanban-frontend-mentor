import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getServerSideTranslations } from "~/utils";
import { Default as DefaultLayout } from "~/layouts";
import { useTranslation } from "next-i18next";
import { Column, Task } from "~/components/Board";

import { board as exampleBoard, type LocalBoard } from "~/mocks/board1";
import classNames from "classnames";

const Boards: NextPage = () => {
  const { t } = useTranslation("boards");

  const [board, setBoard] = useState<LocalBoard | null>(null);

  // simulates loading state, should be removed later
  useEffect(() => {
    const fetchBoard = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(exampleBoard);
        }, 2500);
      });
    fetchBoard()
      .then((res) => setBoard((res as LocalBoard) ?? null))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <title>Kanban | {t("title")}</title>
        <meta name="description" content="This is board of our kanban app" />
      </Head>
      <DefaultLayout>
        <main
          className={classNames("flex h-full p-6", {
            "flex-col items-center justify-center": !board,
            "flex-row gap-6": board,
          })}
        >
          {!board ? (
            <>
              <h2 className="text-slate-500">{t("boardEmpty")}</h2>
              <button className="text-white">{t("addNewColumn")}</button>
            </>
          ) : (
            <>
              {board.columns.map((column, id) => (
                <Column key={id} column={column} />
              ))}
            </>
          )}
        </main>
      </DefaultLayout>
    </>
  );
};

export default Boards;

export const getServerSideProps = getServerSideTranslations("boards");
