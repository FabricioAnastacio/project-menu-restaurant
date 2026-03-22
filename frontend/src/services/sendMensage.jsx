const data = new Date().toJSON().split('T')[0].split('-');
const hour = new Date().getHours();
const minutes = new Date().getMinutes();

export const sendMensage = (dataClient, order) => {
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
  const { foods, drinks, additional, value } = order;
  const TX = 4;
  const mensage = `*#Big Lanches do TANJIRO*

*Data:* ${data[2]}/${data[1]}/${data[0]} - ${hour}:${minutes}
*Para:* ${clientName}
*Contato:* ${clientContact}
----------------------------------------------
*Endereço:*

*Rua:* ${clientRoad}
*Bairro:* ${clientNeighborhood}
*Numero:* ${clientNumber}
*Referencia:* ${clientReference}
*Forma de pagamento:* ${clientPayment.map((payment) => `${payment}, `)}
*Troco para:* ${clientPayment.includes('Dinheiro') ? clientChange : 0}
      
-----------------------------------------------
*Pedido:*

*Lanches:*
${foods.map((item) => `- ${item.amount}_____${item.name.split('-')[1]}
${item.obs !== '' ? `Observação: ${item.obs}\n` : ''}
`).join('')}
*Bebidas:*
${drinks.map((item) => `- ${item.amount}_____${item.name.split('-')[1]}
${item.obs !== '' ? `Observação: ${item.obs}\n` : ''}
`).join('')}
*Adicionais:*
${additional.map((item) => `- ${item.amount}_____${item.name.split('-')[1]}\n`).join('')}
-----------------------------------------------
Pedido: R$${value}
+R$4.00

*Total:* R$${(Number(value) + TX).toFixed(2)}
`;

  window.open(`https://wa.me/+5531999739177/?text=${encodeURIComponent(mensage)}`);
};
