
import React from "react";
import "../styles/App.css";

const UploadCardButton = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpload(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-card-button">
      <label htmlFor="upload-card" className="btn btn-secondary">
        تصميم بطاقة من عندك؟
      </label>
      <input
        type="file"
        id="upload-card"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadCardButton;
