function addItem(item, list, { counterRequestAmount, counterItens }) {
  let amout;
  const newList = list.map((ite) => {
    if (ite.id === item.id) {
      if (ite.amount === 0) counterRequestAmount(counterItens + 1);
      ite.amount += 1;
    }
    amout = ite.amount;
    return ite;
  });

  return {
    newList,
    amout,
  };
}

function rmItem(item, list, { counterRequestAmount, counterItens }) {
  let amout;
  const newList = list.map((ite) => {
    if (ite.id === item.id && ite.amount > 0) {
      ite.amount -= 1;
      amout = ite.amount;
      if (ite.amount === 0) counterRequestAmount(counterItens - 1);
    }
    return ite;
  });

  return {
    newList,
    amout,
  };
}

export {
  addItem,
  rmItem,
};
