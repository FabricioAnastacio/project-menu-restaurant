import React from 'react';
import RequestsList from '../components/RequestsList';
import '../style/cartPage.css';
import FooterRotes from '../components/FooterRotes';
import AppContext from '../context/AppContext';

class Cart extends React.Component {
  render() {
    return (
      <div className="page-cart">
        <div
          style={ {
            viewTransitionName: 'page',
            height: '100%',
          } }
        >
          <RequestsList />
        </div>
        <FooterRotes imgOpem={ false } />
      </div>
    );
  }
}

Cart.contextType = AppContext;

export default Cart;
