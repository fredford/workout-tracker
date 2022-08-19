import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  className,
  onClick,
  children,
  Icon,
  path,
  iconSize,
  src,
  srcId,
  alt,
  fill,
  iconOnly,
  disabled,
  toggle,
  active,
  danger,
  id,
  onChange,
}) => {
  let buttonClassName = "button-basic " + (className ?? "");
  buttonClassName += fill ? " button-fill" : "";
  buttonClassName += iconOnly ? " button-icon" : "";
  buttonClassName += disabled ? " button-disabled" : "";
  buttonClassName += active ? " button-active" : "";
  buttonClassName += danger ? " button-danger" : "";

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (path && onClick) {
      onClick(e);
      navigate(path);
    } else if (path && !onClick) {
      navigate(path);
    } else if (!path && onClick) {
      onClick(e);
    } else if (onChange) {
      onChange(id);
    }
  };

  if (toggle) {
    let imageClassName = " standard-image " + (active ?? "image-active");
    let iconClassName = " toggle-icon " + (active ?? " icon-active ");

    return (
      <div className="button-toggle">
        <button className={buttonClassName} onClick={handleClick} disabled={disabled}>
          {src || srcId ? <img className={imageClassName} src={src} id={srcId} alt={alt} /> : <></>}
          {Icon ? <Icon className={iconClassName} size={iconSize} /> : <></>}
        </button>
        {children ? <p>{children}</p> : <></>}
      </div>
    );
  }

  return (
    <button id={id} className={buttonClassName} onClick={handleClick} disabled={disabled}>
      {src || srcId ? <img className="standard-image" src={src} id={srcId} alt={alt} /> : <></>}
      {Icon ? <Icon size={iconSize} /> : <></>}
      {children ? <p>{children}</p> : <></>}
    </button>
  );
};

export default Button;
