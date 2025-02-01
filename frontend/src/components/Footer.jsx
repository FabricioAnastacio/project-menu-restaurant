import React from 'react';
import PropTypes from 'prop-types';
import github from '../pictures/svgs/icons8-github.svg';
import linkedin from '../pictures/svgs/icons8-linkedin.svg';
import instagram from '../pictures/svgs/icons8-instagram.svg';
import '../style/footer.css';

class Footer extends React.Component {
  render() {
    const { imgOpem } = this.props;

    return (
      <footer className={ `Footer-page-${imgOpem}` }>
        <p>
          Direct by
          {' '}
          <a
            className="Link-name"
            href="https://github.com/FabricioAnastacio"
            target="_blank"
            rel="noreferrer"
          >
            Fabrício&reg; 2024
          </a>
        </p>
        <hr />
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
        <section className="Section-Publi">
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
      </footer>
    );
  }
}

Footer.propTypes = {
  imgOpem: PropTypes.bool.isRequired,
};

export default Footer;
