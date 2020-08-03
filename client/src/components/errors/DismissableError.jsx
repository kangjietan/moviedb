import React, { useState } from 'react';

function DismissableError({ error }) {
  const [dismiss, setDismiss] = useState(false);

  if (dismiss) return null;
  
  return (
    <div className="alert alert-warning" role="alert">
      {error.msg}
      <button type="button" className="close" onClick={() => { setDismiss(true) }} aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default DismissableError;