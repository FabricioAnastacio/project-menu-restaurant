import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../pictures/icons8-search-more-48.png';
import '../style/ListCategory.css';

class ListCategory extends React.Component {
  render() {
    const {
      hotDrink,
      drinks,
      foods,
      alcoholFree,
      beer,
      handleChenge,
      handleChengeThow,
    } = this.props;

    return (
      <div className="Categorys">
        <section className="Select-item">
          <label className={ `Label-select-${drinks}` }>
            <input
              type="checkbox"
              checked={ drinks }
              name="drink"
              onChange={ handleChenge }
            />
            Bebidas
          </label>
          <label className={ `Label-select-${foods}` }>
            <input
              type="checkbox"
              checked={ foods }
              name="food"
              onChange={ handleChenge }
            />
            Petiscos
          </label>
          <button className="Btms-search">
            <img src={ searchIcon } alt="pesquisar" />
          </button>
        </section>
        <section className={ `Select-item-thow-${drinks}` }>
          <label className={ `Label-select-thow-${hotDrink}` }>
            <input
              type="checkbox"
              checked={ hotDrink }
              name="hotDrink"
              onChange={ handleChengeThow }
            />
            Drinks
          </label>
          <label className={ `Label-select-thow-${beer}` }>
            <input
              type="checkbox"
              checked={ beer }
              name="beer"
              onChange={ handleChengeThow }
            />
            Cervejas
          </label>
          <label className={ `Label-select-thow-${alcoholFree}` }>
            <input
              type="checkbox"
              checked={ alcoholFree }
              name="alcoholFree"
              onChange={ handleChengeThow }
            />
            Sem alcool
          </label>
        </section>
      </div>
    );
  }
}

ListCategory.propTypes = {
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
  handleChengeThow: PropTypes.func.isRequired,
  alcoholFree: PropTypes.bool.isRequired,
  beer: PropTypes.bool.isRequired,
  hotDrink: PropTypes.bool.isRequired,
};

export default ListCategory;
