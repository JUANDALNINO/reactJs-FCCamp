import React from "react";
import '../stylesSheets/testimonials.css';

function Testimony(props) {
  return (
    <div className="containerTestimony">
      <img className="imageTestimony" src={require(`../images/testimony-${props.image}.png`)} alt="Juanda photography" />
      <div className="containerTextTestimony">
        <p className="nameTestimony">
          <b>{props.name}</b> in {props.country}
          </p>
        <p className="positionTestimony">
          {props.position} at <b>{props.company}</b>
          </p>
        <p className="textTestimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;