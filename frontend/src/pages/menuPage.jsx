import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: false,
      foods: true,
      item: 'foods',
    };
  }

  handleChenge = ({ target }) => {
    const options = this.state;
    const { name, checked } = target;
    if (options[name] === true) return;
    this.setState({
      item: name,
      [name]: checked,
      ...(name === 'drinks' ? { foods: !checked } : { drinks: !checked }),
    });
  };

  render() {
    const { drinks, foods, item } = this.state;

    return (
      <>
        <Header
          handleChenge={ this.handleChenge }
          drinks={ drinks }
          foods={ foods }
        />
        <Menu item={ item } />
      </>
    );
  }
}

export default MenuPage;
