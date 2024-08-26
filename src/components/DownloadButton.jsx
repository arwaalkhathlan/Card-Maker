
import React from 'react';

const DownloadButton = ({ handleDownload, disabled }) => (
  <button className="DownloadButton" onClick={handleDownload} disabled={disabled}>
    تحميل
  </button>
);

export default DownloadButton;
