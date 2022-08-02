// Library imports
import React from "react";

/**
 * Wrapper for a toggleable button, handles displaying when a button is pressed or not
 * @param id string - DOM ID tage
 * @param checked boolean - sets whether the button is pressed or not
 * @param className string - additional CSS classes to be used
 * @param onChange  function - executes when a change is made to the state of the button
 * @param children  subcomponents - the DOM subcomponents under the wrapper
 * @param onClick   function - executes when the button is clicked
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
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
