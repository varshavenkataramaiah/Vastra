const storedUsers = JSON.parse(localStorage.getItem('vastraUsers') || '[]');
const storedCurrentUser = JSON.parse(localStorage.getItem('vastraCurrentUser') || 'null');

const initialState = {
	users: storedUsers,
	currentUser: storedCurrentUser,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REGISTER_USER': {
			const users = [...state.users, action.payload];
			localStorage.setItem('vastraUsers', JSON.stringify(users));
			return { ...state, users };
		}
		case 'LOGIN_USER': {
			localStorage.setItem('vastraCurrentUser', JSON.stringify(action.payload));
			return { ...state, currentUser: action.payload };
		}
		case 'SET_CURRENT_USER': {
			localStorage.setItem('vastraCurrentUser', JSON.stringify(action.payload));
			return { ...state, currentUser: action.payload };
		}
		case 'UPDATE_PROFILE': {
			const users = state.users.map((user) =>
				user.email === state.currentUser.email ? { ...user, ...action.payload } : user
			);
			const currentUser = { ...state.currentUser, ...action.payload };
			localStorage.setItem('vastraUsers', JSON.stringify(users));
			localStorage.setItem('vastraCurrentUser', JSON.stringify(currentUser));
			return { ...state, users, currentUser };
		}
		case 'LOGOUT_USER':
			localStorage.removeItem('vastraCurrentUser');
			localStorage.removeItem('vastraToken');
			return { ...state, currentUser: null };
		default:
			return state;
	}
};
