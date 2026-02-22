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
    const { listAdditional, listMenuFood, listBeer, listAlcoholFree } = this.context;
    const requestFoods = [];
    const requestDrinks = [];
    const requestSoftDrinks = [];

    requestFoods.push(...listMenuFood.filter((item) => item.amount > 0));
    requestDrinks.push(...listBeer.filter((item) => item.amount > 0));
    requestSoftDrinks.push(...listAlcoholFree.filter((item) => item.amount > 0));

    const requestAllItens = [
      ...requestFoods, ...requestDrinks, ...requestSoftDrinks, ...listAdditional.sauce];

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
      requestSauce: listAdditional.sauce,
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
    const { listMenuFood, listBeer, listAlcoholFree } = this.context;

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
