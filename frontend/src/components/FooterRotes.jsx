import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconsCart from '../pictures/icons8-order-96.png';
import iconsFastFood from '../pictures/icons8-fast-food2-96.png';
import AppContext from '../context/AppContext';
import '../style/footerRotes.css';

class FooterRotes extends React.Component {
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
    const { counterItens, imgOpem } = this.props;

    return (
      <section className={ `footer-pages setblur-${imgOpem}` }>
        <ul>
          <li className="icon-menu">
            <Link to="/" className="iconRote snack">
              <img src={ iconsFastFood } alt="Hamburguer" />
            </Link>
            Cardapio
          </li>
          <li>
            <Link to={ { pathname: '/cart', hash: '#Header' } } className="iconRote cart">
              { this.buttonCart(counterItens) }
            </Link>
            Pedido
          </li>
        </ul>
      </section>
    );
  }
}

FooterRotes.contextType = AppContext;

FooterRotes.propTypes = {
  counterItens: PropTypes.number.isRequired,
  imgOpem: PropTypes.bool.isRequired,
};

export default FooterRotes;
