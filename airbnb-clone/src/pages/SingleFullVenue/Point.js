import React from 'react';

function Point(props) {
  const descObj = props.pointDesc.find(
    (point) => point.pointTitle === props.point
  );

  return (
    <>
      <div className='point-title'>{props.point}</div>
      <div className='point-desc'>{descObj.text}</div>
    </>
  );
}

export default Point;
