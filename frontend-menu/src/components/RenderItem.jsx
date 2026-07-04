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

  componentDidMount() {
    const { item } = this.props;

    if (item.obs !== '') this.setState({ itemObs: item.obs });
  }

  componentWillUnmount() {
    const { item } = this.props;
    const { itemObs } = this.state;

    item.obs = itemObs;
  }

  handleChengeObs = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onClickAddObs = () => {
    this.setState({
      itemObs: '',
    });
  };

  render() {
    const { obs, itemObs } = this.state;
    const { item, key, grup, addNewItem, removeItem, removeItemChenged,
    } = this.props;

    return (
      <li
        key={ key }
        className={ `request ${grup} Menu_item` }
        style={ { opacity: `${item.amount === 0 ? '.6' : '1'}` } }
      >
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
              {
                grup !== 'souce' && (
                  <button
                    className={ `Btm-Observation-${obs}` }
                    onClick={ () => this.setState({ obs: !obs }) }
                  >
                    { !obs ? 'Informações' : 'Fechar' }
                  </button>
                )
              }
            </div>
          </div>
          <div className="Div_item_btns_tags">
            {
              item.additional && (
                <div className="Tags_item">
                  {
                    item.additional.find((ing) => ing.amount > 0)
                    && <hr id="tag_color_Add" />
                  }
                  { itemObs !== '' && <hr id="tag_color_obs" /> }
                </div>
              )
            }
            {
              item.idChenge ? (
                <button
                  className="btn_remove"
                  onClick={ () => removeItemChenged(item) }
                >
                  Remover
                </button>
              ) : (
                <div className="item_btms">
                  <button
                    className="btn"
                    onClick={ () => removeItem(item, grup) }
                  >
                    -
                  </button>
                  <p>{ item.amount }</p>
                  <button
                    className="btn"
                    onClick={ () => addNewItem(item, grup) }
                  >
                    +
                  </button>
                </div>
              )
            }
            <hr style={ { border: '0' } } />
          </div>
        </div>
        {
          grup !== 'souce' && (
            <div style={ { display: obs ? 'flex' : 'none' } } className="item-container">
              <div className="item-obs-header">
                <label className="Label_Item_obs" htmlFor="obs">
                  Observações:
                </label>
                <button
                  onClick={ this.onClickAddObs }
                  className="Btm_clear_obs"
                >
                  Limpar
                </button>
              </div>
              <textarea
                className="item-obs"
                name="itemObs"
                id="obs"
                value={ itemObs }
                onChange={ (e) => this.handleChengeObs(e, item) }
                placeholder="Ex. Sem batata palha"
              />
              {
                item.idChenge && (
                  <ul className="List_aditional_order">
                    <p>Adicionais:</p>
                    { item.additional.map((add, keyAdd) => (
                      <li key={ keyAdd } className="Item_aditional_order">
                        <p>{ add.amount }</p>
                        <p>{ add.name }</p>
                        <p>{ `R$${add.value.toFixed(2)}` }</p>
                      </li>
                    )) }
                  </ul>
                )
              }
            </div>
          )
        }
      </li>
    );
  }
}

RenderItem.propTypes = {
  item: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    obs: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
  grup: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
  removeItemChenged: PropTypes.func.isRequired,
};

export default RenderItem;
