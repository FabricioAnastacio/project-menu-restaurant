import React from 'react';
import PropTypes from 'prop-types';
import bin from '../pictures/icons8-lixeira-48.png';

class BarOrderItem extends React.Component {
  constructor() {
    super();

    this.state = {
      counterAmount: 0,
    };
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState({
      counterAmount: item.amount,
    });
  }

  addAmoutItem = (item) => {
    const { counterRequestAmount, counterItens, updateAmount } = this.props;

    counterRequestAmount(counterItens + 1);
    if (item.group === 'additional' || item.group === 'combo') {
      updateAmount('add');
      this.setState({
        counterAmount: item.amount + 1,
      });
    } else {
      item.amount += 1;
      this.setState({
        counterAmount: item.amount,
      });
    }
  };

  rmAmountItem = (item) => {
    const { removeItem, updateAmount, counterRequestAmount, counterItens } = this.props;

    if (item.group === 'additional' || item.group === 'combo') {
      updateAmount('rm');
      this.setState({
        counterAmount: item.amount - 1,
      });
    } else {
      item.amount -= 1;
      this.setState({
        counterAmount: item.amount,
      });
      counterRequestAmount(counterItens - 1);
      if (item.amount === 0) removeItem(item);
    }
  };

  render() {
    const {
      item,
      itemSelected,
    } = this.props;
    const { counterAmount } = this.state;

    const value = (counterAmount * item.value).toLocaleString('pt-BR', {
      style: 'currency', currency: 'BRL',
    });

    return (
      <li className="Viwer_Item_buy">
        <div
          className="Div_item_select"
          onClick={ () => itemSelected(item) }
          onKeyDown={ itemSelected }
          role="button"
          tabIndex={ 0 }
        >
          <p>
            <span className="amout_txt">{ `x${counterAmount} ` }</span>
            { ` ${item.name.split('-')[1]} = ${value}` }
          </p>
          <div className="div_tags_buy">
            {
              item.additional.length > 0 && <hr id="tag_color_Add" />
            }
            { item.obs !== '' && <hr id="tag_color_obs" /> }
          </div>
        </div>
        <div className="btm_add_rm_new_item">
          <button
            className="sell"
            onClick={ () => this.rmAmountItem(item) }
          >
            { counterAmount === 1 ? (
              <img className="icon-bin" src={ bin } alt="Apagar" />
            ) : '-' }
          </button>
          <p>{ counterAmount }</p>
          <button
            className="buy"
            onClick={ () => this.addAmoutItem(item) }
          >
            +
          </button>
        </div>
      </li>
    );
  }
}

BarOrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    obs: PropTypes.string.isRequired,
    additional: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  itemSelected: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  counterItens: PropTypes.number.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

export default BarOrderItem;
