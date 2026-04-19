/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/pictures/logo.jpg';
import iconsCart from '../../assets/pictures/icons8-order-96.png';
import iconsFastFood from '../../assets/pictures/icons8-fast-food2-96.png';
import '../../layouts/desktop/header.css';
import AppContext from '../../context/AppContext';
import ListCategory from '../common/ListCategory';

class HeaderDesktop extends React.Component {
  buttonCart = (counterItens) => {
    return (
      <div className="button-cart">
        {
          counterItens > 0 && <p className="counter-car">{ counterItens }</p>
        }
        <img src={ iconsCart } alt="Carrinho" />
      </div>
    );
  };

  render() {
    const {
      imgOpen,
      title,
      counterItens,
      handleChenge,
      allDrinks,
      foods,
      candy,
    } = this.props;
    const { btnMenu, btnCart } = this.context;

    return (
      <header className={ `Header-geral setblur-${imgOpen}` }>
        <div className="Header-Title-desktop">
          <div className="Title-profile-desktop">
            <img src={ logo } alt="Big Lanches do Tanjiro" />
            <aside className="Title-desktop">
              <h1>
                { title }
              </h1>
              <ListCategory
                handleChenge={ handleChenge }
                allDrinks={ allDrinks }
                foods={ foods }
                setBlur={ imgOpen }
                candy={ candy }
              />
            </aside>
          </div>
          <ul className="Header-rotes">
            <li
              className={ `icon-menu isSelect${btnMenu}` }
            >
              <Link
                onClick={ () => this.handleNav(btnMenu) }
                to="/"
                className="iconRote snack"
              >
                <img src={ iconsFastFood } alt="Hamburguer" />
              </Link>
            </li>
            <li
              className={ `isSelect${btnCart}` }
            >
              <Link
                to={ { pathname: '/cart', hash: '#Header' } }
                onClick={ () => this.handleNav(btnCart) }
                className="iconRote cart"
              >
                { this.buttonCart(counterItens) }
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

HeaderDesktop.contextType = AppContext;

HeaderDesktop.propTypes = {
  imgOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  counterItens: PropTypes.number.isRequired,
  allDrinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  candy: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
};

export default HeaderDesktop;
