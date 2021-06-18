const order = {
	name: 'Rafael Andrade',
	phoneNumber: '11-98763-1416',
	address: {
		street: 'Rua das Flores',
		number: '389',
		apartment: '701',
	},
	order: {
		pizza: {
			margherita: {
				amount: 1,
				price: 25,
			},
			pepperoni: {
				amount: 1,
				price: 20,
			},
		},
		drinks: {
			coke: {
				type: 'Coca-Cola Zero',
				price: 10,
				amount: 1,
			},
		},
		delivery: {
			deliveryPerson: 'Ana Silveira',
			price: 5,
		},
	},
	payment: {
		total: 60,
	},
};

const customerInfo = (order) => {
	// Adicione abaixo as informações necessárias.
	return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`;
};

customerInfo(order);

const orderModifier = (order) => {
	// Adicione abaixo as informações necessárias.
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  order.name = 'Luiz Silva';
  order.order.pizza.margherita = 'muzzarella';
  order.order.pizza.pepperoni = 'calabresa';
  order.payment.total = 50;

  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$${order.payment.total},00.`;
};

orderModifier(order);
