import /*React,*/ {createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : []
}
// Create Context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props)=>{
    const [state, dispatch]=useReducer(
        AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    }, [state]);

    //actions
    const addCoinToWatchlist = (coin)=>{
        dispatch({type: "ADD_COIN_TO_WATCHLIST", payload: coin});
    };
    const removeCoinFromWatchlist = (id)=>{
        dispatch({ type: "REMOVE_COIN_FROM_WATCHLIST", payload: id });
    }

    return(
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                addCoinToWatchlist,
                removeCoinFromWatchlist,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
