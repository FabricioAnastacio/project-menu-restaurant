/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
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
      groupMaping: [
        'classic', 'combo', 'handmade', 'additional', 'drinks', 'candy',
      ],
      request: {
        classic: [],
        handmade: [],
        combo: [],
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
        menu: {
          food: { combo, classic, handmade, additional },
          drinks,
          candy,
        },
      },
    } = this.context;
    const request = {
      classic: [],
      handmade: [],
      combo: [],
      additional: [],
      drinks: [],
      candy: [],
      souce: [],
    };
    request.combo.push(...combo.filter((item) => item.amount > 0));
    request.classic.push(...classic.filter((item) => item.amount > 0));
    request.handmade.push(...handmade.filter((item) => item.amount > 0));
    request.additional.push(
      ...additional.filter((item) => item.amount > 0),
    );
    request.drinks.push(...drinks.filter((item) => item.amount > 0));
    request.candy.push(...candy.filter((item) => item.amount > 0));

    const requestAllItens = [
      ...request.additional, ...request.classic, ...request.handmade,
      ...request.drinks, ...request.candy, ...request.combo,
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

  updateCounterRequest = () => {
    const { request, valueTotal,
    } = this.state;

    const updateCounter = [
      ...request.classic, ...request.handmade, ...request.additional,
      ...request.candy, ...request.drinks, ...request.combo,
    ];

    this.context.counterRequest = updateCounter.length;
    this.context.valueTotal = valueTotal.toFixed(2);
  };

  addNewItem = (item) => {
    const { request, valueTotal } = this.state;
    this.setState({
      valueTotal: valueTotal + item.value,
    });

    this.setState({
      [request[item.group]]: request[item.group].map((a) => {
        if (a.id === item.id) a.amount += 1;
        return a;
      }),
    });
  };

  removeItem = (item) => {
    const { request, valueTotal } = this.state;

    this.setState({
      valueTotal: valueTotal - (item.amount > 0 ? item.value : 0),
    });

    this.setState({
      request: {
        ...request,
        [item.group]: request[item.group].filter((a) => {
          if (a.id === item.id) a.amount -= 1;
          return a.amount > 0 && a;
        }),
      },
    });
  };

  removeAllItens = () => {
    const {
      listMenu: {
        menu,
        menu: {
          food,
          food: { combo, classic, handmade, additional },
          drinks,
          candy,
        },
      },
    } = this.context;
    const { request } = this.state;

    this.context.counterRequest = 0;

    menu.drinks = drinks.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.classic = classic.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.combo = combo.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.handmade = handmade.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.additional = additional.map((item) => ({ ...item, amount: 0, obs: '' }));
    menu.candy = candy.map((item) => ({ ...item, amount: 0, obs: '' }));

    this.setState({
      valueTotal: 0,
      request: {
        classic: [],
        handmade: [],
        combo: [],
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
      groupMaping,
      data,
    } = this.state;
    const { deliveryDayOff } = this.context;
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
              groupMaping.map((g) => (
                request[g].map((item, key) => (
                  <RenderItem
                    key={ key }
                    item={ item }
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
              className={
                !deliveryDayOff.includes(data)
                  ? 'Button-ConfirmCart'
                  : 'Button-ConfirmCart-dis'
              }
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
