import React from 'react';
import PropTypes from 'prop-types';
import '../style/header.css';

class Header extends React.Component {
  render() {
    const { drinks, foods, handleChenge } = this.props;

    return (
      <header>
        <aside>
          <h1>Cardápio</h1>
        </aside>
        <section>
          <label label className={ `Label-select-${drinks}` }>
            <input
              type="checkbox"
              checked={ drinks }
              name="drinks"
              onChange={ handleChenge }
            />
            Drinks
          </label>
          <label className={ `Label-select-${foods}` }>
            <input
              type="checkbox"
              checked={ foods }
              name="foods"
              onChange={ handleChenge }
            />
            Petiscos
          </label>
        </section>
        <hr className="line" />
      </header>
    );
  }
}

Header.propTypes = {
  drinks: PropTypes.bool.isRequired,
  foods: PropTypes.bool.isRequired,
  handleChenge: PropTypes.func.isRequired,
};

export default Header;
