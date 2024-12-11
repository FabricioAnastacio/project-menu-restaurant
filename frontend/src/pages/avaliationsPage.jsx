import React from 'react';
import '../style/aviliation.css';
import { Link } from 'react-router-dom';

class Avaliations extends React.Component {
  constructor() {
    super();
    this.state = {
      note: 0,
    };
  }

  clickStars = (num) => {
    this.setState({ note: num });
  };

  createStars = (n = 0) => {
    const stars = 6;
    const listStars = [];
    let isGold;
    for (let i = 1; i < stars; i++) {
      if (i <= n) isGold = 'Btm-star-Gold';
      if (i > n) isGold = 'Btm-star';
      listStars.push(
        <button
          key={ i }
          className={ isGold }
          onClick={ () => this.clickStars(i) }
        >
          &#9733;
        </button>,
      );
    }
    return listStars;
  };

  render() {
    const { note } = this.state;
    return (
      <div className="Avaliation">
        <header>
          <h1>Qual nota voce dara?</h1>
        </header>
        <main className="Avaliation">
          <div className="Stars">
            {
              this.createStars(note).map((star) => star)
            }
          </div>
          <button>
            <Link to="/">confirmar</Link>
          </button>
        </main>
      </div>
    );
  }
}

export default Avaliations;
