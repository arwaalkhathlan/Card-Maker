
import React from 'react';

const PreviewButton = ({ handlePreview, disabled }) => (
  <button onClick={handlePreview} disabled={disabled}>
    معاينة
  </button>
);

export default PreviewButton;
