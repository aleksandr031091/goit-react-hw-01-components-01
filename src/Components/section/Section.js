import React from "react";
import css from "./Section.module.css";

const Section = ({ children, title }) => {
  return (
    <section className={css.section}>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </section>
  );
};

export default Section;
