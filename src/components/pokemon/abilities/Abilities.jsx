import React from "react";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const Abilities = (props) => (
  <div className="element-container">
    <h3>ABILITIES</h3>
    {props.abilities.map((element, index) => (
        <div key={index} className="abilities"> 
          <Chip
            avatar={<Avatar>A</Avatar>}
            label={element.ability.name}
            clickable
            color="secondary"/>
        </div>
      ))}
  </div>
);

export default Abilities;
