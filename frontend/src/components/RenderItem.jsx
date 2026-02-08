import React from 'react';
import PropTypes from 'prop-types';

class RenderItem extends React.Component {
  constructor() {
    super();

    this.state = {
      obs: false,
      itemObs: '',
    };
  }

  handleChengeObs = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onClickAddObs = () => {
    const { obs } = this.state;

    this.setState({
      obs: !obs,
      itemObs: '',
    });
  };

  render() {
    const { obs, itemObs } = this.state;
    const { item, key, type, addNewItem, removeItem } = this.props;

    return (
      <li key={ key } className="request">
        <div className="item-request">
          <div className="item-title">
            <div
              className="imgCart"
              style={ { backgroundImage: `url(${item.img})` } }
              aria-hidden="true"
            />
            <div className="item-name">
              <h1>{ item.name }</h1>
              <p>{ `R$${item.value.toFixed(2)}` }</p>
              <button
                className={ `Btm-Observation-${obs}` }
                onClick={ this.onClickAddObs }
              >
                { !obs ? 'Add observação' : 'Rm observação' }
              </button>
            </div>
          </div>
          <button onClick={ () => addNewItem(item, type) }>+</button>
          <p>{ item.amount }</p>
          <button onClick={ () => removeItem(item, type) }>-</button>
        </div>
        <textarea
          className="item-obs"
          name="itemObs"
          id="obs"
          value={ itemObs }
          onChange={ this.handleChengeObs }
          placeholder="Ex. Sem batata palha"
          style={ { display: obs ? 'flex' : 'none' } }
        />
      </li>
    );
  }
}

RenderItem.propTypes = {
  item: PropTypes.objectOf({}).isRequired,
  key: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
};

export default RenderItem;
