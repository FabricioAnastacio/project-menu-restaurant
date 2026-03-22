import ItemComponent from '../components/ItemComponent';

// eslint-disable-next-line max-params
export function createListMenuBurguer(
  list,
  getItem,
  setBlur,
  imgOpem,
  counterItens,
  counterRequestAmount,
  ref1,
  ref2,
) {
  return (
    <ul className={ `Ul-${imgOpem}` }>
      {
        list.clasic.map((item, key) => (
          <ItemComponent
            key={ key }
            grup="clasic"
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
          ref={ ref1 }
          className="Titles-Burger"
          id="handmade"
        >
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
      <h3 ref={ ref2 } className="Titles-Burger" id="additional">ACOMPANHAMENTOS</h3>
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
