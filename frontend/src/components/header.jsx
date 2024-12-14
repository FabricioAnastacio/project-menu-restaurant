import React from 'react';
import PropTypes from 'prop-types';
import '../style/header.css';
import imgNoTiaoProfile from '../imgs/noTiao.jpg';
import searchIcon from '../imgs/icons8-search-more-48.png';
import iconsWhatsapp from '../imgs/icons8-whatsapp-48.png';
import iconsInstagram from '../imgs/icons8-instagram-48.png';

class Header extends React.Component {
  render() {
    const { drinks, foods, handleChenge, imgOpen } = this.props;

    return (
      <header className={ `Header-geral-${imgOpen}` }>
        <div className="Header-Title">
          <aside className="Title-profile">
            <img className="Img-profile" src={ imgNoTiaoProfile } alt="NoTiao" />
            <h1>
              NO TIÃO
            </h1>
          </aside>
          <section className="Section-network">
            <a
              className="Btms-network"
              href="https://wa.me/3185832876"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ iconsWhatsapp } alt="whatsapp" />
            </a>
            <a
              className="Btms-network"
              href="https://www.instagram.com/notiao/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ iconsInstagram } alt="instagram" />
            </a>
          </section>
        </div>
        <section className="Select-item">
          <div>
            <label className={ `Label-select-${drinks}` }>
              <input
                type="checkbox"
                checked={ drinks }
                name="drinks"
                onChange={ handleChenge }
              />
              Drinks
            </label>
            <label className={ `Label-select-${foods}` }>
              <input
                type="checkbox"
                checked={ foods }
                name="foods"
                onChange={ handleChenge }
              />
              Petiscos
            </label>
          </div>
          <button className="Btms-search">
            <img src={ searchIcon } alt="pesquisar" />
          </button>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
  imgOpen: PropTypes.bool.isRequired,
};

export default Header;
