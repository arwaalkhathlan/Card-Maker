import React from "react";
// TODO: Update the path to the images
import check from "../../images/check.png"; 
import download from '../../images/download.png';
import pen from '../../images/pen.png';
import thumbsUp from '../../images/thumbs-up.png';

const Services = () => {
  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2 className="text-white" style={{ fontSize: "30px", fontWeight: "bold" }}>الميزات والفوائد</h2>
      <div className="mt-5" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        <div >
          <img src={pen} alt="Logo" style={{ width: "30px", height: "30px" }} />
          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#00D2DD" }}>تصاميم مخصصة</h3>
          <p className="text-white" style={{ fontSize: "16px" }}>اختر من بين مجموعة متنوعة من التصاميم الاحترافية أو صمم بطاقاتك الخاصة لتتوافق مع العلامة التجارية لشركتكم </p>
        </div>
        <div>
          <img src={thumbsUp} alt="Logo" style={{ width: "30px", height: "30px" }} />
          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#00D2DD" }}>الجودة والتنوع</h3>
          <p className="text-white" style={{ fontSize: "16px" }}>بطاقاتنا تأتي بأساليب وثيمات مختلفة، مناسبة لأي مناسبة.</p>
        </div>
        <div>
          <img src={download} alt="Logo" style={{ width: "30px", height: "30px" }} />
          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#00D2DD" }}>سهولة التحميل</h3>
          <p className="text-white" style={{ fontSize: "16px" }}>بمجرد النقر على 'حفظ الصورة' يمكنكم تحميل بطاقتكم المخصصة في ثوانٍ.</p>
        </div>
        <div>
          <img src={check} alt="Logo" style={{ width: "30px", height: "25px" }} />
          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#00D2DD" }}>التخصيص</h3>
          <p className="text-white" style={{ fontSize: "16px" }}>يمكنكم بسهولة إضافة أسماء الموظفين إلى كل بطاقة، مما يجعلهم يشعرون بالتقدير والامتنان.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
