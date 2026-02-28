import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import listFoods from '../data/listFoods';
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
      candy: false,
      list: listFoods.food,
      listActual: 'food',
      imgOpen: false,
      counterItens: 0,
    };

    this.pairMap = {
      allDrinks: ['candy', 'food'],
      food: ['allDrinks', 'candy'],
      candy: ['allDrinks', 'food'],
    };
  }

  componentDidMount() {
    const { counterRequest } = this.context;
    this.setState({
      counterItens: counterRequest,
    });
  }

  searchItem = (value) => {
    const { listActual } = this.state;
    const { listMenu } = this.context;
    const menuActual = listMenu[listActual];
    if (value.length === 0) return menuActual;
    return menuActual.filter((a) => a.name.toUpperCase().includes(value.toUpperCase()));
  };

  handleChenge = ({ target }) => {
    const { name, checked, type, value } = target;
    const { listMenu } = this.context;
    const relatedKey = this.pairMap[name];

    if (type === 'text') {
      this.setState({
        [name]: value,
        list: this.searchItem(value),
      });
      return;
    }

    if (!checked) return;
    this.setState({
      [name]: checked,
      [relatedKey[0]]: !checked,
      [relatedKey[1]]: !checked,
      list: listMenu[name],
      listActual: name,
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
      allDrinks,
      food,
      candy,
      imgOpen,
      list,
      counterItens,
    } = this.state;

    return (
      <div className="PageMenu">
        <Header
          title="CARDAPIO"
          imgOpen={ imgOpen }
        />
        <ListCategory
          search={ search }
          handleChenge={ this.handleChenge }
          allDrinks={ allDrinks }
          foods={ food }
          setBlur={ imgOpen }
          candy={ candy }
        />
        <Menu
          setBlur={ this.setBlur }
          imgOpem={ imgOpen }
          isFood={ food }
          isCandy={ candy }
          listMenu={ list }
          counterItens={ counterItens }
          counterRequestAmount={ this.counterRequestAmount }
        />
        <FooterRotes counterItens={ counterItens } imgOpem={ imgOpen } />
        <Footer imgOpem={ imgOpen } />
      </div>
    );
  }
}

MenuPage.contextType = AppContext;
Menu.contextType = AppContext;

export default MenuPage;
