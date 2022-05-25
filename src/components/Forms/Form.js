import React from "react";

const Form = (props) => {
  let subComponentList = Object.keys(Form);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });

  var className = " " + props.className;

  return (
    <div className={className}>
      {subComponents.map((component) => component)}
    </div>
  );
};

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
