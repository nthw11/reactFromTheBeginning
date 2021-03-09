import React from 'react';

function Headers(props) {
  return (
    <div>
      <h1>{props.cityName} weather</h1>
      <h6>{props.isRaining}</h6>
      <h2>{props.temp}</h2>
    </div>
  );
}

export default Headers;
