import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import '../style/footerRotes.css';
import wrapperRoute from '../hooks/wrapperRoute';
import TransitionLink from '../helper/TransitionLink';
import iconsCart from '../pictures/icons8-order-96.png';
import iconsFastFood from '../pictures/icons8-fast-food2-96.png';

class FooterRotes extends React.Component {
  handleNav = () => {
    let btnMenu = false;
    let btnCart = false;

    if (window.location.pathname === '/') {
      btnMenu = true;
    } else {
      btnCart = true;
    }

    return { btnMenu, btnCart };
  };

  rederButtonCart = () => {
    return (
      <div className="Icon_cart">
        <img src={ iconsCart } alt="Carrinho" />
        <span>Proximo</span>
      </div>
    );
  };

  render() {
    const { counterItens } = this.props;
    const { btnMenu, btnCart } = this.handleNav();

    return (
      <section
        className={ `footer-pages setblur-${false}` }
      >
        <ul>
          <li className={ `icon-menu isSelect${btnMenu}` }>
            <TransitionLink
              to="/"
              className="iconRote"
              direction="back"
              disabled={ window.location.pathname === '/' }
            >
              <img src={ iconsFastFood } alt="Cardapio" />
              Cardapio
            </TransitionLink>
          </li>
          <li className={ `icon-menu isSelect${btnCart}` }>
            <TransitionLink
              to="/cart"
              className="iconRote snack"
              direction="next"
              disabled={ window.location.pathname === '/cart' }
            >
              {
                counterItens > 0 && <span className="counter-car">{ counterItens }</span>
              }
              { this.rederButtonCart() }
            </TransitionLink>
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

export default wrapperRoute(FooterRotes);
