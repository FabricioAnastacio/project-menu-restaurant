import ItemComponent from '../components/ItemComponent';
import katanaDuo from '../pictures/icons8-katanaDuo-100.png';
import burguer from '../pictures/icons8-hambúrguer-50.png';
import potato from '../pictures/icons8-batatas-fritas-50.png';

const data = new Date().getDay();
// eslint-disable-next-line max-params
export function createListMenuBurguer(
  list,
  getItem,
  setBlur,
  imgOpem,
  counterItens,
  counterRequestAmount,
) {
  const combos = list.combo.filter((item) => item.displayDate.includes(data));

  return (
    <ul className={ `Ul-${imgOpem}` }>
      {
        combos.length > 0 && (
          <view>
            <h3
              className="Titles-Burger"
            >
              COMBO DO DIA
            </h3>
          </view>
        )
      }
      {
        combos.map((item, key) => (
          <ItemComponent
            key={ key }
            grup="combo"
            item={ item }
            isFood
            isCandy={ false }
            getItem={ getItem }
            setBlur={ setBlur }
            counterItens={ counterItens }
            counterRequestAmount={ counterRequestAmount }
          />
        ))
      }
      <view>
        <h3
          className="Titles-Burger"
          id="classic"
        >
          <img className="Icon_title" src={ burguer } alt="Hamburguer" />
          CLASSICOS
        </h3>
      </view>
      {
        list.classic.map((item, key) => (
          <ItemComponent
            key={ key }
            grup="classic"
            item={ item }
            isFood
            isCandy={ false }
            getItem={ getItem }
            setBlur={ setBlur }
            counterItens={ counterItens }
            counterRequestAmount={ counterRequestAmount }
          />
        ))
      }
      <view>
        <h3
          className="Titles-Burger"
          id="handmade"
        >
          <img className="Icon_title" src={ katanaDuo } alt="Katanas" />
          ESPECIAL DOS HASHIRAS
        </h3>
      </view>
      {
        list.handmade.map((item, key) => (
          <ItemComponent
            key={ key }
            grup="handmade"
            item={ item }
            isFood
            isCandy={ false }
            getItem={ getItem }
            setBlur={ setBlur }
            counterItens={ counterItens }
            counterRequestAmount={ counterRequestAmount }
          />
        ))
      }
      <h3
        className="Titles-Burger"
        id="additional"
      >
        <img className="Icon_title" src={ potato } alt="Batata" />
        ACOMPANHAMENTOS
      </h3>
      {
        list.additional.map((item, key) => (
          <ItemComponent
            key={ key }
            grup="additional"
            item={ item }
            isFood
            isCandy={ false }
            getItem={ getItem }
            setBlur={ setBlur }
            counterItens={ counterItens }
            counterRequestAmount={ counterRequestAmount }
          />
        ))
      }
    </ul>
  );
}
