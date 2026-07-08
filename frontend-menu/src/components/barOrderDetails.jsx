/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-lines */
import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import BarOrderItem from './barOrderItem';

class BarOrder extends React.Component {
  constructor() {
    super();

    this.state = {
      itemChenge: [],
      amountChgSelect: 1,
    };
  }

  componentDidMount() {
    const { item } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    if (item.group === 'combo' || item.group === 'additional') {
      if (item.amount !== 0) {
        this.setState({
          itemChenge: [item],
        });
      }

      return;
    }
    const listInitial = [];

    if (foodChenged[item.group].length > 0) {
      foodChenged[item.group].forEach((itemChenge) => {
        if (itemChenge.id === item.id) {
          listInitial.push(itemChenge);
        }
      });
    }

    this.setState({
      itemChenge: listInitial,
    });
  }

  componentWillUnmount() {
    const { item } = this.props;
    const { itemChenge } = this.state;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    if (
      item.group !== 'additional'
      && item.group !== 'combo'
    ) {
      foodChenged[item.group] = [
        ...foodChenged[item.group].filter((a) => a.id !== item.id),
        ...itemChenge,
      ];
    }
  }

  updateAmount = (exprecion) => {
    const { item } = this.props;

    if (exprecion === 'add') item.amount += 1;
    else if (exprecion === 'rm') item.amount -= 1;

    if (item.amount >= 1) {
      this.setState({
        itemChenge: [{
          ...item,
          idChenge: item.id,
          amount: item.amount,
        }],
      });
    } else if (item.amount === 0) {
      this.setState({
        itemChenge: [],
      });
    }
  };

  addNewItem = (item) => {
    const {
      valueItem,
      additional,
      observations,
      updateQuantityAdd,
      counterRequestAmount,
      counterItens,
      updateObsAndValueItem,
    } = this.props;
    const { amountChgSelect } = this.state;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    counterRequestAmount(counterItens + 1);

    if (additional.length === 0) {
      this.updateAmount('add');
      return;
    }

    this.setState((prevState) => ({
      itemChenge: [
        ...prevState.itemChenge,
        {
          ...item,
          amount: amountChgSelect > 0 ? amountChgSelect : 1,
          idChenge: foodChenged[item.group][foodChenged[item.group].length - 1]
            ? foodChenged[item.group][
              foodChenged[item.group].length - 1
            ].idChenge + 1 : 1,
          additional: additional.filter((add) => add.amount > 0),
          value: valueItem,
          obs: observations,
        },
      ],
      amountChgSelect: 1,
    }));

    updateQuantityAdd(additional.map((add) => ({ ...add, amount: 0 })));
    updateObsAndValueItem(item.value, '');
  };

  removeItem = (item) => {
    const { itemChenge } = this.state;

    this.setState({ itemChenge: itemChenge.filter((a) => a.idChenge !== item.idChenge) });
  };

  itemSelected = (item) => {
    const {
      additional, updateQuantityAdd, updateObsAndValueItem,
      counterRequestAmount, counterItens,
    } = this.props;
    const { itemChenge } = this.state;

    if (additional.length === 0) return;

    const itemSelect = itemChenge.find(
      (iten) => iten.idChenge === item.idChenge,
    );

    additional.forEach((add) => {
      const addSelect = itemSelect.additional.find(
        (addItem) => addItem.name === add.name,
      );
      if (addSelect) add.amount = addSelect.amount;
    });

    this.setState({ amountChgSelect: itemSelect.amount });
    updateQuantityAdd(additional);
    updateObsAndValueItem(itemSelect.value, itemSelect.obs);
    counterRequestAmount(counterItens - item.amount);

    this.removeItem(item);
  };

  clearListAdds = (valueItem) => {
    const { updateQuantityAdd, updateObsAndValueItem, additional } = this.props;

    updateQuantityAdd(additional.map((add) => ({ ...add, amount: 0 })));
    updateObsAndValueItem(valueItem, '');
    this.setState({ amountChgSelect: 1 });
  };

  render() {
    const {
      item,
      additional,
      observations,
      valueItem,
      counterRequestAmount,
      counterItens,
    } = this.props;
    const { itemChenge, amountChgSelect } = this.state;

    return (
      <div className="Viwer_buy">
        <div className="Div_clear_all_adds">
          <p className="Amount_item_Select">
            { amountChgSelect > 1 && `x${amountChgSelect}` }
          </p>
          <button
            className="Clear_all_adds"
            onClick={ () => this.clearListAdds(item.value) }
          >
            Limpar Lista
          </button>
        </div>
        <ul className="List_Item_buy">
          {
            additional.map((ingredint) => (
              ingredint.amount > 0 && (
                <li key={ ingredint.name } className="Item_buy">
                  <p>
                    {
                      `${ingredint.amount}x ${ingredint.name}`
                    }
                  </p>
                  <p>
                    {
                      (ingredint.value * ingredint.amount).toLocaleString('pt-BR', {
                        style: 'currency', currency: 'BRL' })
                    }
                  </p>
                </li>
              )
            ))
          }
        </ul>
        <div className="div_tags_buy">
          {
            additional.find((ing) => ing.amount > 0)
            && <hr id="tag_color_Add" />
          }
          { observations !== '' && <hr id="tag_color_obs" /> }
        </div>
        <div className="Buy_item">
          <h4
            className="Value_actual"
            style={ { color: 'gold' } }
          >
            {
              (amountChgSelect * valueItem).toLocaleString('pt-BR', {
                style: 'currency', currency: 'BRL' })
            }
          </h4>
          <button
            onClick={ () => this.addNewItem(item) }
            className="btm_add"
            disabled={
              (additional.length === 0
              && item.amount !== 0)
            }
          >
            Adicionar
          </button>
        </div>
        <ul className="List_Adds">
          {
            itemChenge.idChenge !== 0
            && itemChenge.map((chenge) => chenge.amount > 0 && (
              <BarOrderItem
                key={ chenge.idChenge }
                item={ chenge }
                counterRequestAmount={ counterRequestAmount }
                counterItens={ counterItens }
                removeItem={ this.removeItem }
                itemSelected={ this.itemSelected }
                updateAmount={ this.updateAmount }
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

BarOrder.contextType = AppContext;

BarOrder.propTypes = {
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
  additional: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
    amount: PropTypes.number,
  })).isRequired,
  observations: PropTypes.string.isRequired,
  valueItem: PropTypes.number.isRequired,
  updateObsAndValueItem: PropTypes.func.isRequired,
  updateQuantityAdd: PropTypes.func.isRequired,
  counterRequestAmount: PropTypes.func.isRequired,
  counterItens: PropTypes.number.isRequired,
};
export default BarOrder;
