// Library imports
import React from "react";

/**
 * Component for providing a Section, a Section separates the subcomponents into
 * a distinguishable grouping. Designed to be re-usable and consistent.
 *
 * Status: complete
 */
const Section = (props) => {
  // Get a list of DOM keys used for Section component
  let subComponentList = Object.keys(Section);
  // Iterate through the list of child components provided
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });

  // Set the high level css class for a Section
  let className = "section " + props.className;

  return (
    <div className={className}>
      {subComponents.map((component) => component)}
    </div>
  );
};

// Header component for naming the grouping
const Header = (props) => {
  let className = "section-header " + props.className;
  return <h2 className={className}>{props.children}</h2>;
};
Header.displayName = "Header";
Section.Header = Header;

// Body component for grouping subcomponents
const Body = (props) => {
  let className = "section-body " + props.className;
  return <div className={className}>{props.children}</div>;
};
Body.displayName = "Body";
Section.Body = Body;

// Bar for visibly separating subcomponents
const Bar = (props) => {
  let className = " " + props.className;
  return <hr className={className} />;
};
Bar.displayName = "Bar";
Section.Bar = Bar;

export default Section;
