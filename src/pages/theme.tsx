import { type NextPage } from "next";
import Head from "next/head";

import { Color, Section, Text } from "~/components/theme";
import { Button, Checkbox, TextField, Dropdown } from "~/components/base";
import { getServerSideTranslations } from "~/utils";
import { useTranslation } from "next-i18next";

const Theme: NextPage = () => {
  const { t } = useTranslation("theme");

  return (
    <>
      <Head>
        <title>Kanban | Theme</title>
        <meta name="description" content="This is design showoff of our app" />
      </Head>
      <main className="flex min-h-screen  flex-col items-center dark:bg-slate-700">
        <div className="max-w-screen-lg px-2 pb-16 sm:px-6">
          <Section number={1} title="Colors">
            <div className="flex flex-wrap items-center justify-center gap-y-4">
              <Color hex="#635FC7" rgb={[99, 95, 199]} hsl={[242, 48, 58]} />
              <Color hex="#A8A4FF" rgb={[168, 164, 255]} hsl={[243, 100, 82]} />
              <Color hex="#000112" rgb={[0, 1, 18]} hsl={[237, 100, 4]} />
              <Color hex="#20212c" rgb={[32, 33, 44]} hsl={[235, 16, 15]} />

              <Color hex="#2B2C37" rgb={[43, 44, 55]} hsl={[235, 12, 19]} />
              <Color hex="#3E3F4E" rgb={[62, 63, 78]} hsl={[236, 11, 27]} />
              <Color hex="#828FA3" rgb={[130, 143, 163]} hsl={[216, 15, 57]} />
              <Color
                hex="#E4EBFA"
                rgb={[228, 235, 250]}
                hsl={[221, 69, 94]}
                darkText
              />

              <Color
                hex="#F4F7FD"
                rgb={[244, 247, 253]}
                hsl={[220, 69, 97]}
                darkText
              />
              <Color
                hex="#FFFFFF"
                rgb={[255, 255, 255]}
                hsl={[0, 0, 100]}
                darkText
              />
              <Color hex="#EA5555" rgb={[234, 85, 85]} hsl={[0, 78, 63]} />
              <Color hex="#FF9898" rgb={[255, 152, 152]} hsl={[0, 100, 80]} />
            </div>
          </Section>
          <Section number={2} title="Typography">
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="flex flex-col justify-between sm:w-2/5 sm:pb-48">
                <Text fontSize={24} lineHeight={30}>
                  <h1>{t("heading")} (XL)</h1>
                </Text>
                <Text fontSize={18} lineHeight={23}>
                  <h2>{t("heading")} (L)</h2>
                </Text>
                <Text fontSize={15} lineHeight={19}>
                  <h3>{t("heading")} (M)</h3>
                </Text>
                <Text fontSize={14} lineHeight={18}>
                  <h4>{t("heading")} (S)</h4>
                </Text>
              </div>
              <div className="flex flex-col gap-6 sm:w-3/5">
                <Text fontSize={14} lineHeight={18}>
                  <p>
                    {/* cSpell:disable */}
                    Body (L) - Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                    nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                    mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
                    viverra, tortor libero sodales leo, eget blandit nunc tortor
                    eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed
                    egestas, ante et vulputate volutpat, eros pede semper est,
                    vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing, commodo quis, gravida id, est.
                    {/* cSpell:enable */}
                  </p>
                </Text>
                <Text fontSize={12} lineHeight={15}>
                  <p>
                    {/* cSpell:disable */}
                    Body (M) - Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                    nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                    mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
                    viverra, tortor libero sodales leo, eget blandit nunc tortor
                    eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed
                    egestas, ante et vulputate volutpat, eros pede semper est,
                    vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing, commodo quis, gravida id, est.
                    {/* cSpell:enable */}
                  </p>
                </Text>
              </div>
            </div>
          </Section>
          <Section number={3} title="Interactive Elements">
            <div>
              {/* TODO: implement button */}
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
              <Button />
            </div>
            <div className="flex gap-8">
              <div className="flex w-1/3 flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white">
                  Subtask checkbox
                </h3>
                <Checkbox text={t("idle")} />
                <Checkbox text={t("hovered")} />
                <Checkbox text={t("completed")} defaultChecked />
              </div>
              <div className="flex w-1/3 flex-col gap-2">
                <TextField
                  label={`${t("textfield")} (${t("idle")})`}
                  placeholder={t("enterTaskName") ?? ""}
                  labelClassName="capitalize"
                  className="capitalize"
                />
                <TextField
                  label={`${t("textfield")} (${t("active")})`}
                  placeholder={t("enterTaskName") ?? ""}
                  defaultValue={t("buildingASlideshow") ?? ""}
                  labelClassName="capitalize"
                />
                <TextField
                  label={`${t("textfield")} (${t("error")})`}
                  placeholder={t("enterTaskName") ?? ""}
                  valid={false}
                  errorMessage={t("cantBeEmpty") ?? ""}
                  labelClassName="capitalize"
                />
              </div>
              <div className="w-1/3">
                {/* TODO: implement dropdown */}Dropdown
                <Dropdown />
                <Dropdown />
                <Dropdown />
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
};

export default Theme;

export const getServerSideProps = getServerSideTranslations("theme");
