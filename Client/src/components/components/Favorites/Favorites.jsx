import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../../redux/action";
import style from "./Favorites.module.css";


 function Favorites (){
    //const selector= useSelector();
    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
  
    //console.log(favorites);
  
    const handlerOrder = (event) => {
      dispatch(orderCards(event.target.value));
    };
  
    const handlerFilter = (event) => {
      dispatch(filterCards(event.target.value));
    };
  
     return ( 
         <div className={style.contains}> 
            <select onChange={handlerOrder}>
                {["Ascendente", "Descendente"].map((e, i) => <option value={e} key={i}>{e}</option>)}
            </select>
            <select onChange={handlerFilter}>
                {['Male', 'Female', 'unknown', 'Genderless'].map((e, i) => <option value={e} key={i}>{e}</option>)}
            </select>
            <div>
            {favorites.map(fav =>
            <Card 
            id= {fav.id}
            key = {fav.name}
            name = {fav.name}
            species = {fav.species}
            gender = {fav.gender}
            image = {fav.image}
            />
            )}
         </div>
        
        </div>
    )
}


 const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);