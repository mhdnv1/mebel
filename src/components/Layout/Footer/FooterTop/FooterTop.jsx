import React from "react";

const FooterTop = () => {
  return (
    <div className="footer__top">
      <div className="footer__navigation">
        <div className="row">
          <div className="col-4">
            <h3 className="footer__navigation-title">НАВИГАЦИЯ</h3>
            <p className="footer__navigation-text">Кухни</p>
            <p className="footer__navigation-text">Спальни</p>
            <p className="footer__navigation-text">Гостинные</p>
          </div>
          <div className="col-4">
            <p className="footer__navigation-text">Прихожие</p>
            <p className="footer__navigation-text">Офисная мебель</p>
            <p className="footer__navigation-text">Детская</p>
          </div>
          <div className="col-4">
            <p className="footer__navigation-text">Шкафы</p>
            <p className="footer__navigation-text">Матрасы</p>
            <p className="footer__navigation-text">Мягкая мебель</p>
          </div>
        </div>
      </div>
      <div className="footer__address">
        <h2 className="footer__address-title">LM</h2>
        <p className="footer__address-text">
          г. Анапа, Анапское шоссе, <br />
          30 Ж/К Черное море
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
