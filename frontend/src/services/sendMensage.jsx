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

  const { foods, drinks, value } = order;

  const mensage = `*#Novo Pedido*

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
${foods.map((item) => `- ${item.amount}_____${item.name}\n`).join('')}

*Bebidas:*
${drinks.map((item) => `- ${item.amount}_____${item.name}\n`).join('')}

*Total:* ${value}
`;

  window.open(`https://wa.me/+5531997466373/?text=${encodeURIComponent(mensage)}`);
};
