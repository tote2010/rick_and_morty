import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { favoritos, remove } from "../../../redux/action"
import { useState, useEffect } from "react";

const DivCar = styled.div`
   display: inline-block;
   border: outset;
   border-radius: 30px ;
   overflow: hidden;
   margin: 25px;
   background-color: rgba(169, 219, 226, 0.8);
   height: 5%;
   /* background-color: white; */
   &:hover {
      background-color: beige;
      transform: translateY(-15px);
      -moz-box-shadow: 13px 13px 11px -1px rgba(232,225,232,0.84);
      box-shadow: 13px 13px 11px -1px rgba(232,225,232,0.84);
   }

   `

const Button = styled.button`
   position: relative;
   right: -110px;
   border-radius: 20px;
   background-color: black;
   color: white;
`
const BotonFav = styled.button`
   position: relative;
   left: -110px;
   margin: 5px;
   border: none;
   background: none;
`

function Card(props) {
   //console.log("props")
   const [isFav, setIsFav] = useState(false);
  // const { id, favoritos, remove, myFavorites } = props 

   //const lengthName = props.name.length < 15? props.name : print(/tprops.name /nprops.name);
   

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         props.remove(props.id)
      } else {
         props.favoritos(props)
      }
   }
   
   useEffect(() => {
      //const fav = props.myFavorites
     // for (let i = 0; i < fav; i++){
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props]);

   return (
      <DivCar>
      {
         isFav ? (
            <BotonFav onClick={handleFavorite}>❤️</BotonFav>
            ) : (
               <BotonFav onClick={handleFavorite}>🤍</BotonFav>
               )
            }
      <Button onClick={props.onClose}>X</Button>
         <h2>{props.id}</h2>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         <img  src={props.image} alt="imag not found"/>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
   </Link>
      </DivCar>
   );
}

const mapDispatchToProps = (dispatch) => {
      return {
         favoritos:(character)=>{ 
            dispatch(favoritos(character))},
         remove:(id)=>{ 
            dispatch(remove(id))}
      }
}

const mapStateToProps = (state) => {
      return {
         myFavorites: state.myFavorites
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)