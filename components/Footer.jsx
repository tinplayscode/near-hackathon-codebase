import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer mt-2">
        <div className="overlay">
          Phiên bản Portal thử nghiệm, đang đợi trường Khoa học Tự nhiên, ĐHQG
          TP. Hồ Chí Minh cấp phép.
        </div>
      </footer>

      <style jsx>
        {`
          .footer {
            background: url(https://www.hcmus.edu.vn/images/2020/04/07/bn2.jpg);
            color: white;
            position: relative;
            height: 10rem;
          }
          .overlay {
            padding: 0.5rem;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
