import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../pictures/icons8-search-more-white-96.png';
import '../style/ListCategory.css';

class ListCategory extends React.Component {
  render() {
    const {
      allDrinks,
      foods,
      candy,
      handleChenge,
      search,
    } = this.props;
    const isFood = foods ? '' : 'none';

    return (
      <div className="Categorys">
        <section className="Select-item">
          <label className={ `Label-select-${allDrinks}` }>
            <input
              type="checkbox"
              checked={ allDrinks }
              name="allDrinks"
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
            Burgers
          </label>
          <label className={ `Label-select-${candy}` }>
            <input
              type="checkbox"
              checked={ candy }
              name="candy"
              onChange={ handleChenge }
            />
            Doces
          </label>
        </section>
        <section style={ { display: isFood } } className="Search_item">
          <img src={ searchIcon } alt="Lupa" />
          <input
            type="text"
            placeholder="Buscar..."
            name="search"
            value={ search }
            onChange={ handleChenge }
          />
        </section>
      </div>
    );
  }
}

ListCategory.propTypes = {
  allDrinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  candy: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default ListCategory;
