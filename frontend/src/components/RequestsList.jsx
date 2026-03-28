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
      data: new Date().getDay(),
      valueTotal: 0,
      grup: ['classic', 'handmade', 'additional', 'drinks', 'candy'],
      request: {
        classic: [],
        handmade: [],
        additional: [],
        drinks: [],
        candy: [],
        souce: [],
      },
    };
  }

  componentDidMount() {
    const {
      listMenu: {
        food: { classic, handmade, additional },
        candy,
        allDrinks,
      },
    } = this.context;
    const request = {
      classic: [],
      handmade: [],
      additional: [],
      drinks: [],
      candy: [],
      souce: [],
    };
    const idItemRemov = 3;
    request.classic.push(...classic.filter((item) => item.amount > 0));
    request.handmade.push(...handmade.filter((item) => item.amount > 0));
    request.additional.push(
      ...additional.filter((item) => item.amount > 0 && item.id !== idItemRemov),
    );
    request.drinks.push(...allDrinks.filter((item) => item.amount > 0));
    request.candy.push(...candy.filter((item) => item.amount > 0));
    request.souce.push(...additional.filter((item) => item.id === idItemRemov));

    const requestAllItens = [
      ...request.additional, ...request.classic, ...request.handmade,
      ...request.drinks, ...request.candy, ...request.souce,
    ];

    let valueTotal = 0;
    requestAllItens.forEach((item) => {
      const counter = item.amount * item.value;
      valueTotal += counter;
    });

    this.setState({
      valueTotal,
      request,
    });
  }

  addNewItem = (item, grup) => {
    const { request, valueTotal } = this.state;
    this.setState({
      valueTotal: valueTotal + item.value,
    });

    this.setState({
      [request[grup]]: request[grup].map((a) => {
        if (a.id === item.id) a.amount += 1;
        return a;
      }),
    });
  };

  updateCounterRequest = () => {
    const { request, valueTotal,
    } = this.state;

    const updateCounter = [
      ...request.classic, ...request.handmade, ...request.additional,
      ...request.candy, ...request.drinks,
    ];

    this.context.counterRequest = updateCounter.length;
    this.context.valueTotal = valueTotal.toFixed(2);
  };

  removeItem = (item, grup) => {
    const { request, valueTotal } = this.state;

    this.setState({
      valueTotal: valueTotal - (item.amount > 0 ? item.value : 0),
    });

    if (grup !== 'souce') {
      this.setState({
        request: {
          ...request,
          [grup]: request[grup].filter((a) => {
            if (a.id === item.id) a.amount -= 1;
            return a.amount > 0 && a;
          }),
        },
      });
    } else {
      this.setState({
        request: {
          ...request,
          [grup]: request[grup].filter((a) => {
            if (a.id === item.id && a.amount > 0) a.amount -= 1;
            return a;
          }),
        },
      });
    }
  };

  removeAllItens = () => {
    const {
      listMenu,
      listMenu: {
        food,
        food: { classic, handmade, additional },
        allDrinks, candy,
      },
    } = this.context;
    const { request } = this.state;

    this.context.counterRequest = 0;
    listMenu.allDrinks = allDrinks.map((iten) => {
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
    listMenu.candy = candy.map((iten) => {
      iten.amount = 0;
      iten.obs = '';
      return iten;
    });

    this.setState({
      valueTotal: 0,
      request: {
        classic: [],
        handmade: [],
        additional: [],
        drinks: [],
        candy: [],
        souce: request.souce,
      },
    });
  };

  render() {
    const {
      valueTotal,
      request,
      grup,
      data,
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
              request.souce.map((item, key) => (
                <RenderItem
                  key={ key }
                  item={ item }
                  grup="souce"
                  removeItem={ this.removeItem }
                  addNewItem={ this.addNewItem }
                />
              ))
            }
            {
              grup.map((g) => (
                request[g].map((item, key) => (
                  <RenderItem
                    key={ key }
                    item={ item }
                    grup={ g }
                    removeItem={ this.removeItem }
                    addNewItem={ this.addNewItem }
                  />
                ))
              ))
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
            <button
              className={ data > 0 ? 'Button-ConfirmCart' : 'Button-ConfirmCart-dis' }
              onClick={ this.verifyList }
            >
              <Link
                to={ valueTotal === 0 ? '' : '/order' }
                className="linkOrder"
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
