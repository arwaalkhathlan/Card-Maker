
import React from 'react';

const DownloadButton = ({ handleDownload, disabled }) => (
  <button onClick={handleDownload} disabled={disabled}>
    Download Card
  </button>
);

export default DownloadButton;
