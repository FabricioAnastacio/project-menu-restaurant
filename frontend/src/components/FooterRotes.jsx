import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconsCart from '../pictures/icons8-order-96.png';
import iconsFastFood from '../pictures/icons8-fast-food2-96.png';
import AppContext from '../context/AppContext';
import '../style/footerRotes.css';

class FooterRotes extends React.Component {
  handleNav = (param) => {
    const { btnCart, btnMenu } = this.context;

    if (!param) {
      this.context.btnCart = btnMenu;
      this.context.btnMenu = btnCart;
    }
  };

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
    const { counterItens } = this.props;
    const { btnMenu, btnCart } = this.context;

    return (
      <section className={ `footer-pages setblur-${false}` }>
        <ul>
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
            Cardapio
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
            Próximo
          </li>
        </ul>
      </section>
    );
  }
}

FooterRotes.contextType = AppContext;

FooterRotes.propTypes = {
  counterItens: PropTypes.number.isRequired,
};

export default FooterRotes;
