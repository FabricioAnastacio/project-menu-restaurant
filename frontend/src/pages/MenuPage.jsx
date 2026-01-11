import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import listFoods from '../data/listFoods';
import listDrinks from '../data/listDrinks';
import Footer from '../components/Footer';
import ListCategory from '../components/ListCategory';
import '../style/menuPage.css';
import FooterRotes from '../components/FooterRotes';
import AppContext from '../context/AppContext';

class MenuPage extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      allDrinks: false,
      food: true,
      beer: false,
      drink: true,
      alcoholFree: false,
      list: listFoods,
      imgOpen: false,
      counterItens: 0,
    };

    this.pairMap = {
      allDrinks: 'food',
      food: 'allDrinks',
      beer: ['drink', 'alcoholFree'],
      drink: ['beer', 'alcoholFree'],
      alcoholFree: ['drink', 'beer'],
    };
  }

  componentDidMount() {
    const { counterRequest } = this.context;
    this.setState({
      counterItens: counterRequest,
    });
  }

  searchItem = (value) => {
    const { food } = this.state;
    const menuActual = food ? listFoods : listDrinks;
    if (value.length === 0) return menuActual;
    return menuActual.filter((a) => a.name.toUpperCase().includes(value.toUpperCase()));
  };

  handleChenge = ({ target }) => {
    const { name, checked, type, value } = target;
    const { listMenuFood, listDrink } = this.context;
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
      list: name === 'allDrinks' ? listDrink : listMenuFood,
      beer: false,
      drink: true,
      alcoholFree: false,
    });
  };

  handleChengeThowSelection = ({ target }) => {
    const { name, checked } = target;
    const relatedKey = this.pairMap[name];
    console.log(name);
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

  counterRequestAmount = (value) => {
    this.context.counterRequest = value;
    this.setState({
      counterItens: value,
    });
  };

  render() {
    const {
      search,
      drink,
      allDrinks,
      food,
      beer,
      alcoholFree,
      imgOpen,
      list,
      counterItens,
    } = this.state;

    return (
      <div className="PageMenu">
        <Header
          imgOpen={ imgOpen }
        />
        <ListCategory
          search={ search }
          handleChenge={ this.handleChenge }
          handleChengeThow={ this.handleChengeThowSelection }
          allDrinks={ allDrinks }
          foods={ food }
          beer={ beer }
          drink={ drink }
          alcoholFree={ alcoholFree }
        />
        <Menu
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
          isbeer={ beer }
          isFood={ food }
          isAlcoholFree={ alcoholFree }
          listMenu={ list }
          counterItens={ counterItens }
          counterRequestAmount={ this.counterRequestAmount }
        />
        <FooterRotes counterItens={ counterItens } />
        <Footer imgOpem={ imgOpen } />
      </div>
    );
  }
}

MenuPage.contextType = AppContext;
Menu.contextType = AppContext;

export default MenuPage;
