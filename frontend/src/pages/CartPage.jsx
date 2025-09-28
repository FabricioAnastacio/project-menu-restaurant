import React from 'react';
import RequestsList from '../components/RequestsList';
import '../style/cartPage.css';
import FooterRotes from '../components/FooterRotes';

class Cart extends React.Component {
  render() {
    return (
      <div className="page-cart">
        <RequestsList />
        <FooterRotes />
      </div>
    );
  }
}

export default Cart;
