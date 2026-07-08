import React from 'react';
import PropTypes from 'prop-types';
import returnIcon from '../pictures/icons8-forward-100.png';
import logo from '../pictures/logo.jpg';
import AppContext from '../context/AppContext';
import ItemIngredint from './ItemIngredint';
import BarOrder from './barOrderDetails';
import TransitionLink from '../helper/TransitionLink';

class DetailsItem extends React.Component {
  constructor() {
    super();

    this.state = {
      valueItem: 0,
      additional: [],
      ingOpem: false,
      observations: '',
    };
  }

  componentDidMount() {
    const { item } = this.props;
    const { listMenu: { menu: { ingAdicional } } } = this.context;

    this.setState({ valueItem: item.value });

    if (item.group === 'combo' || item.group === 'additional') return;

    this.setState({
      additional: ingAdicional[item.group].map((ing) => ({ ...ing, amount: 0 })), // somente insere os adicionais possiveis
    });
  }

  chengeValueItem = (value) => {
    this.setState((prevState) => ({
      valueItem: prevState.valueItem + value,
    }));
  };

  updateQuantityAdd = (newList) => {
    this.setState({
      additional: newList,
    });
  };

  updateObsAndValueItem = (value, observations) => {
    this.setState({
      valueItem: value,
      observations,
    });
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
    const { item, counterRequestAmount, counterItens } = this.props;
    const { valueItem, additional, ingOpem, observations } = this.state;

    return (
      <section className="Section-DetailsItem" id="Header">
        <header className="Header_top">
          <TransitionLink
            to="/"
            className="Return_icon"
          >
            <img src={ returnIcon } alt="Voltar" />
          </TransitionLink>
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
          <img
            src={ item.img }
            alt={ item.name }
          />
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
          {
            additional.length > 0 && (
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
            )
          }
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
        <BarOrder
          item={ item }
          additional={ additional }
          observations={ observations }
          valueItem={ valueItem }
          counterItens={ counterItens }
          counterRequestAmount={ counterRequestAmount }
          updateQuantityAdd={ this.updateQuantityAdd }
          updateObsAndValueItem={ this.updateObsAndValueItem }
        />
      </section>
    );
  }
}

DetailsItem.contextType = AppContext;
DetailsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    idList: PropTypes.number.isRequired,
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
  counterRequestAmount: PropTypes.func.isRequired,
  counterItens: PropTypes.number.isRequired,
};
export default DetailsItem;
