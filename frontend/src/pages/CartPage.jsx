import React from 'react';
import RequestsList from '../components/RequestsList';
import '../style/cartPage.css';

class Cart extends React.Component {
  render() {
    return (
      <div className="page-cart">
        <RequestsList />
      </div>
    );
  }
}

export default Cart;
