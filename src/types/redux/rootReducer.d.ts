import RootReducer from '@Redux/rootReducer';

export {};
declare global {
	namespace types {
		namespace redux {
			type rootReducer = ReturnType<typeof RootReducer>;
		}
	}
}
