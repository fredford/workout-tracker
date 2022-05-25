import React from "react";

const Section = (props) => {
  let subComponentList = Object.keys(Section);

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

const Header = (props) => {
  let className = "section-header " + props.className;
  return <h2 className={className}>{props.children}</h2>;
};
Header.displayName = "Header";
Section.Header = Header;

const Body = (props) => {
  let className = "section-body " + props.className;
  return <div className={className}>{props.children}</div>;
};
Body.displayName = "Body";
Section.Body = Body;

const Bar = (props) => {
  let className = " " + props.className;
  return <hr className={className} />;
};
Bar.displayName = "Bar";
Section.Bar = Bar;

export default Section;
