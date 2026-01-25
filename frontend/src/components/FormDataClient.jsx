/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/formDataClient.css';

class FormDataClient extends React.Component {
  constructor() {
    super();

    this.state = {
      pix: false,
      card: false,
      cash: false,
      isBloq: true,
    };
  }

  handleChengePaymant = ({ target }) => {
    const { pix, card, cash } = this.state;
    const { name, checked } = target;

    this.setState({
      [name]: checked,
      isBloq: (pix || card || cash || checked),
    });
  };

  sendOrder = (e) => {
    const { pix, card, cash } = this.state;
    const { clientPayment, sendOrCheff } = this.props;

    clientPayment.length = 0;

    if (pix) clientPayment.push('Pix');
    if (card) clientPayment.push('Cartão');
    if (cash) clientPayment.push('Dinheiro');
    if (!(pix || card || cash)) {
      return this.setState({ isBloq: false });
    }
    sendOrCheff();
    e.preventDefault();
  };

  renderPayment = () => {
    const { pix, card, cash, isBloq } = this.state;
    const { clientChange, handleChenge } = this.props;

    return (
      <div className="Form-Payment">
        <h4>Forma de Pagamento:</h4>
        <div className="Payment">
          <label htmlFor="cash" className="Label-pay">
            Dinheiro
            <input
              onInvalid={
                (e) => e.target.setCustomValidity('Selecione uma forma de pagamento!')
              }
              type="checkbox"
              className="Checkbox"
              checked={ cash }
              name="cash"
              id="cash"
              onChange={ this.handleChengePaymant }
            />
          </label>
          <label htmlFor="pix" className="Label-pay">
            Pix
            <input
              type="checkbox"
              className="Checkbox"
              checked={ pix }
              name="pix"
              onChange={ this.handleChengePaymant }
            />
          </label>
          <label htmlFor="card" className="Label-pay">
            Cartão
            <input
              type="checkbox"
              className="Checkbox"
              checked={ card }
              name="card"
              onChange={ this.handleChengePaymant }
            />
          </label>
        </div>
        <p
          className="Alert-Error"
          style={ { display: isBloq ? 'none' : 'block', color: 'red' } }
        >
          *Selecione uma ou mais formas de pagamento
        </p>
        <div className="Div-form" style={ { display: cash ? 'flex' : 'none' } }>
          <input
            required
            className="Data-Client"
            name="clientChange"
            id="clientChange"
            value={ clientChange === 0 ? '' : clientChange }
            type="number"
            onChange={ handleChenge }
            autoComplete="off"
          />
          <label htmlFor="change" className="Data-Label">
            Troco para
          </label>
        </div>
      </div>
    );
  };

  render() {
    const {
      handleChenge,
      clientName,
      clientContact,
      clientNeighborhood,
      clientRoad,
      clientNumber,
      clientReference,
    } = this.props;

    return (
      <div className="Form-Info">
        <h4>Endereço:</h4>
        <form className="Client-form">
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="clientName"
              id="clientName"
              value={ clientName }
              type="text"
              onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="clientName" className="Data-Label">
              Nome
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="clientContact"
              id="clientContact"
              value={ clientContact }
              type="number"
              onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="clientContact" className="Data-Label">
              Contato
            </label>
          </div>
          <div className="Div-form">
            <input
              className="Data-Client"
              name="clientNeighborhood"
              id="clientNeighborhood"
              value={ clientNeighborhood }
              type="text"
              onChange={ handleChenge }
              autoComplete="off"
              required
            />
            <label htmlFor="clientNeighborhood" className="Data-Label">
              Bairro
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="clientRoad"
              id="clientRoad"
              value={ clientRoad }
              type="text"
              onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="clientRoad" className="Data-Label">
              Rua
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="clientNumber"
              id="clientNumber"
              value={ clientNumber === 0 ? '' : clientNumber }
              type="number"
              onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="clientNumber" className="Data-Label">
              Numero
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="clientReference"
              id="clientReference"
              value={ clientReference }
              type="text"
              onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="clientReference" className="Data-Label">
              Ponto de referencia
            </label>
          </div>
          {
            this.renderPayment()
          }
          <div className="Btm-order">
            <button className="Return">
              <Link to="/cart" className="Link">Voltar</Link>
            </button>
            <button
              type="submit"
              className="Send-Order"
              onClick={ this.sendOrder }
            >
              Enviar Pedido
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormDataClient.propTypes = {
  handleChenge: PropTypes.func.isRequired,
  sendOrCheff: PropTypes.func.isRequired,
  clientName: PropTypes.string.isRequired,
  clientContact: PropTypes.string.isRequired,
  clientNeighborhood: PropTypes.string.isRequired,
  clientRoad: PropTypes.string.isRequired,
  clientNumber: PropTypes.number.isRequired,
  clientReference: PropTypes.string.isRequired,
  clientPayment: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  clientChange: PropTypes.number.isRequired,
};

export default FormDataClient;
