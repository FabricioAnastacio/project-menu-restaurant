import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import listFoods from '../data/listFoods';
import listDrinks from '../data/listDrinks';
import Footer from '../components/Footer';
import ListCategory from '../components/ListCategory';
import '../style/menuPage.css';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      drink: false,
      food: true,
      beer: false,
      softDrink: true,
      alcoholFree: false,
      list: listFoods,
      imgOpen: false,
    };

    this.pairMap = {
      drink: 'food',
      food: 'drink',
      beer: ['softDrink', 'alcoholFree'],
      softDrink: ['beer', 'alcoholFree'],
      alcoholFree: ['softDrink', 'beer'],
    };
  }

  searchItem = (value) => {
    const { food } = this.state;
    const menuActual = food ? listFoods : listDrinks;
    if (value.length === 0) return menuActual;
    return menuActual.filter((a) => a.name.toUpperCase().includes(value.toUpperCase()));
  };

  handleChenge = ({ target }) => {
    const { name, checked, type, value } = target;
    const relatedKey = this.pairMap[name];
    if (type === 'text') {
      this.setState({
        [name]: value,
        list: this.searchItem(value),
      });
      return;
    }
    if (!checked === true) return;
    this.setState({
      [name]: checked,
      [relatedKey]: !checked,
      list: name === 'drink' ? listDrinks.softDrink : listFoods,
      beer: false,
      softDrink: true,
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
      search,
      softDrink,
      drink,
      food,
      beer,
      alcoholFree,
      list,
      imgOpen,
    } = this.state;

    return (
      <div className="PageMenu">
        <section id="header">
          <Header
            handleChenge={ this.handleChenge }
            handleChengeThow={ this.handleChengeThowSelection }
            drinks={ drink }
            foods={ food }
            beer={ beer }
            softDrink={ softDrink }
            alcoholFree={ alcoholFree }
            imgOpen={ imgOpen }
          />
          <ListCategory
            search={ search }
            handleChenge={ this.handleChenge }
            handleChengeThow={ this.handleChengeThowSelection }
            drinks={ drink }
            foods={ food }
            beer={ beer }
            softDrink={ softDrink }
            alcoholFree={ alcoholFree }
          />
        </section>
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
