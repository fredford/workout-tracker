import React from "react";

const Section = (props) => {
  let subComponentList = Object.keys(Section);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  var className = " " + props.className;

  return (
    <div className={className}>
      {subComponents.map((component) => component)}
    </div>
  );
};

const Header = (props) => {
  let className = "section-header " + props.className;
  return <h3 className={className}>{props.children}</h3>;
};
Section.Header = Header;

const Body = (props) => {
  let className = "section-body " + props.className;
  return <div className={className}>{props.children}</div>;
};
Section.Body = Body;

const Bar = (props) => {
  let className = " " + props.className;
  return <hr className={className} />;
};
Section.Bar = Bar;

export default Section;
