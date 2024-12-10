import React from 'react';
import '../style/header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: false,
      foods: true,
    };
  }

  handleChenge = ({ target }) => {
    const options = this.state;
    const { name, checked } = target;
    if (options[name] === true) return;
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
        <section>
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
        </section>
        <hr className="line" />
      </header>
    );
  }
}

export default Header;
