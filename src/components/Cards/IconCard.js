import React from "react";

const IconCard = ({ className, title, subtitle, children, icon }) => {
  let cardClassName = "basic-card ";
  cardClassName += className ? className : "";

  return (
    <div className={cardClassName}>
      {title ? (
        <div className="basic-card__header">
          {title ? <h3 className="basic-card__title">{title}</h3> : <></>}
          {subtitle ? <h3 className="basic-card__subtitle">{subtitle}</h3> : <></>}
        </div>
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};
export default IconCard;
