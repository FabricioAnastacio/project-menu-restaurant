export function createListMenuBeer(list, getItem, setBlur) {
  return (
    <>
      <h3>Chopp</h3>
      {
        list.chopp.map((item, key) => (
          <li key={ key }>
            <button onClick={ () => { getItem(item); setBlur(); } }>
              <div style={ { backgroundImage: `url(${item.img})` } } />
              <p>{ item.name }</p>
            </button>
            <h4>{ item.value }</h4>
          </li>
        ))
      }
      <h3>600ml</h3>
      {
        list.sixHundred.map((item, key) => (
          <li key={ key }>
            <button onClick={ () => { getItem(item); setBlur(); } }>
              <div style={ { backgroundImage: `url(${item.img})` } } />
              <p>{ item.name }</p>
            </button>
            <h4>{ item.value }</h4>
          </li>
        ))
      }
      <h3>Long Neck</h3>
      {
        list.longNeck.map((item, key) => (
          <li key={ key }>
            <button onClick={ () => { getItem(item); setBlur(); } }>
              <div style={ { backgroundImage: `url(${item.img})` } } />
              <p>{ item.name }</p>
            </button>
            <h4>{ item.value }</h4>
          </li>
        ))
      }
    </>
  );
}
