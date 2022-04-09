import React from "react";

const Card = (props) => {
  let subComponentList = Object.keys(Card);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  var className = "card " + props.className;

  return (
    <div className={className}>
      {subComponents.map((component) => component)}
    </div>
  );
};

const Header = (props) => {
  let className = "card-header " + props.className;
  return <h3 className={className}>{props.children}</h3>;
};
Card.Header = Header;

const ImageHeader = (props) => (
  <div className="card-image-body">
    <div className="me-3 d-flex align-items-center">
      <img src={props.path} alt="" className="card-image-body__image" />
    </div>
    <div className="">{props.children}</div>
  </div>
);
Card.ImageHeader = ImageHeader;

const Title = (props) => {
  let className = "card-title " + props.className;
  return <h4 className={className}>{props.children}</h4>;
};
Card.Title = Title;
const Subtitle = (props) => {
  let className = "card-subtitle " + props.className;
  return <h5 className={className}>{props.children}</h5>;
};
Card.Subtitle = Subtitle;
const Body = (props) => {
  let className = "card-body " + props.className;
  return <div className={className}>{props.children}</div>;
};
Card.Body = Body;

const Text = (props) => {
  let className = "card-text " + props.className;
  return <p className={className}>{props.children}</p>;
};
Card.Text = Text;

const Bar = (props) => {
  let className = " " + props.className;
  return <hr className={className} />;
};
Card.Bar = Bar;

//const Image = (props) => <img src={props.children} alt="" />;
//Card.Image = Image;

export default Card;
