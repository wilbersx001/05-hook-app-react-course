import PropTypes from 'prop-types';
// import { memo } from 'react';
import React from 'react'



const Small = React.memo(({ value }) => {
    Small.displayName = 'Small'
  console.log('Me volvi a generar :( ');
  return <small>{value}</small>;
});

Small.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Small;