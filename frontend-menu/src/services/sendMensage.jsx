const data = new Date();
const day = String(data.getDate()).padStart(2, '0');
const month = String(data.getMonth() + 1).padStart(2, '0');
const year = data.getFullYear();
const hour = data.getHours();
const minutes = String(data.getMinutes()).padStart(2, '0');

const getObs = (item) => {
  return item.obs !== '' ? `\nObs: ${item.obs}\n` : '';
};

const createTextItem = (item) => {
  return `\n- ${item.amount}_____${item.name.split('-')[1]}`;
};

const getTextFoods = (foods) => {
  return `*Lanches:*${foods.map((item) => createTextItem(item) + getObs(item)).join('')}`;
};

const getTextDrinks = (drink) => {
  return `*Bebidas:*${drink.map((item) => createTextItem(item) + getObs(item)).join('')}`;
};

const getTextAdditional = (additional) => {
  return `*Adicionais:*${additional.map((item) => createTextItem(item)).join('')}`;
};

const getTextOrder = (order) => {
  const { foods, drinks, additional, value } = order;
  const TX = 4;
  const foodsTxt = foods.length > 0 ? `\n${getTextFoods(foods)}` : '';
  const drinksTxt = drinks.length > 0 ? `\n\n${getTextDrinks(drinks)}` : '';
  const additionTxt = additional.length > 0 ? `\n\n${getTextAdditional(additional)}` : '';
  return `
-----------------------------------------------
*Pedido:*
${foodsTxt}${drinksTxt}${additionTxt}
-----------------------------------------------
Pedido: R$${value}
+R$4.00

*Total:* R$${(Number(value) + TX).toFixed(2)}`;
};

const textChange = (clientChange) => {
  return clientChange > 0 ? `\n*Troco para:* ${clientChange}` : '';
};

const getPay = (clientPayment) => {
  return clientPayment.map((payment) => `${payment}, `);
};

const getTextDataClient = (dataClient) => {
  const {
    clientName,
    clientContact,
    clientNeighborhood,
    clientRoad,
    clientNumber,
    clientReference,
    clientPayment,
    clientChange,
  } = dataClient;
  return `*#Big Lanches do TANJIRO*

*Data:* ${day}/${month}/${year} - ${hour}:${minutes}
*Para:* ${clientName}
*Contato:* ${clientContact}
----------------------------------------------
*Endereço:*

*Rua:* ${clientRoad}
*Bairro:* ${clientNeighborhood}
*Numero:* ${clientNumber}
*Referencia:* ${clientReference}
*Forma de pagamento:* ${getPay(clientPayment)}${textChange(clientChange)}`;
};

export const sendMensage = (dataClient, order) => {
  const mensage = `${getTextDataClient(dataClient)}${getTextOrder(order)}`;

  window.open(`https://wa.me/+5531999739177/?text=${encodeURIComponent(mensage)}`);
};
