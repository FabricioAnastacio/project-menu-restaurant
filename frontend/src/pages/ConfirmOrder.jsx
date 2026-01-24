import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/confirmOrder.css';
import FormDataClient from '../components/FormDataClient';
import ListOrder from '../components/ListOrder';

class ConfirmOrder extends React.Component {
  render() {
    return (
      <main className="Order-Page">
        <Header title="PEDIDO" />
        <ListOrder />
        <FormDataClient />
        <Footer />
      </main>
    );
  }
}

export default ConfirmOrder;
