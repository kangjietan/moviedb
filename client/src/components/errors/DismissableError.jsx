import React from 'react';

function DismissableError({ error }) {
  return (
    <div className="alert alert-warning alert-dimissible fade show" role="alert">
      {error.msg}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default DismissableError;