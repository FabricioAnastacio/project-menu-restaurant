import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class BarOrder extends React.Component {
  addNewItem = (item) => {
    const {
      valueItem,
      additional,
      txtSale,
      observations,
      updateQuantityAdd,
      updateObsAndValueItem,
    } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

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

    txtSale.push({
      idItem: item.id,
      idChenge: newId,
      text: `x1 ${item.name.split('-')[1]} = ${valueItem.toFixed(2)}`,
      tags: {
        isAdd: additional.find((iten) => iten.amount > 0),
        isObs: observations !== '',
      },
    });

    updateQuantityAdd(additional.map((add) => ({ ...add, amount: 0 })));
    updateObsAndValueItem(item.value, '');
  };

  removeItem = (itemText, item) => {
    const { txtSale, updateTextSale } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    const newListText = txtSale.filter(
      (sale) => sale.idChenge !== itemText.idChenge,
    );

    foodChenged[item.group] = foodChenged[item.group].filter(
      (iten) => iten.idChenge !== itemText.idChenge,
    );

    updateTextSale(newListText);
  };

  itemSelected = (itemText, item) => {
    const { additional, updateQuantityAdd, updateObsAndValueItem } = this.props;
    const { listMenu: { menu: { foodChenged } } } = this.context;

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
      txtSale,
    } = this.props;

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
    name: PropTypes.string,
    value: PropTypes.number,
    group: PropTypes.string,
  }).isRequired,
  additional: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
    amount: PropTypes.number,
  })).isRequired,
  observations: PropTypes.string.isRequired,
  valueItem: PropTypes.number.isRequired,
  txtSale: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    tags: PropTypes.shape({
      isAdd: PropTypes.bool,
      isObs: PropTypes.bool,
    }),
  })).isRequired,
  updateTextSale: PropTypes.func.isRequired,
  updateObsAndValueItem: PropTypes.func.isRequired,
  updateQuantityAdd: PropTypes.func.isRequired,
};

export default BarOrder;
