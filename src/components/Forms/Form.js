import React from "react";

/**
 * Component for providing a Form, provides a series of flexible
 * subcomponents that can be used to improve consistency and re-usability.
 *
 * Status: completed
 */
const Form = (props) => {
  // Get a list of DOM keys used for Form component
  let subComponentList = Object.keys(Form);
  // Iterate through the list of child components
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });
  // Set the high level css class for a Form
  let className = " " + props.className;

  return (
    <form className={className}>
      {subComponents.map((component) => component)}
    </form>
  );
};

// Label component to provide consistent from labeling
const Label = (props) => {
  let className = "form-label " + props.className;
  return (
    <label htmlFor={props.for} className={className}>
      {props.children}
    </label>
  );
};
Label.displayName = "Label";
Form.Label = Label;

// Input component to provide consistent input usage
const Input = (props) => {
  let className = "form-control " + props.className;
  return (
    <input
      className={className}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      autoComplete={props.autoComplete}
      required={props.required}
    />
  );
};
Input.displayName = "Input";
Form.Input = Input;

export default Form;
