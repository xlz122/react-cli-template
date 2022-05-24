import React from 'react';
import { useLocation } from 'react-router-dom';

function UseLocation(): React.ReactElement {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <p>js参数(接收)</p>
      <p>{location?.state?.id}</p>
    </>
  );
}

export default UseLocation;
