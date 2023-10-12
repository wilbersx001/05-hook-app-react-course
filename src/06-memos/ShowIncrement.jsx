import React from "react";



export const ShowIncrement = React.memo(({ increment }) => {
    ShowIncrement.displayName = 'ShowIn'
  console.log('Me volvi a generar :( ');
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  );
});
