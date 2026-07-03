/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-lines */
import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class BarOrder extends React.Component {
  constructor() {
    super();

    this.state = {
      txtSale: [],
    };
  }

  componentDidMount() {
    const { item } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    if (item.group === 'combo' || item.group === 'additional') {
      if (item.amount !== 0) {
        this.setState({
          txtSale: [{
            idItem: item.id,
            idChenge: item.id, // para itens sem adicionais, o idChenge é igual ao id do item
            text: `x${item.amount} ${item.name.split('-')[1]} = ${item.value.toFixed(2)}`,
            tags: {
              isAdd: item.additional.length > 0,
              isObs: item.obs !== '',
            },
          }],
        });
      }

      return;
    }
    const listInitialText = [];

    if (foodChenged[item.group].length > 0) {
      foodChenged[item.group].forEach((itemChenge) => {
        if (itemChenge.id === item.id) {
          const value = itemChenge.value.toFixed(2);
          listInitialText.push({
            idItem: itemChenge.id,
            idChenge: itemChenge.idChenge,
            text: `x1 ${itemChenge.name.split('-')[1]} = ${value}`,
            tags: {
              isAdd: itemChenge.additional.length > 0,
              isObs: itemChenge.obs !== '',
            },
          });
        }
      });
    }
    this.setState({ txtSale: listInitialText });
  }

  updateAmount = (item, exprecion) => {
    const { txtSale } = this.state;

    if (exprecion === 'add') item.amount += 1;
    else if (exprecion === 'rm') item.amount -= 1;

    if (item.amount === 1) {
      this.setState({
        txtSale: [{
          idItem: item.id,
          idChenge: item.id, // para itens sem adicionais, o idChenge é igual ao id do item
          text: `x${item.amount} ${item.name.split('-')[1]} = ${item.value.toFixed(2)}`,
          tags: {
            isAdd: item.additional.length > 0,
            isObs: item.obs !== '',
          },
        }],
      });
    } else if (item.amount === 0) {
      this.setState({ txtSale: [] });
    } else {
      const value = (item.value * item.amount).toFixed(2);
      this.setState({
        txtSale: [{
          ...txtSale[0],
          text: `x${item.amount} ${item.name.split('-')[1]} = ${value}`,
        }],
      });
    }
  };

  addNewItem = (item) => {
    const {
      valueItem,
      additional,
      observations,
      updateQuantityAdd,
      updateObsAndValueItem,
    } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;
    const { txtSale } = this.state;

    if (additional.length === 0) {
      this.updateAmount(item, 'add');
      return;
    }

    const listFoodChenged = foodChenged[item.group];

    const newId = listFoodChenged.length > 0
      ? listFoodChenged[listFoodChenged.length - 1].idChenge + 1 : 1;

    foodChenged[item.group].push({
      ...item,
      amount: 1,
      idChenge: newId,
      additional: additional.filter((add) => add.amount > 0),
      value: valueItem,
      obs: observations,
    });

    this.setState({
      txtSale: [
        ...txtSale,
        {
          idItem: item.id,
          idChenge: newId,
          text: `x1 ${item.name.split('-')[1]} = ${valueItem.toFixed(2)}`,
          tags: {
            isAdd: additional.find((iten) => iten.amount > 0),
            isObs: observations !== '',
          },
        },
      ],
    });

    updateQuantityAdd(additional.map((add) => ({ ...add, amount: 0 })));
    updateObsAndValueItem(item.value, '');
  };

  removeItem = (itemText, item) => {
    const { additional } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;
    const { txtSale } = this.state;

    if (additional.length === 0) {
      this.updateAmount(item, 'rm');
      return;
    }

    const newListText = txtSale.filter(
      (sale) => sale.idChenge !== itemText.idChenge,
    );

    foodChenged[item.group] = foodChenged[item.group].filter(
      (iten) => iten.idChenge !== itemText.idChenge,
    );

    this.setState({ txtSale: newListText });
  };

  itemSelected = (itemText, item) => {
    const { additional, updateQuantityAdd, updateObsAndValueItem } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    if (additional.length === 0) return;

    const itemSelect = foodChenged[item.group].find(
      (iten) => iten.idChenge === itemText.idChenge,
    );

    additional.forEach((add) => {
      const addSelect = itemSelect.additional.find(
        (addItem) => addItem.name === add.name,
      );
      if (addSelect) add.amount = addSelect.amount;
    });

    updateQuantityAdd(additional);
    updateObsAndValueItem(itemSelect.value, itemSelect.obs);

    this.removeItem(itemText, item);
  };

  clearListAdds = (valueItem) => {
    const { updateQuantityAdd, updateObsAndValueItem, additional } = this.props;

    updateQuantityAdd(additional.map((add) => ({ ...add, amount: 0 })));
    updateObsAndValueItem(valueItem, '');
  };

  render() {
    const {
      item,
      additional,
      observations,
      valueItem,
    } = this.props;
    const { txtSale } = this.state;

    return (
      <div className="Viwer_buy">
        <div className="Div_clear_all_adds">
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
              (valueItem).toLocaleString('pt-BR', {
                style: 'currency', currency: 'BRL' })
            }
          </h4>
          <button onClick={ () => this.addNewItem(item) } className="btm_add">
            Adicionar
          </button>
        </div>
        <ul className="List_Adds">
          {
            txtSale.map((sale) => (
              <li key={ sale.id } className="Viwer_Item_buy">
                <div
                  className="Div_item_select"
                  onClick={ () => this.itemSelected(sale, item) }
                  onKeyDown={ this.itemSelected }
                  role="button"
                  tabIndex={ 0 }
                >
                  <p>
                    { sale.text }
                  </p>
                  <div className="div_tags_buy">
                    {
                      sale.tags.isAdd && <hr id="tag_color_Add" />
                    }
                    { sale.tags.isObs && <hr id="tag_color_obs" /> }
                  </div>
                </div>
                <button
                  className="btm_remove"
                  onClick={ () => this.removeItem(sale, item) }
                >
                  Remover
                </button>
              </li>
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
};
export default BarOrder;
