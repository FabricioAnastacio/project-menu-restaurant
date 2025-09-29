import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconsCart from '../pictures/icons8-fast-cart-96.png';
import iconsFastFood from '../pictures/icons8-fast-food-96.png';
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
    const { counterItens } = this.props;

    return (
      <section className="footer-pages">
        <ul>
          <li className="icon-menu">
            <Link to="/" className="iconRote">
              <img src={ iconsFastFood } alt="Hamburguer" />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="iconRote">
              { this.buttonCart(counterItens) }
            </Link>
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
