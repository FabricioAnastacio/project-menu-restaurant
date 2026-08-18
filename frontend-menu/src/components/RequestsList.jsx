/* eslint-disable max-lines */
import React from 'react';
import AppContext from '../context/AppContext';
import '../style/requestsList.css';
import '../style/footer.css';
import RenderItem from './RenderItem';
import TransitionLink from '../helper/TransitionLink';
import bin from '../pictures/icons8-lixeira-48.png';

class RequestsList extends React.Component {
  constructor() {
    super();

    this.state = {
      data: new Date().getDay(),
      valueTotal: 0,
      groupMaping: [
        'classic', 'handmade', 'combo', 'additional', 'drinks', 'candy',
      ],
      request: {
        classic: [],
        handmade: [],
        combo: [],
        additional: [],
        drinks: [],
        candy: [],
        souce: [],
        foodChenged: {
          classic: [],
          handmade: [],
        },
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
          foodChenged,
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
      ...foodChenged.classic, ...foodChenged.handmade,
    ];

    let valueTotal = 0;
    requestAllItens.forEach((item) => {
      const counter = item.amount * item.value;
      valueTotal += counter;
    });

    this.setState({
      valueTotal,
      request: {
        ...request,
        foodChenged,
      },
    });
  }

  updateCounterRequest = () => {
    const { valueTotal,
    } = this.state;

    this.context.valueTotal = valueTotal.toFixed(2);
  };

  addNewItem = (item) => {
    const { request, valueTotal } = this.state;
    const { updateCounterRequest, counterRequest } = this.context;
    this.setState({
      valueTotal: valueTotal + item.value,
    });

    updateCounterRequest(counterRequest + 1);

    if (item.idChenge) return this.addItemChenged(item);

    this.setState({
      [request[item.group]]: request[item.group].map((a) => {
        if (a.id === item.id) a.amount += 1;
        return a;
      }),
    });
  };

  removeItem = (item) => {
    const { request, valueTotal } = this.state;
    const { updateCounterRequest, counterRequest } = this.context;

    updateCounterRequest(counterRequest - 1);

    if (item.idChenge) return this.removeItemChenged(item);

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

  addItemChenged = (item) => {
    const { request, valueTotal } = this.state;
    const {
      listMenu: { menu: { foodChenged } },
    } = this.context;

    const newList = request.foodChenged[item.group].filter((a) => {
      if (a.idChenge === item.idChenge) a.amount += 1;
      return a;
    });

    foodChenged[item.group] = newList;

    this.setState({
      valueTotal: valueTotal + item.value,
      request: {
        ...request,
        foodChenged: {
          ...request.foodChenged,
          [item.group]: newList,
        },
      },
    });
  };

  removeItemChenged = (item) => {
    const { request, valueTotal } = this.state;
    const {
      listMenu: { menu: { foodChenged } },
    } = this.context;

    const newList = request.foodChenged[item.group].filter((a) => {
      if (a.idChenge === item.idChenge) a.amount -= 1;
      return a.amount > 0 && a;
    });

    foodChenged[item.group] = newList;

    this.setState({
      valueTotal: valueTotal - item.value,
      request: {
        ...request,
        foodChenged: {
          ...request.foodChenged,
          [item.group]: newList,
        },
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
          foodChenged,
        },
      },
      updateCounterRequest,
    } = this.context;
    const { request } = this.state;

    updateCounterRequest(0);

    menu.drinks = drinks.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.classic = classic.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.combo = combo.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.handmade = handmade.map((item) => ({ ...item, amount: 0, obs: '' }));
    food.additional = additional.map((item) => ({ ...item, amount: 0, obs: '' }));
    menu.candy = candy.map((item) => ({ ...item, amount: 0, obs: '' }));
    foodChenged.classic = [];
    foodChenged.handmade = [];

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
        foodChenged: {
          classic: [],
          handmade: [],
        },
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
        <div className="Content_list_order">
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
              ['classic', 'handmade'].map((g) => (
                request.foodChenged[g].map((item, key) => (
                  <RenderItem
                    key={ key }
                    item={ item }
                    removeItemChenged={ this.removeItemChenged }
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
              <img className="icon-bin" src={ bin } alt="Apagar" />
              Limpar lista
            </button>
            {
              !deliveryDayOff.includes(data) && (
                <TransitionLink
                  to={ valueTotal === 0 ? '' : '/order' }
                  className="Button-ConfirmCart"
                >
                  Confirmar
                </TransitionLink>
              )
            }
          </div>
        </section>
      </section>
    );
  }
}

RequestsList.contextType = AppContext;

export default RequestsList;
