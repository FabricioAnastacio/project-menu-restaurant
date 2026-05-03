import React from 'react';
import PropTypes from 'prop-types';
import '../style/additional.css';

class Additional extends React.Component {
  render() {
    const { additional } = this.props;
    return (
      <section className="Section_additional">
        <div className="Title_additional">
          <h3>Adicionais</h3>
        </div>
        <ul className="List_additional">
          {
            additional.map((item, i) => (
              <li key={ i } className="Item_additional">
                <p className="Item_name">{ item.name }</p>
                <div className="Item_info">
                  <div className="Item_value_and_btm">
                    <button className="Btm_Rm">-</button>
                    <p className="Item_amount_add">{ item.amount }</p>
                    <button className="Btm_Add">+</button>
                    <p className="Max_amount">
                      { `Máximo: ${item.maxAmount}` }
                    </p>
                  </div>
                  <p className="Item_value">
                    {
                      `+ ${item.value.toLocaleString('pt-BR', {
                        style: 'currency', currency: 'BRL',
                      })}`
                    }
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

Additional.propTypes = {
  additional: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    maxAmount: PropTypes.number.isRequired,
  })).isRequired,
};

export default Additional;
