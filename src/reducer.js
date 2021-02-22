import produce from "immer";

export const initialState ={
    basket: [],
    user: null
};

export const reducer = (state=initialState,action) => {

    console.log(state)
    switch(action.type){
        case "SET_USER" : return {...state, user: action.payload}
        case "ADD_TO_BASKET": return {...state,basket: [...state.basket,action.payload]};
        case "UPDATE_BASKET": return produce(state,draftState =>{
            draftState.basket.forEach(item => {
                if (item.id === action.payload.id)
                item.quantity = action.payload.quantity;
            })
        })
        case "REMOVE_FROM_BASKET" : return {...state,basket: [...state.basket.filter(v => v.id!==action.payload)]};
        default : return state;
    }

}