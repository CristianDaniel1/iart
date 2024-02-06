import { type ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
  className: string;
  headerCenter?: boolean;
};

export const Section = ({
  title,
  children,
  className,
  headerCenter,
}: SectionProps) => {
  return (
    <section className={className}>
      <h2
        className={`text-3xl sm:text-4xl text-gradient font-medium max-base lg:max-container my-8 px-4 sm:px-6 ${
          headerCenter ? 'text-center' : ''
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
