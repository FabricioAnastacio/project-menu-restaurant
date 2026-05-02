import React from 'react';
import scooter from '../pictures/icons8-scooter-96.png';
import clock from '../pictures/icons8-clock-96.png';
import '../style/InfoOperation.css';
import AppContext from '../context/AppContext';

class InfoOperation extends React.Component {
  constructor() {
    super();

    this.state = {
      dataActual: new Date(),
      isOpen: false,
    };
  }

  componentDidMount() {
    const { dataActual } = this.state;
    const { deliveryDayOff } = this.context;
    const hour = dataActual.getHours();
    const day = dataActual.getDay();
    const hourStart = 19;
    const hourEnd = 23;
    if (hour >= hourStart && hour < hourEnd && !deliveryDayOff.includes(day)) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  }

  renderInfoOperation = () => {
    return (
      <div className="Info_operation">
        <div>
          <div className="Djob_hours">
            <img src={ clock } alt="Scooter de entrega" />
            <div>
              <p>Segunda - Sabado</p>
              <p>
                19:00 - 23:00
              </p>
            </div>
          </div>
        </div>
        <div className="Delivery_value">
          <img src={ scooter } alt="Scooter de entrega" />
          <div>
            <p>Teixeiras - MG</p>
            <p style={ { textDecoration: 'underline' } }>Centro: R$4,00</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { isOpen } = this.state;

    return (
      <section className="Header_hours">
        { this.renderInfoOperation() }
        <div className="Operation">
          <p>Funcionamento</p>
          <p
            style={ {
              color: isOpen ? 'green' : '#f43232da',
            } }
            className="Opem_status"
          >
            { isOpen ? ' Aberto' : ' Fechado' }
          </p>
        </div>
      </section>
    );
  }
}

InfoOperation.contextType = AppContext;

export default InfoOperation;
