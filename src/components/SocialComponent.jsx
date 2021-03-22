import React from "react";

const SocialComponent = () => {
  return (
    <div className="socialComponent">
      <div className="social_icon social__phone">
        <a href="#">
          <img
            src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg"
            alt="phone"
          />
        </a>
      </div>
      <div className="social_icon social__whatssap">
        <a href="#">
          <img
            src="https://i.pinimg.com/originals/44/d5/2f/44d52fbbc881bc779801fda90e227c11.jpg"
            alt="whatsap"
          />
        </a>
      </div>
      <div className="social_icon social__viber">
        <a href="#">
          <img
            src="https://www.clipartmax.com/png/middle/87-872578_viber-icon-transparent-png.png"
            alt="viber"
          />
        </a>
      </div>
      <div className="social_icon social__facebook">
        <a href="#">
          <img
            src="https://i.pinimg.com/originals/c0/5b/41/c05b414d77a20762fede5eeed699605f.png"
            alt="facebook"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialComponent;
