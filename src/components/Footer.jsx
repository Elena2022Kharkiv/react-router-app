import './../scss/Footer.scss';

export const Footer = () => {
    return (
      <footer className="footer">
        {/* <div className="footer__info"> */}
          <div className="footer__logo">
          <img src={process.env.PUBLIC_URL + '/img/photo_1.jpg'} alt="Logo" />
          </div>
          <div className="footer__contacts">
            <h4 className="footer__title">Контакти</h4>
            <p className="footer__dream">Наша команда</p>
            <p className="footer__partners">Наші партнери</p>
            <p className="footer__mail">dreamtour@gmail.com</p>
          </div>
          <div  className="footer__info">            
            <h4 className="footer__title">Ми в соціальних мережах</h4>
            <p className="footer__network">Facebook</p>
            <p className="footer__network">Instagram</p>
            <p className="footer__network">Telegram</p>
          </div>
        {/* </div> */}
        {/* <p className="footer__text">Dream tour</p>
        <p className="footer__text">2024</p> */}
        {/* <p className="footer__text">Dream tour | All Rights Reserved 2024</p> */}
      </footer>
    )
}

// export default Footer;