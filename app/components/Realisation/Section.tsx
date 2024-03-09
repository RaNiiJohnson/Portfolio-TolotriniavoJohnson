import React from "react";

type SectionType = {
  firstLength: number;
  secondLength: number;
  firstClassName: string;
  SecondClassName: string;
};

type LastSectionType = {
  name: string;
  className: string;
};

export const Section = ({
  firstLength,
  secondLength,
  firstClassName,
  SecondClassName,
}: SectionType) => {
  return (
    <div className="col-span-3">
      <div className="grid grid-cols-12">
        {Array.from({ length: firstLength }).map((_, index: number) => (
          <section key={index} className={firstClassName}></section>
        ))}
        {Array.from({ length: secondLength }).map((_, index: number) => (
          <section key={index} className={SecondClassName}></section>
        ))}
      </div>
    </div>
  );
};

export const LastSection = ({ name, className }: LastSectionType) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <section className={className}></section>
      {name}
    </div>
  );
};
