import { type PropsWithChildren } from "react";

type SectionProps = {
  number: number;
  title: string;
} & PropsWithChildren;

const Section = ({ number, title, children }: SectionProps) => (
  <section>
    <h2 className="mb-8 mt-10 text-2xl dark:text-white">
      <span className="mr-2 text-primary dark:text-primary-light">
        {number < 10 ? `0${number}` : number}
      </span>
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
