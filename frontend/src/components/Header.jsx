import React from 'react';
import PropTypes from 'prop-types';
import '../style/header.css';
import searchIcon from '../pictures/icons8-search-more-48.png';
import iconsWhatsapp from '../pictures/icons8-whatsapp-48.png';
import iconsInstagram from '../pictures/icons8-instagram-48.png';
import logoImg from '../pictures/logo.jpg';

class Header extends React.Component {
  render() {
    const {
      hotDrink,
      drinks,
      foods,
      alcoholFree,
      beer,
      handleChenge,
      handleChengeThow,
      imgOpen,
    } = this.props;

    return (
      <header className={ `Header-geral-${imgOpen}` }>
        <div className="Header-Fixed">
          <img src={ logoImg } alt="logoImg" />
          <h1>
            CARDAPIO
          </h1>
        </div>
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
        <section className="Select-item">
          <label className={ `Label-select-${drinks}` }>
            <input
              type="checkbox"
              checked={ drinks }
              name="drink"
              onChange={ handleChenge }
            />
            Bebidas
          </label>
          <label className={ `Label-select-${foods}` }>
            <input
              type="checkbox"
              checked={ foods }
              name="food"
              onChange={ handleChenge }
            />
            Petiscos
          </label>
          <button className="Btms-search">
            <img src={ searchIcon } alt="pesquisar" />
          </button>
        </section>
        <section className={ `Select-item-thow-${drinks}` }>
          <label className={ `Label-select-thow-${hotDrink}` }>
            <input
              type="checkbox"
              checked={ hotDrink }
              name="hotDrink"
              onChange={ handleChengeThow }
            />
            Drinks
          </label>
          <label className={ `Label-select-thow-${beer}` }>
            <input
              type="checkbox"
              checked={ beer }
              name="beer"
              onChange={ handleChengeThow }
            />
            Cervejas
          </label>
          <label className={ `Label-select-thow-${alcoholFree}` }>
            <input
              type="checkbox"
              checked={ alcoholFree }
              name="alcoholFree"
              onChange={ handleChengeThow }
            />
            Sem alcool
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
  handleChengeThow: PropTypes.func.isRequired,
  imgOpen: PropTypes.bool.isRequired,
  alcoholFree: PropTypes.bool.isRequired,
  beer: PropTypes.bool.isRequired,
  hotDrink: PropTypes.bool.isRequired,
};

export default Header;
