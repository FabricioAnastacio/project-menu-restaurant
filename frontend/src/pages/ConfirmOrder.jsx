import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/confirmOrder.css';
import FormDataClient from '../components/FormDataClient';
import ListOrder from '../components/ListOrder';
import AppContext from '../context/AppContext';
import { sendMensage } from '../services/sendMensage';

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
      clientPayment: [],
      clientChange: 0,
    };
  }

  handleChenge = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  sendOrCheff = () => {
    const { listMenuFood, listBeer, listAlcoholFree, valueTotal } = this.context;

    const order = {
      foods: listMenuFood.filter((item) => item.amount > 0),
      drinks: [
        ...listBeer.filter((item) => item.amount > 0),
        ...listAlcoholFree.filter((item) => item.amount > 0),
      ],
      value: valueTotal,
    };

    sendMensage(this.state, order);

    this.context.counterRequest = 0;
    this.context.listAlcoholFree = listAlcoholFree.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    this.context.listMenuFood = listMenuFood.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    this.context.listBeer = listBeer.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
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
          sendOrCheff={ this.sendOrCheff }
        />
        <Footer imgOpem={ false } />
      </main>
    );
  }
}

ConfirmOrder.contextType = AppContext;

export default ConfirmOrder;
