import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, statName } = props;

  const containerStyles = {
    height: '100%',
    width: '20vw',
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '200%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <p className="text-stats">{statName}</p>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;