import React from "react";
import '../stylesSheets/testimonials.css';

function Testimony(props) {
  return (
    <div className="containerTestimony">
      <img className="imageTestimony" src={require(`../images/testimony-${props.image}.png`)} alt="Juanda photography"/>
      <div className="containerTextTestimony">
        <p className="nameTestimony">{props.name} in {props.country}</p>
        <p className="positionTestimony">{props.position} at {props.company}</p>
        <p className="textTestimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;