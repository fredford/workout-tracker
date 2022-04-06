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

const Body = (props) => <div className="card-body">{props.children}</div>;
Card.Body = Body;
const Title = (props) => {
  let className = "card-title " + props.className;
  return <h5 className={className}>{props.children}</h5>;
};
Card.Title = Title;

const Subtitle = (props) => {
  let className = "card-subtitle " + props.className;
  return <h6 className={className}>{props.children}</h6>;
};
Card.Subtitle = Subtitle;

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
