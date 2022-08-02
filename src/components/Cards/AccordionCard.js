// Library imports
import React from "react";
import { Accordion } from "react-bootstrap";

/**
 * Component for providing an Accordion wrapper, provides a series of flexible
 * subcomponents that can be used to improve re-usability
 *
 * Status: completed
 */
const AccordionCard = (props) => {
  // Get a list of DOM keys used for the Accordion component
  let subComponentList = Object.keys(AccordionCard);
  // Iterate through the list of child components provided
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });

    // Set the high level css class for the Accordion
  let className = "accordion-card " + props.className;

  return (
    <div className={className} onClick={props.onClick}>
      <Accordion>
        <Accordion.Item eventKey="0">
          {subComponents.map((component) => component)}
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

// Header component as a replacement to Section header text
const Header = (props) => {
  return (
    <Accordion.Header>
      <div className="workout-sets__header">
        <div className="workout-sets__header-text">
          <h3 className="workout-sets__header-title">{props.name}</h3>
          <h4 className="workout-sets__header-type text-muted">{props.type}</h4>
        </div>
      </div>
    </Accordion.Header>
  );
};
Header.displayName = "Header";
AccordionCard.Header = Header;

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
AccordionCard.ImageHeader = ImageHeader;

// Title component displaying the primary title or text
const Title = (props) => {
  let className = "card-title " + props.className;
  return <h4 className={className}>{props.children}</h4>;
};
Title.displayName = "Title";
AccordionCard.Title = Title;

// Subtitle component displaying the secondary title or text
const Subtitle = (props) => {
  let className = "card-subtitle " + props.className;
  return <h5 className={className}>{props.children}</h5>;
};
Subtitle.displayName = "Subtitle";
AccordionCard.Subtitle = Subtitle;

// Body container displaying the remaining components in the AccordionCard
const Body = (props) => {
  let className = "p-3 " + props.className;
  return (
    <Accordion.Body className={className}>{props.children}</Accordion.Body>
  );
};
Body.displayName = "Body";
AccordionCard.Body = Body;

// Base sized text
const Text = (props) => {
  let className = "card-text " + props.className;
  return <p className={className}>{props.children}</p>;
};
Text.displayName = "Text";
AccordionCard.Text = Text;

// Bar separator for separating different components in the AccordionCard
const Bar = (props) => {
  let className = "card-bar " + props.className;
  return <hr className={className} />;
};
Bar.displayName = "Bar";
AccordionCard.Bar = Bar;

export default AccordionCard;
