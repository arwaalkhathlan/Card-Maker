import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "../../styles/App.css";

const Hero = () => {
  return (
    <>
      <MDBContainer className="mt-5">
        <div className="p-4 shadow-4 rounded-3">
          <div className="text-center mb-4">
            <h1 className="Text-Title text-white">منصة مسرة</h1>
            <h1 style={{ color: '#00D2DD' }}>لحملة تسويقية عبر موظفيك </h1>
            <br/>
            <h3 className="text-white">
              قم بإنشاء بطاقات تهنئة مخصصة للمناسبات بسهولة وسرعة. شاركها الفريق
              لمشاركتها في وسائل التواصل مخصصة بثيم موحد!{" "}
            </h3>
          </div>
        </div>
      </MDBContainer>
    </>
  );
};

export default Hero;
