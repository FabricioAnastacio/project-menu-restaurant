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
      valueTotal,
      requestItens,
    });
  }

  render() {
    const { valueTotal, requestItens } = this.state;

    return (
      <section className="page-requests">
        <div>
          <section>
            <div>
              <h3>Valor total:</h3>
              <h3>{ `R$ ${valueTotal}` }</h3>
            </div>
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
                      <p>{ `R$${item.value}` }</p>
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
