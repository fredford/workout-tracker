import React from "react";

/**
 * Component for providing a Card, provides a series of flexible
 * sub-components that can be used to improve usability.
 *
 * Status: complete
 */
const Card = (props) => {
  // Get a list of DOM keys used for Card component
  let subComponentList = Object.keys(Card);
  // Iterate through the list of child components provided
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });

  // Set the high level css class for a Card
  let className = "card " + props.className;

  // Set the card for implementation specifics
  className += props.noBorder ? " card__no-border" : "";
  className += props.onClick ? " clickable" : "";

  return (
    <div className={className} onClick={props.onClick}>
      {subComponents.map((component) => component)}
    </div>
  );
};

// Header component as a replacement to Section header text
const Header = (props) => {
  let className = "card-header " + props.className;
  return (
    <>
      <h3 className={className}>{props.children}</h3>
      {props.bar ? <hr className="card-bar" /> : <></>}
    </>
  );
};
Header.displayName = "Header";
Card.Header = Header;

// Container to display an image with text beside
const ImageHeader = (props) => {
  let className = `card-image-body__header ${props.className}`;
  return (
    <div className={className}>
      <div className="me-3 d-flex align-items-center">
        <img src={props.path} alt="" className="card-image-body__image" />
      </div>
      <div className="card-image-body">{props.children}</div>
    </div>
  );
};
ImageHeader.displayName = "ImageHeader";
Card.ImageHeader = ImageHeader;

// Title component displaying the primary title or text
const Title = (props) => {
  let className = "card-title " + props.className;
  return <h4 className={className}>{props.children}</h4>;
};
Title.displayName = "Title";
Card.Title = Title;

// Subtitle component displaying the secondary title or text
const Subtitle = (props) => {
  let className = "card-subtitle " + props.className;
  return <h5 className={className}>{props.children}</h5>;
};
Subtitle.displayName = "Subtitle";
Card.Subtitle = Subtitle;

// Body container displaying the remaining components in the Card
const Body = (props) => {
  let className = "card-body " + props.className;
  return <div className={className}>{props.children}</div>;
};
Body.displayName = "Body";
Card.Body = Body;

// Base sized text
const Text = (props) => {
  let className = "card-text " + props.className;
  return <p className={className}>{props.children}</p>;
};
Text.displayName = "Text";
Card.Text = Text;

// Bar separator for separating different components in the Card
const Bar = (props) => {
  let className = "card-bar " + props.className;
  return <hr className={className} />;
};
Bar.displayName = "Bar";
Card.Bar = Bar;

export default Card;
