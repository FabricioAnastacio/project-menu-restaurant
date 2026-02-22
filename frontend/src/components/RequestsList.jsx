/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../style/requestsList.css';
import '../style/footer.css';
import RenderItem from './RenderItem';

class RequestsList extends React.Component {
  constructor() {
    super();

    this.state = {
      valueTotal: 0,
      requestFoods: [],
      requestDrinks: [],
      requestSoftDrinks: [],
      requestSauce: [],
    };
  }

  componentDidMount() {
    const {
      listMenu: { food, candy,
        allDrinks: { alcoholFree, beer }, additional } } = this.context;
    const requestFoods = [];
    const requestDrinks = [];
    const requestSoftDrinks = [];

    requestFoods.push(...food.filter((item) => item.amount > 0));
    requestDrinks.push(...beer.filter((item) => item.amount > 0));
    requestSoftDrinks.push(...candy.filter((item) => item.amount > 0));
    requestSoftDrinks.push(...alcoholFree.filter((item) => item.amount > 0));

    const requestAllItens = [
      ...requestFoods, ...requestDrinks, ...requestSoftDrinks, ...additional.sauce];

    let valueTotal = 0;
    requestAllItens.forEach((item) => {
      const counter = item.amount * item.value;
      valueTotal += counter;
    });

    this.setState({
      valueTotal,
      requestFoods,
      requestDrinks,
      requestSoftDrinks,
      requestSauce: additional.sauce,
    });
  }

  addNewItem = (item, type) => {
    const {
      requestSoftDrinks,
      requestFoods, requestDrinks, requestSauce, valueTotal } = this.state;
    this.setState({
      valueTotal: valueTotal + item.value,
    });

    if (type === 'food') {
      this.setState({
        requestFoods: requestFoods.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    } else if (type === 'drink') {
      this.setState({
        requestDrinks: requestDrinks.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    } else if (type === 'softDrink') {
      this.setState({
        requestSoftDrinks: requestSoftDrinks.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    } else {
      this.setState({
        requestSauce: requestSauce.map((a) => {
          if (a.id === item.id) a.amount += 1;
          return a;
        }),
      });
    }
  };

  updateCounterRequest = () => {
    const {
      requestSoftDrinks,
      requestFoods, requestDrinks, requestSauce, valueTotal } = this.state;

    const updateCounter = [
      ...requestSoftDrinks, ...requestFoods, ...requestDrinks, ...requestSauce];
    this.context.counterRequest = updateCounter.length;
    this.context.valueTotal = valueTotal.toFixed(2);
  };

  removeItem = (item, type) => {
    const {
      requestSoftDrinks,
      requestFoods,
      requestDrinks, requestSauce, valueTotal } = this.state;

    this.setState({
      valueTotal: valueTotal - (item.amount > 0 ? item.value : 0),
    });

    if (type === 'food') {
      this.setState({
        requestFoods: requestFoods.filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 && a;
        }),
      });
    } else if (type === 'drink') {
      this.setState({
        requestDrinks: requestDrinks.filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 ?? a;
        }),
      });
    } else if (type === 'softDrink') {
      this.setState({
        requestSoftDrinks: requestSoftDrinks.filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 && a;
        }),
      });
    } else {
      this.setState({
        requestSauce: requestSauce.filter((a) => {
          if (a.id === item.id && a.amount > 0) a.amount -= 1;
          return a;
        }),
      });
    }
  };

  removeAllItens = () => {
    const { listMenu: { food, allDrinks }, listMenu } = this.context;

    this.context.counterRequest = 0;
    allDrinks.alcoholFree = allDrinks.alcoholFree.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    listMenu.food = food.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });
    allDrinks.beer = allDrinks.beer.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });

    this.setState({
      valueTotal: 0,
      requestFoods: [],
      requestDrinks: [],
      requestSoftDrinks: [],
    });
  };

  render() {
    const {
      valueTotal,
      requestFoods,
      requestDrinks,
      requestSoftDrinks,
      requestSauce,
    } = this.state;
    this.updateCounterRequest();

    return (
      <section className="page-requests">
        <div>
          <section className="header-request" id="Header">
            <div className="cost">
              <h4 className="value-total">{ `Total: R$ ${valueTotal.toFixed(2)}` }</h4>
              <h5>Taxa entrega: R$4.00</h5>
            </div>
            <div className="img-header" />
          </section>
          <ul className="list-requests">
            {
              requestSauce.map((item, key) => (
                <RenderItem
                  key={ key }
                  item={ item }
                  type="sauce"
                  removeItem={ this.removeItem }
                  addNewItem={ this.addNewItem }
                />
              ))
            }
            {
              requestFoods.map(
                (item, key) => (<RenderItem
                  key={ key }
                  item={ item }
                  type="food"
                  removeItem={ this.removeItem }
                  addNewItem={ this.addNewItem }
                />),
              )
            }
            {
              requestDrinks.map(
                (item, key) => (<RenderItem
                  key={ key }
                  item={ item }
                  type="drink"
                  removeItem={ this.removeItem }
                  addNewItem={ this.addNewItem }
                />),
              )
            }
            {
              requestSoftDrinks.map(
                (item, key) => (<RenderItem
                  key={ key }
                  item={ item }
                  type="softDrink"
                  removeItem={ this.removeItem }
                  addNewItem={ this.addNewItem }
                />),
              )
            }
            {
              valueTotal === 0 && (
                <p className="alertErro-List">Voçe não tem pedidos na lista</p>
              )
            }
          </ul>
        </div>
        <section className="RequestFooter-cart">
          <div className="btms">
            <button
              onClick={ () => this.removeAllItens() }
              className="clear-all"
            >
              Limpar lista
            </button>
            <button className="Button-ConfirmCart" onClick={ this.verifyList }>
              <Link
                to={ valueTotal === 0 ? '' : '/order' }
                className="linkOrder"
                aria-disabled
              >
                Confirmar
              </Link>
            </button>
          </div>
        </section>
      </section>
    );
  }
}

RequestsList.contextType = AppContext;

export default RequestsList;
