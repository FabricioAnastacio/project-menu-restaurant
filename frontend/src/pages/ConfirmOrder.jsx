import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/confirmOrder.css';
import FormDataClient from '../components/FormDataClient';
import ListOrder from '../components/ListOrder';

class ConfirmOrder extends React.Component {
  constructor() {
    super();

    this.state = {
      clientName: '',
      clientContact: '',
      clientNeighborhood: '',
      clientRoad: '',
      clientNumber: 0,
      clientReference: '',
      clientPayment: [''],
      clientChange: 0,
    };
  }

  handleChenge = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      clientName,
      clientContact,
      clientNeighborhood,
      clientRoad,
      clientNumber,
      clientReference,
      clientPayment,
      clientChange,
    } = this.state;
    return (
      <main className="Order-Page">
        <Header title="PEDIDO" imgOpen={ false } />
        <ListOrder />
        <FormDataClient
          handleChenge={ this.handleChenge }
          clientName={ clientName }
          clientContact={ clientContact }
          clientNeighborhood={ clientNeighborhood }
          clientRoad={ clientRoad }
          clientNumber={ clientNumber }
          clientReference={ clientReference }
          clientPayment={ clientPayment }
          clientChange={ clientChange }
        />
        <Footer imgOpem={ false } />
      </main>
    );
  }
}

export default ConfirmOrder;
