export type Category = {
	id: string;
	name: string;
	icon: string;
	description: string;
};

export type ProductVariant = {
	id: string;
	label: string;
	price: number;
};

export type Product = {
	id: string;
	categoryId: string;
	name: string;
	description: string;
	price?: number;
	variants?: ProductVariant[];
	badge?: string;
	tag: string;
	scene: 'pizza' | 'empanada' | 'burger';
	palette: [string, string, string];
	highlights: string[];
};

export const business = {
	name: 'Pizzeria',
	displayName: 'Pizzeria 🍕',
	tagline: 'Pedidos rapidos para compartir',
	headline: 'Las mejores pizzas para compartir',
	description:
		'Una carta corta, clara y tentadora para pedir rapido desde el celu y cerrar el pedido por WhatsApp sin vueltas.',
	whatsappNumber: '5493519102030',
	whatsappDisplay: '+54 9 351 910-2030',
	whatsappUrl:
		'https://wa.me/5493519102030?text=Hola%20Pizzeria%2C%20quiero%20hacer%20un%20pedido.',
	address: 'Jose Ahumada 611, Cordoba Capital',
	location: 'Cordoba Capital',
	hours: 'Todos los dias de 19:00 a 00:30',
	phone: '351 910-2030',
	service: 'Retiro en el local',
	instagram: '@pizzeria.cba',
	facebook: '/pizzeria.cba',
};

export const categories: Category[] = [
	{
		id: 'pizzas',
		name: 'Pizzas',
		icon: '🍕',
		description: 'Las clasicas del horno, con tamaño a eleccion.',
	},
	{
		id: 'empanadas',
		name: 'Empanadas',
		icon: '🥟',
		description: 'Para sumar por unidad y completar el pedido.',
	},
	{
		id: 'hamburguesas',
		name: 'Hamburguesas',
		icon: '🍔',
		description: 'Opciones contundentes para los que quieren otra cosa.',
	},
];

export const products: Product[] = [
	{
		id: 'muzarella',
		categoryId: 'pizzas',
		name: 'Muzarella',
		description: 'Salsa de tomate casera, queso bien fundido, oregano y oliva.',
		variants: [
			{ id: 'chica', label: 'Chica', price: 8600 },
			{ id: 'grande', label: 'Grande', price: 12800 },
		],
		badge: 'Popular',
		tag: 'Clasica',
		scene: 'pizza',
		palette: ['#f97316', '#facc15', '#ef4444'],
		highlights: ['Queso extra', 'Lista en 20 min', '8 porciones'],
	},
	{
		id: 'napolitana',
		categoryId: 'pizzas',
		name: 'Napolitana',
		description: 'Rodajas de tomate fresco, ajo suave, muzarella y pesto casero.',
		variants: [
			{ id: 'chica', label: 'Chica', price: 9200 },
			{ id: 'grande', label: 'Grande', price: 13700 },
		],
		badge: 'Recomendada',
		tag: 'Horno',
		scene: 'pizza',
		palette: ['#fb7185', '#f97316', '#fef08a'],
		highlights: ['Tomate fresco', 'Muy pedida', 'Ideal para compartir'],
	},
	{
		id: 'fugazzeta',
		categoryId: 'pizzas',
		name: 'Fugazzeta',
		description: 'Cebolla dorada, muzarella abundante y un toque de parmesano.',
		variants: [
			{ id: 'chica', label: 'Chica', price: 9500 },
			{ id: 'grande', label: 'Grande', price: 14200 },
		],
		tag: 'Bien cargada',
		scene: 'pizza',
		palette: ['#facc15', '#fb7185', '#f97316'],
		highlights: ['Cebolla dulce', 'Masa aireada', 'Sale fuerte'],
	},
	{
		id: 'empanada-carne',
		categoryId: 'empanadas',
		name: 'Carne',
		description: 'Carne cortada a cuchillo, cebolla, morron y especias suaves.',
		price: 1500,
		badge: 'Mas pedida',
		tag: 'Clasica',
		scene: 'empanada',
		palette: ['#fb923c', '#f59e0b', '#ef4444'],
		highlights: ['Horneadas', 'Repulgue casero', 'Por unidad'],
	},
	{
		id: 'empanada-pollo',
		categoryId: 'empanadas',
		name: 'Pollo',
		description: 'Pollo desmenuzado con cebolla, verdeo y toque cremoso.',
		price: 1450,
		tag: 'Suave',
		scene: 'empanada',
		palette: ['#f97316', '#fde68a', '#fb7185'],
		highlights: ['Jugosa', 'Liviana', 'Sale rapido'],
	},
	{
		id: 'empanada-jamon-queso',
		categoryId: 'empanadas',
		name: 'Jamon y queso',
		description: 'Jamon cocido, muzarella y un centro bien cremoso.',
		price: 1550,
		tag: 'Cheese lover',
		scene: 'empanada',
		palette: ['#fb7185', '#fde68a', '#f97316'],
		highlights: ['Bien rellena', 'Favorita kids', 'Dorada'],
	},
	{
		id: 'empanada-verdura',
		categoryId: 'empanadas',
		name: 'Verdura',
		description: 'Acelga salteada, salsa blanca suave y mix de quesos.',
		price: 1400,
		tag: 'Vegetariana',
		scene: 'empanada',
		palette: ['#84cc16', '#facc15', '#22c55e'],
		highlights: ['Cremosa', 'Sin carne', 'Muy fresca'],
	},
	{
		id: 'hamburguesa-simple',
		categoryId: 'hamburguesas',
		name: 'Simple',
		description: 'Medallon casero, cheddar, ketchup y papas crocantes.',
		price: 8900,
		tag: 'Clasica',
		scene: 'burger',
		palette: ['#f59e0b', '#ef4444', '#fde68a'],
		highlights: ['Con papas', 'Pan brioche', 'Sale al momento'],
	},
	{
		id: 'hamburguesa-completa',
		categoryId: 'hamburguesas',
		name: 'Completa',
		description: 'Doble cheddar, panceta, cebolla crispy, lechuga y tomate.',
		price: 10900,
		badge: 'Power',
		tag: 'Bien completa',
		scene: 'burger',
		palette: ['#f97316', '#ef4444', '#facc15'],
		highlights: ['Doble queso', 'Panceta', 'Con papas'],
	},
];

export const promoOfDay = {
	title: 'Promo del dia',
	description: '2 pizzas grandes + 6 empanadas para resolver la noche en un solo pedido.',
	priceLabel: '$ 33.900',
	includes: ['2 pizzas grandes a eleccion', '6 empanadas combinadas', 'Pedido listo para WhatsApp'],
};

export const localDetails = [
	{
		label: 'Direccion',
		value: business.address,
		description: 'Retiro agil y facil de ubicar.',
	},
	{
		label: 'Horarios',
		value: business.hours,
		description: 'Cocina encendida todas las noches.',
	},
	{
		label: 'Telefono',
		value: business.phone,
		description: 'Tambien podes consultar por llamada.',
	},
	{
		label: 'Modalidad',
		value: business.service,
		description: 'Pedido simple para pasar a buscar.',
	},
];
