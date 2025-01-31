import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import listFoods from '../data/listFoods';
import listDrinks from '../data/listDrinks';
import Footer from '../components/footer';
import '../style/menuPage.css';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      drink: false,
      food: true,
      beer: false,
      hotDrink: true,
      alcoholFree: false,
      list: listFoods,
      imgOpen: false,
    };

    this.pairMap = {
      drink: 'food',
      food: 'drink',
      beer: ['hotDrink', 'alcoholFree'],
      hotDrink: ['beer', 'alcoholFree'],
      alcoholFree: ['hotDrink', 'beer'],
    };
  }

  handleChenge = ({ target }) => {
    const { name, checked } = target;
    const relatedKey = this.pairMap[name];
    if (!checked === true) return;
    this.setState({
      [name]: checked,
      [relatedKey]: !checked,
      list: name === 'drink' ? listDrinks.hotDrink : listFoods,
      beer: false,
      hotDrink: true,
      alcoholFree: false,
    });
  };

  handleChengeThowSelection = ({ target }) => {
    const { name, checked } = target;
    const relatedKey = this.pairMap[name];
    if (!checked === true) return;
    this.setState({
      [name]: checked,
      [relatedKey[0]]: !checked,
      [relatedKey[1]]: !checked,
      list: listDrinks[name],
    });
  };

  setBlur = () => {
    const { imgOpen } = this.state;
    this.setState({
      imgOpen: !imgOpen,
    });
  };

  render() {
    const {
      hotDrink,
      drink,
      food,
      beer,
      alcoholFree,
      list,
      imgOpen,
    } = this.state;

    return (
      <div className="PageMenu">
        <Header
          handleChenge={ this.handleChenge }
          handleChengeThow={ this.handleChengeThowSelection }
          drinks={ drink }
          foods={ food }
          beer={ beer }
          hotDrink={ hotDrink }
          alcoholFree={ alcoholFree }
          imgOpen={ imgOpen }
        />
        <Menu
          listMenu={ list }
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
          isbeer={ beer }
        />
        <Footer imgOpem={ imgOpen } />
      </div>
    );
  }
}

export default MenuPage;
