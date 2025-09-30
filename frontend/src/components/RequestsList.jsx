import React from 'react';
import AppContext from '../context/AppContext';
import Footer from './Footer';
import '../style/requestsList.css';
import '../style/footer.css';

class RequestsList extends React.Component {
  constructor() {
    super();

    this.state = {
      valueTotal: 0,
      requestItens: [],
    };
  }

  componentDidMount() {
    const { listMenuFood, listSoftDrink } = this.context;
    const requestItens = [];

    requestItens.push(...listMenuFood.filter((item) => item.amount > 0));
    requestItens.push(...listSoftDrink.filter((item) => item.amount > 0));

    let valueTotal = 0;
    requestItens.forEach((item) => {
      const counter = item.amount * item.value;
      valueTotal += counter;
    });

    this.setState({
      valueTotal: valueTotal.toFixed(2),
      requestItens,
    });
  }

  render() {
    const { valueTotal, requestItens } = this.state;

    return (
      <section className="page-requests">
        <div>
          <section className="header-request" id="Header">
            <div className="cost">
              <h4 className="value-total">{ `Total: R$ ${valueTotal}` }</h4>
            </div>
            <div className="img-header" />
          </section>
          <ul className="list-requests">
            {
              requestItens.map((item, key) => (
                <li key={ key } className="request">
                  <div className="item-title">
                    <div
                      className="imgCart"
                      style={ { backgroundImage: `url(${item.img})` } }
                      aria-hidden="true"
                    />
                    <div className="item-name">
                      <h1>{ item.name }</h1>
                      <p>{ `R$${item.value.toFixed(2)}` }</p>
                    </div>
                  </div>
                  <button>+</button>
                  <p>{ item.amount }</p>
                  <button>-</button>
                </li>
              ))
            }
          </ul>
        </div>
        <Footer imgOpem={ false } />
      </section>
    );
  }
}

RequestsList.contextType = AppContext;

export default RequestsList;
