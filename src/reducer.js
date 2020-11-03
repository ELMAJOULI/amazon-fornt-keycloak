
export const initialState ={
    basket: [],
    user: null
};

export const reducer = (state,action) => {

    switch(action.type){
        case "SET_USER" : return {...state, user: action.payload}
        case "ADD_TO_BASKET": return {...state,basket: [...state.basket,action.payload]};
        case "REMOVE_FROM_BASKET" : return {...state,basket: [...state.basket.filter(v => v.id!==action.payload)]};
        default : return state;
    }

}