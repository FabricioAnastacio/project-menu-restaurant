import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import listMenu from '../services/listMenu';
import '../style/menuPage.css';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks: false,
      foods: true,
      list: 'foods',
      imgOpen: false,
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

  setBlur = () => {
    const { imgOpen } = this.state;
    this.setState({
      imgOpen: !imgOpen,
    });
  };

  render() {
    const { drinks, foods, list, imgOpen } = this.state;

    return (
      <>
        <Header
          handleChenge={ this.handleChenge }
          drinks={ drinks }
          foods={ foods }
          imgOpen={ imgOpen }
        />
        <Menu
          listMenu={ listMenu[list] }
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
        />
      </>
    );
  }
}

export default MenuPage;
