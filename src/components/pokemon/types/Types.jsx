import React from "react";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const Types = (props) => (
  <div className="element-container">
    <h3>TYPE</h3>
    {props.types.map((element, index) => (
        <div key={index} className="types"> 
          <Chip
            avatar={<Avatar>T</Avatar>}
            label={element.type.name}
            clickable
            color="primary"/>
        </div>
      ))}
  </div>
);

export default Types;
