
import React from 'react';

const PreviewButton = ({ handlePreview, disabled }) => (
  <button className="PreviewButton" onClick={handlePreview} disabled={disabled}>
    معاينة
  </button>
);

export default PreviewButton;
