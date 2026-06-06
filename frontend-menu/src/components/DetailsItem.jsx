/* eslint-disable max-lines */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import returnIcon from '../pictures/icons8-forward-100.png';
import logo from '../pictures/logo.jpg';
import AppContext from '../context/AppContext';
import ItemIngredint from './ItemIngredint';

class DetailsItem extends React.Component {
  constructor() {
    super();

    this.state = {
      groupFood: ['combo', 'classic', 'handmade', 'additional'],
      valueItem: 0,
      txtSale: [],
      additional: [],
      ingOpem: false,
      observations: '',
    };
  }

  componentDidMount() {
    const { item } = this.props;
    const { listMenu: { menu: { ingAdicional, foodChenged } } } = this.context;

    const listInitialText = [];

    if (foodChenged[item.group].length > 0) {
      foodChenged[item.group].forEach((itemChenge) => {
        if (itemChenge.id === item.id) {
          const value = itemChenge.value.toFixed(2);
          listInitialText.push({
            idItem: itemChenge.id,
            text: `x1 ${itemChenge.name.split('-')[1]} = ${value}`,
          });
        }
      });
    }

    this.setState({
      valueItem: item.value,
      txtSale: listInitialText,
      additional: ingAdicional[item.group].map((ing) => ({ ...ing, amount: 0 })),
    });
  }

  addNewItem = (item) => {
    const { valueItem, additional, txtSale, observations } = this.state;
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

    this.setState({
      additional: additional.map((add) => ({ ...add, amount: 0 })),
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
      valueItem: item.value,
      observations: '',
    });
  };

  removeItem = (itemText, item) => {
    const { txtSale } = this.state;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    const newListText = txtSale.filter(
      (sale) => sale.idChenge !== itemText.idChenge,
    );

    foodChenged[item.group] = foodChenged[item.group].filter(
      (iten) => iten.idChenge !== itemText.idChenge,
    );

    this.setState({
      txtSale: newListText,
    });
  };

  itemSelected = (itemText, item) => {
    const { additional } = this.state;
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

    this.setState({
      additional: [...additional],
      valueItem: itemSelect.value,
      observations: itemSelect.obs,
    });

    this.removeItem(itemText, item);
  };

  clearListAdds = (valueItem) => {
    const { additional } = this.state;

    this.setState({
      additional: additional.map((add) => ({ ...add, amount: 0 })),
      valueItem,
      observations: '',
    });
  };

  getHash = ({ id, group }) => {
    const { groupFood } = this.state;

    if (group === groupFood[0]) return group;
    if (groupFood.includes(group) && id - 1 === 0) return group;

    return `${group}item${id - 1}`;
  };

  chengeValueItem = (value) => {
    this.setState((prevState) => ({
      valueItem: prevState.valueItem + value,
    }));
  };

  toggleIngredients = () => {
    this.setState((prevState) => ({
      ingOpem: !prevState.ingOpem,
    }));
  };

  chengeObs = ({ target: { value } }) => {
    this.setState({
      observations: value,
    });
  };

  render() {
    const { item } = this.props;
    const { valueItem, txtSale, additional, ingOpem, observations } = this.state;

    if (additional.length === 0) return <h1>Carregando...</h1>;

    return (
      <section className="Section-DetailsItem" id="Header">
        <header className="Header_top">
          <HashLink to={ `/#${this.getHash(item)}` } className="Return_icon">
            <img src={ returnIcon } alt="Voltar" />
          </HashLink>
          <h1 className="Header_title">DETALHES</h1>
          <img className="Header_logo" src={ logo } alt="Logo" />
        </header>
        <div className="Details_item">
          <div className="Title_details">
            <h3 className="Title">
              <span>{ item.name.split('-')[0] }</span>
              { item.name.split('-')[1] }
            </h3>
            <h3 className="Details_value">
              {
                item.value.toLocaleString('pt-BR', {
                  style: 'currency', currency: 'BRL' })
              }
            </h3>
          </div>
          <p className="Description">{ item.description }</p>
          <img src={ item.img } alt={ item.name } />
          <div
            className="Details_ingredients"
            role="button"
            onClick={ () => this.toggleIngredients() }
            onKeyDown={ this.toggleIngredients }
            tabIndex={ 0 }
          >
            <h3 className="Ingredients_title">
              Ingredientes:
            </h3>
            <ul className={ `Ingredients_list listOpem-${ingOpem}` }>
              {
                item.ingredients.map((ingr, i) => (
                  <li
                    key={ i }
                    className={ `Ingredient ingOpem-${ingOpem}` }
                  >
                    { ingr }
                  </li>
                ))
              }
              <p className="btm_more_viwer">
                {ingOpem ? 'Ver menos...' : 'Ver mais...' }
              </p>
            </ul>
          </div>
          <section className="Section_additional">
            <div className="Title_section">
              <h3>Adicionais</h3>
              <hr id="tag_color_Add" />
            </div>
            <ul className="List_additional">
              {
                additional.map((ingredint, i) => (
                  <ItemIngredint
                    key={ i }
                    className="Item_additional"
                    ingredient={ ingredint }
                    chengeValueItem={ this.chengeValueItem }
                  />
                ))
              }
            </ul>
          </section>
          <section className="Section_obs">
            <div className="Title_section">
              <h3 className="Title_obs">Observações</h3>
              <hr id="tag_color_obs" />
            </div>
            <textarea
              className="Text_obs"
              placeholder="Ex: Sem cebola, por favor!"
              value={ observations }
              name="obs"
              onChange={ this.chengeObs }
            />
          </section>
          <section className="Section_info">
            <h4 className="Info_h4">Informações:</h4>
            <p className="Info_p">
              <hr id="tag_color_Add" />
              = &quot;Possue adicionais&quot;
            </p>
            <p className="Info_p">
              <hr id="tag_color_obs" />
              = &quot;Possue observações&quot;
            </p>
            <p className="Info_text">
              - Cada item adicionado é contabilizado no carrinho,
              para finalizar a compra, valte a tela menu e siga em &quot;Proximo&quot;.
            </p>
          </section>
        </div>
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
      </section>
    );
  }
}

DetailsItem.contextType = AppContext;
DetailsItem.propTypes = {
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
};
export default DetailsItem;
