import React from 'react';
import PropTypes from 'prop-types';
import '../style/header.css';
import imgNoTiaoProfile from '../imgs/noTiao.jpg';
import searchIcon from '../imgs/icons8-search-more-48.png';
import filterIcon from '../imgs/icons8-filter-48.png';
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
            <h1>No Tião</h1>
          </aside>
          <section className="Section-search">
            <a
              className="Btms-network"
              href="https://web.whatsapp.com/"
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
            <button className="Btms-search">
              <img src={ searchIcon } alt="pesquisar" />
            </button>
            <button className="Btms-search">
              <img src={ filterIcon } alt="filtrar" />
            </button>
          </section>
        </div>
        <section className="Select-item">
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
