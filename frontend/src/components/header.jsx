import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: false,
      foods: true,
    };
  }

  handleChenge = ({ target }) => {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
      ...(name === 'drinks' ? { foods: !checked } : { drinks: !checked }),
    });
  };

  render() {
    const { drinks, foods } = this.state;

    return (
      <header>
        <aside>
          <h1>Cardápio</h1>
        </aside>
        <label>
          <input
            type="checkbox"
            checked={ drinks }
            name="drinks"
            onChange={ this.handleChenge }
          />
          Drinks
        </label>
        <label>
          <input
            type="checkbox"
            checked={ foods }
            name="foods"
            onChange={ this.handleChenge }
          />
          Petiscos
        </label>
      </header>
    );
  }
}

export default Header;
