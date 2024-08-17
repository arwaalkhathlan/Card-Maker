
import React from 'react';

const PreviewButton = ({ handlePreview, disabled }) => (
  <button onClick={handlePreview} disabled={disabled}>
    Preview Card
  </button>
);

export default PreviewButton;
