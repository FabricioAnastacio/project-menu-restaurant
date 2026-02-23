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
    const {
      listMenu: {
        candy, food, allDrinks: {
          alcoholFree, beer,
        }, additional,
      }, valueTotal, listMenu } = this.context;

    const order = {
      foods: food.filter((item) => item.amount > 0),
      drinks: [
        ...beer.filter((item) => item.amount > 0),
        ...alcoholFree.filter((item) => item.amount > 0),
      ],
      additional: [
        ...additional.sauce.filter((item) => item.amount > 0),
        ...candy.filter((item) => item.amount > 0),
      ],
      value: valueTotal,
    };

    sendMensage(this.state, order);

    this.context.counterRequest = 0;
    listMenu.alcoholFree = alcoholFree.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    listMenu.food = food.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    listMenu.beer = beer.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    listMenu.candy = candy.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    additional.sauce = additional.sauce.map((iten) => {
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
