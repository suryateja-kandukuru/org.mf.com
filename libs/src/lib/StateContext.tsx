
/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from 'react';



const initialState = {
		count: 0
};

const reducer = (state: any , action: any ) => {
	switch (action.type) {
		case 'INCREMENT_COUNT': {
      console.log('state', state);
			return {
				...state,
				count: state.count + 1
			};
		}

		default:
			return state;
	}
};

const AppContext = createContext({
	state: initialState,
	// eslint-disable-next-line no-empty-pattern
	dispatch: ({}: Record<any, unknown>) => null,
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);


	const contextValue = {
		state,
		dispatch
	};

	return <AppContext.Provider value={contextValue as any}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
	const context = React.useContext(AppContext);

	if (context === undefined) {
		throw new Error('useAppContext must be used within a AppContextProvider');
	}

	return context;
};

export { AppContext, AppContextProvider, useAppContext };
