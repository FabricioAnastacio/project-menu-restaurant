import React from 'react';
import '../style/formDataClient.css';

class FormDataClient extends React.Component {
  render() {
    return (
      <div className="Form-Info">
        <h4>Endereço:</h4>
        <form className="Client-form">
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="praise"
              id="praise"
              // value={ praise }
              type="text"
              // onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="praise" className="Data-Label">
              Nome
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="vision"
              id="vision"
              // value={ vision }
              type="number"
              // onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="vision" className="Data-Label">
              Contato
            </label>
          </div>
          <div className="Div-form">
            <input
              className="Data-Client"
              name="frontdesk"
              id="frontdesk"
              // value={ frontdesk }
              type="text"
              // onChange={ handleChenge }
              autoComplete="off"
              required
            />
            <label htmlFor="frontdesk" className="Data-Label">
              Bairro
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="prayer"
              id="prayer"
              // value={ prayer }
              type="text"
              // onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="prayer" className="Data-Label">
              Rua
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="dynamics"
              id="dynamics"
              // value={ dynamics }
              type="number"
              // onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="dynamics" className="Data-Label">
              Numero
            </label>
          </div>
          <div className="Div-form">
            <input
              required
              className="Data-Client"
              name="dynamics"
              id="dynamics"
              // value={ dynamics }
              type="text"
              // onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="dynamics" className="Data-Label">
              Ponto de referencia
            </label>
          </div>
        </form>
        <h4>Forma de Pagamento:</h4>
        <form className="Form-Payment">
          <div className="Payment">
            <label htmlFor="cash" className="Label-pay">
              Dinheiro
              <input type="checkbox" value="" />
            </label>
            <label htmlFor="pix" className="Label-pay">
              Pix
              <input type="checkbox" value="" />
            </label>
            <label htmlFor="card" className="Label-pay">
              Cartão
              <input type="checkbox" value="" />
            </label>
          </div>
          <div className="Div-form" style={ { display: 'none' } }>
            <input
              required
              className="Data-Client"
              name="prayer"
              id="prayer"
              // value={ prayer }
              type="number"
              // onChange={ handleChenge }
              autoComplete="off"
            />
            <label htmlFor="change" className="Data-Label">
              Troco para
            </label>
          </div>
        </form>
        <div className="Btm-order">
          <button className="Send-Order">Enviar Pedido</button>
        </div>
      </div>
    );
  }
}

export default FormDataClient;
