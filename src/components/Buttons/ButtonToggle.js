import React from "react";

const ButtonToggle = ({
  id,
  checked,
  className,
  onChange,
  children,
  onClick,
}) => {
  let buttonClassName = `button-toggle ${className}`;
  let inputClassName = "button-toggle__input";
  let labelClassName = "button-toggle__label";

  return (
    <div className={buttonClassName} onClick={onClick}>
      <input
        className={inputClassName}
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label className={labelClassName} id={`label-${id}`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default ButtonToggle;
