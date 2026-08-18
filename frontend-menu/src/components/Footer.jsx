import React from 'react';
import PropTypes from 'prop-types';
import github from '../pictures/icons8-github-96.png';
import linkedin from '../pictures/icons8-linkedin-96.png';
import instagram from '../pictures/icons8-instagram-96.png';
import tanjNezu from '../pictures/tanjiroAndNezuko.webp';
import rengoku from '../pictures/rengoku.png';
import logo from '../pictures/logoNoBack.png';
import whatsapp from '../pictures/icons8-whatsapp-64.png';
import '../style/footer.css';

class Footer extends React.Component {
  getPubliFooter = () => {
    return (
      <div className="Footer-publi-secund">
        <section className="Section-Links">
          <a
            className="Link-social"
            href="https://www.instagram.com/biglanchesdotanjiro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ instagram } alt="Instagram Link" />
          </a>
          <a
            className="Link-social"
            href="https://wa.me/31999739177"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ whatsapp } alt="WhatsApp Link" />
          </a>
        </section>
        <p>
          Big Lanches Do Tanjiro
          <br />
          &copy; 2026
          <br />
          Todos os direitos reservados
        </p>
        <p className="Info_version">v1.8.9</p>
      </div>
    );
  };

  getMyPubliFooter = () => {
    return (
      <div className="Footer-publi-end">
        <p>
          Direct by
          <br />
          <a
            className="Link-name"
            href="https://fabriciomyportifolio.vercel.app/home"
            target="_blank"
            rel="noreferrer"
          >
            Fabrício&reg; 2024
          </a>
        </p>
        <section className="Section-Links">
          <a
            className="Link-social"
            href="https://github.com/FabricioAnastacio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ github } alt="Github Link" />
          </a>
          <a
            className="Link-social"
            href="https://www.linkedin.com/in/far-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ linkedin } alt="Linkedin Link" />
          </a>
          <a
            className="Link-social"
            href="https://www.instagram.com/fabricio.rodrigues_2.0_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ instagram } alt="Instagram Link" />
          </a>
        </section>
        <section className="Section-Publi-end">
          <p>
            ícones by
            {' '}
            <a
              className="Link-social"
              href="https://github.com/FabricioAnastacio"
              target="_blank"
              rel="noreferrer"
            >
              Icons8
            </a>
          </p>
        </section>
      </div>
    );
  };

  getImgFooter = () => {
    const { page } = this.props;

    switch (page) {
    case 'order':
      return tanjNezu;
    case 'menu':
      return rengoku;
    default:
      return logo;
    }
  };

  render() {
    return (
      <footer className={ `Footer-page-${false}` }>
        <img
          className="TanjNezu-Footer"
          src={ this.getImgFooter() }
          alt="Tanjiro and Nezuko"
        />
        <p>Obrigado pela visita!</p>
        <div className="Footer-content">
          { this.getMyPubliFooter() }
          <hr className="line_center" />
          { this.getPubliFooter() }
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Footer;
