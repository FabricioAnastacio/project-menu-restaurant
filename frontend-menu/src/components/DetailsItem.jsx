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
      additional: [
        {
          name: 'Bife 90g',
          value: 8.00,
          amount: 0,
          maxAmount: 1,
        },
        {
          name: 'Ovo',
          value: 3.00,
          amount: 0,
          maxAmount: 2,
        },
      ],
    };
  }

  componentDidMount() {
    const { item } = this.props;

    this.setState({
      valueItem: item.value,
      txtSale: [
        {
          valueItem: item.value,
          text: '',
        },
      ],
    });
  }

  addNewItem = (item) => {
    const { valueItem, additional } = this.state;
    const { listMenu: { menu: { foodChenged } } } = this.context;

    const existItem = foodChenged[item.group].find((itemChenge) => (
      itemChenge.id === item.id && itemChenge.value === valueItem
    ) && itemChenge);

    if (foodChenged[item.group].length === 0 || !existItem) {
      item.amount = 1;
      foodChenged[item.group].push({
        ...item,
        additional: additional.filter((add) => add.amount > 0),
        value: valueItem,
      });
    } else {
      const indexItem = foodChenged[item.group].indexOf(existItem);
      foodChenged[item.group][indexItem].amount += 1;
      foodChenged[item.group][indexItem].additional.push(
        additional.filter((add) => add.amount > 0),
      );
    }

    this.setState({
      additional: additional.map((add) => ({ ...add, amount: 0 })),
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

  render() {
    const { item } = this.props;
    const { valueItem, txtSale, additional } = this.state;

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
          <div className="Viwer_buy">
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
            <ul>
              {
                txtSale.map((sale) => (
                  <li key={ sale.id } className="Viwer_Item_buy">
                    <p>
                      { sale.text }
                    </p>
                    <button className="btm_remove">Remover</button>
                  </li>
                ))
              }
            </ul>
          </div>
          {
            additional.length > 0 && (
              <section className="Section_additional">
                <div className="Title_additional">
                  <h3>Adicionais</h3>
                </div>
                <ul className="List_additional">
                  {
                    additional.map((ingredint, i) => (
                      <ItemIngredint
                        key={ i }
                        ingredient={ ingredint }
                        chengeValueItem={ this.chengeValueItem }
                      />
                    ))
                  }
                </ul>
              </section>
            )
          }
          <div className="Details_ingredients">
            <h3 className="Ingredients_title">Ingredientes:</h3>
            <ul className="Ingredients_list">
              {
                item.ingredients.map((ingr, i) => (
                  <li
                    key={ i }
                    className="Ingredient"
                  >
                    { ingr }
                  </li>
                ))
              }
            </ul>
          </div>
          <HashLink className="Btm_Up" to={ `/#${this.getHash(item)}` }>Sair</HashLink>
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
    additional: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default DetailsItem;
