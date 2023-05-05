import axios from "axios";
export const ADD_FAV = "ADD_FAV";
//export const postFav = "postFav"
export const REMOVE_FAV = "REMOVE_FAV";
//export const deleteFav = "deleteFav";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

// const favoritos = (character) => {
//     return {
//         // type: ADD_FAV,
//         type: postFav,
//         payload: character
//     }
// }
// export const addFav = (character) => {
export  function favoritos(character) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character) 
        return dispatch({
          type: "ADD_FAV",
          payload: response.data,
        });
    } catch (error) {
      return error.message
    }
  };
};

// const remove = (id) => {
//     return {
//         //type: REMOVE_FAV,
//         type: deleteFav,
//         payload: id
//     }
// }
export const remove = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint)
        return dispatch({
          type: "REMOVE_FAV",
          payload: response.data,
        });
    } catch (error) {
      return error.message
    }
  };
};

const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

export { filterCards, orderCards };
