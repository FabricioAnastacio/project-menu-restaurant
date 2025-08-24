import React from 'react';
import PropTypes from 'prop-types';
import '../style/header.css';
import iconsWhatsapp from '../pictures/icons8-whatsapp-48.png';
import iconsInstagram from '../pictures/icons8-instagram-48.png';

class Header extends React.Component {
  render() {
    const {
      imgOpen,
    } = this.props;

    return (
      <header className={ `Header-geral-${imgOpen}` }>
        <div className="Header-Title">
          <aside className="Title-profile">
            <h1>
              CARDAPIO
            </h1>
          </aside>
          <section className="Section-network">
            <a
              className="Btms-network"
              href="https://wa.me/31995258603"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ iconsWhatsapp } alt="whatsapp" />
            </a>
            <a
              className="Btms-network"
              href="https://www.instagram.com/fabricio.rodrigues_2.0_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ iconsInstagram } alt="instagram" />
            </a>
          </section>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  imgOpen: PropTypes.bool.isRequired,
};

export default Header;
