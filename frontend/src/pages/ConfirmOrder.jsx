import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/confirmOrder.css';
import FormDataClient from '../components/FormDataClient';

class ConfirmOrder extends React.Component {
  render() {
    return (
      <main className="Order-Page">
        <Header title="PEDIDO" />
        <h1>Confirmar pedido</h1>
        <FormDataClient />
        <Footer />
      </main>
    );
  }
}

export default ConfirmOrder;
