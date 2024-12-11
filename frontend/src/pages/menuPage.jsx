import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import listMenu from '../services/listMenu';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: false,
      foods: true,
      list: 'foods',
    };
  }

  handleChenge = ({ target }) => {
    const options = this.state;
    const { name, checked } = target;
    if (options[name] === true) return;
    this.setState({
      list: name,
      [name]: checked,
      ...(name === 'drinks' ? { foods: !checked } : { drinks: !checked }),
    });
  };

  render() {
    const { drinks, foods, list } = this.state;

    return (
      <>
        <Header
          handleChenge={ this.handleChenge }
          drinks={ drinks }
          foods={ foods }
        />
        <Menu listMenu={ listMenu[list] } />
      </>
    );
  }
}

export default MenuPage;
