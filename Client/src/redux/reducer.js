import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET} from "./action";

const  initialState = {
    myFavorites: [],
    allCharacter: [],
}

export default function MyFavorites (state = initialState, {type, payload}){
    switch(type){
        // case postFav:
        //     const addFav = [...state.allCharacter, action.action.payload]
        //     return{
        //         ...state,
        //         myFavorites:[...addFav],
        //         allCharacter:[...addFav],
        //     }
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload };

        // case deleteFav:
        //     const deleteFav = state.allCharacter.filter(e => e.id !== action.action.payload)
        //     return {
        //         ...state,
        //         myFavorites: [...deleteFav],
        //         allCharacter: [...deleteFav]
        //     }
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: payload 
            };

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacter.filter((filt) => filt.gender === payload)
            }
        case ORDER:
            let ordFav;
                if(payload === "Ascendente"){
                    ordFav = state.myFavorites.sort((a,b) => a.id > b.id ? 1 : -1);
                } else {
                    ordFav = state.myFavorites.sort((a,b) => a.id < b.id ? 1 : -1);
                }
                return {
                    ...state,
                    myFavorites: [...ordFav]
                }
                case RESET:
                    return{
                        ...state,
                        myFavorites: state.allCharacter,
                    }
            default:
            return {
                ...state,
            }
    }
}

