import React from 'react';
import RequestsList from '../components/RequestsList';
import '../style/cartPage.css';
import FooterRotes from '../components/FooterRotes';
import AppContext from '../context/AppContext';

class Cart extends React.Component {
  render() {
    return (
      <div className="page-cart">
        <RequestsList />
        <FooterRotes counterItens={ 0 } imgOpem={ false } />
      </div>
    );
  }
}

Cart.contextType = AppContext;

export default Cart;
