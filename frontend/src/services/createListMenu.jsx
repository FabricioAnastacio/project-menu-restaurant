import ItemComponent from '../components/ItemComponent';

// eslint-disable-next-line max-params
export function createListMenuBurguer(
  list,
  getItem,
  setBlur,
  imgOpem,
  counterItens,
  counterRequestAmount,
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
      <h3 className="Titles-Burger">ESPECIAL DOS HASHIRAS</h3>
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
      <h3 className="Titles-Burger">ADICIONAIS</h3>
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
