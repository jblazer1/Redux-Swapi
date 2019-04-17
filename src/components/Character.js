import React from "react";

const Character = props => {
  return (
    <div>
      <ul>
        <li>NAME: {props.character.name}</li>
        <li>HEIGHT: {props.character.height}</li>
        <li>MASS: {props.character.mass}</li>
        <li>EYE COLOR: {props.character.eye_color}</li>
        <li>HAIR COLOR: {props.character.hair_color}</li>
        <li>GENDER: {props.character.gender}</li>
      </ul>
    </div>
  );
};

export default Character;
