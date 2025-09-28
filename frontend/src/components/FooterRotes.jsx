import React from 'react';
import { Link } from 'react-router-dom';
import iconsCart from '../pictures/icons8-fast-cart-96.png';
import iconsFastFood from '../pictures/icons8-fast-food-96.png';
import '../style/footerRotes.css';

class FooterRotes extends React.Component {
  render() {
    return (
      <section className="footer-pages">
        <ul>
          <li>
            <Link to="/" className="iconRote">
              <img src={ iconsFastFood } alt="Hamburguer" />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="iconRote">
              <img src={ iconsCart } alt="Carrinho" />
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default FooterRotes;
