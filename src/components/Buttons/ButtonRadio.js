import React from "react";

const ButtonRadio = ({ id, checked, className, onChange, children }) => {
  let buttonClassName = `button-radio ${className}`;
  let inputClassName = "button-radio__input";
  let labelClassName = "button-radio__label";

  const updateRadio = () => {
    onChange(id.split("-")[0]);
  };

  return (
    <div className={buttonClassName}>
      <input
        className={inputClassName}
        id={id}
        type="radio"
        onChange={updateRadio}
        checked={checked}
      />
      <label className={labelClassName} id={`label-${id}`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default ButtonRadio;
