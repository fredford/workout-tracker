import React from "react";

const IconCard = ({ className, title, subtitle, children, Icon }) => {
  let cardClassName = "basic-card ";
  cardClassName += className ? className : "";

  return (
    <div className={cardClassName}>
      <div className="icon-card__body-container">
        <Icon className="icon-image" />
        <div className="icon-card__header">
          {title ? <h3 className="basic-card__title">{title}</h3> : <></>}
          {subtitle ? <h3 className="basic-card__subtitle">{subtitle}</h3> : <></>}
        </div>
      </div>
      {children}
    </div>
  );
};
export default IconCard;
