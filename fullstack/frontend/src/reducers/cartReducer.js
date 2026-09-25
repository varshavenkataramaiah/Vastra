const initialState = {
	items: [],
};

const isSameProduct = (firstProduct, secondProduct) =>
	firstProduct.id === secondProduct.id && firstProduct.image === secondProduct.image;

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CART':
			return { items: action.payload || [] };
		case 'ADD_TO_CART': {
			const existingItem = state.items.find((item) => isSameProduct(item, action.payload));

			if (existingItem) {
				return {
					...state,
					items: state.items.map((item) =>
						isSameProduct(item, action.payload)
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}

			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }],
			};
		}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				items: state.items.filter((item) => !isSameProduct(item, action.payload)),
			};
		case 'UPDATE_CART_QUANTITY':
			return {
				...state,
				items: state.items
					.map((item) =>
						isSameProduct(item, action.payload)
							? { ...item, quantity: Math.max(1, action.payload.quantity) }
							: item
					),
			};
		case 'CLEAR_CART':
			return initialState;
		default:
			return state;
	}
};
