import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import returnIcon from '../pictures/icons8-forward-100.png';
import logo from '../pictures/logo.jpg';

class DetailsItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <section className="Section-DetailsItem" id="Header">
        <header className="Header_top">
          <Link to="/" className="Return_icon">
            <img src={ returnIcon } alt="Voltar" />
          </Link>
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
                Number(item.value).toLocaleString('pt-BR', {
                  style: 'currency', currency: 'BRL',
                })
              }
            </h3>
          </div>
          <p className="Description">{ item.description }</p>
          <img src={ item.img } alt={ item.name } />
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
        </div>
      </section>
    );
  }
}

DetailsItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsItem;
