import React from "react";

const PageHeader = ({ className, header, subheader }) => {
  let headerClassName = "page-header ";

  headerClassName += className ?? "";

  return (
    <div className={headerClassName}>
      <h1 className="page-header__header">{header}</h1>
      <h2 className="page-header__subheader">{subheader}</h2>
      <hr className="page-header__bar" />
    </div>
  );
};

export default PageHeader;
