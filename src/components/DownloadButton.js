
import React from 'react';

const DownloadButton = ({ handleDownload, disabled }) => (
  <button onClick={handleDownload} disabled={disabled}>
    تحميل
  </button>
);

export default DownloadButton;
