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

  // eslint-disable-next-line react-func/max-lines-per-function
  sendOrCheff = () => {
    const {
      listMenu: {
        menu,
        menu: {
          food,
          food: { classic, combo, handmade, additional },
          candy, drinks,
        } }, valueTotal } = this.context;

    const order = {
      foods: [
        ...handmade.filter((item) => item.amount > 0),
        ...classic.filter((item) => item.amount > 0),
        ...combo.filter((item) => item.amount > 0),
      ],
      drinks: drinks.filter((item) => item.amount > 0),
      additional: [
        ...additional.filter((item) => item.amount > 0),
        ...candy.filter((item) => item.amount > 0),
      ],
      value: valueTotal,
    };

    if (order.foods.length + order.drinks.length + order.additional.length === 0) {
      // eslint-disable-next-line no-alert
      return alert(
        'Ocorreu um erro ao enviar o pedido.\nPor favor escolha novamente seu lanche.',
      );
    }

    sendMensage(this.state, order);

    this.context.counterRequest = 0;
    menu.drinks = drinks.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    food.combo = combo.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    food.classic = classic.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    food.handmade = handmade.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    food.additional = additional.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    menu.candy = candy.map((iten) => {
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
