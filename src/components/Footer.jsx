import './../scss/Footer.scss';

export const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__info">
          <div className="footer__logo">
          <img src={process.env.PUBLIC_URL + '/img/photo_1.jpg'} alt="Logo" />
          </div>
          <div className="footer__contacts">
            <h4>Контакти</h4>
            {/* <p>Про компанію</p> */}
            <p>Наша команда</p>
            <p>Наші партнери</p>
            <p>dreamtour@gmail.com</p>
          </div>
          <div>            
            <h4>Ми в соціальних мережах</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Telegram</p>
          </div>
        </div>
        <p className="footer__text">Dream tour | All Rights Reserved 2024</p>
      </footer>
    )
}

// export default Footer;