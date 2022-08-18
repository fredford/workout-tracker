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
}) => {
  let buttonClassName = "button-basic " + (className ?? "");
  buttonClassName += fill ? " button-fill" : "";
  buttonClassName += iconOnly ? " button-icon" : "";
  buttonClassName += disabled ? " button-disabled" : "";
  buttonClassName += active ? " button-active" : "";

  const navigate = useNavigate();

  const handleClick = () => {
    if (path && onClick) {
      onClick();
      navigate(path);
    } else if (path && !onClick) {
      navigate(path);
    } else if (!path && onClick) {
      onClick();
    } else {
      return;
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
    <button className={buttonClassName} onClick={handleClick} disabled={disabled}>
      {src || srcId ? <img className="standard-image" src={src} id={srcId} alt={alt} /> : <></>}
      {Icon ? <Icon size={iconSize} /> : <></>}
      {children ? <p>{children}</p> : <></>}
    </button>
  );
};

export default Button;
