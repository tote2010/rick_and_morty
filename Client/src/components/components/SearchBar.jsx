import React, { useState } from "react";
import styled from "styled-components";

const StyleInput = styled.input`
   margin-right: 5px;
   border-radius: 5px;
`
const Boton = styled.button`
   background-color: red;
   color: black;
   border-radius: 5px;
   font-weight: bold;
   font-size: 13px;
   padding: 5px;
   margin: 2px;
`

export default function SearchBar(props) {
   //console.log(props)
   const [id, setId] = useState("")
   
   const InputChange = (event) => {
     // const value = event.target;
      setId(event.target.value)
   }
   
   const handleRandom = ()=>{
      props.onSearch(Math.floor(Math.random() * 826) + 1);
      setId("");
   }

   return (
      //style={{ padding: "5px", border: "solid white", borderRadius: "20px 0px", alignContent: "center" }}
      <div >  
         <div style={{display: "grid", justifyContent: "flex-end", alignSelf: "center" }}>
         <StyleInput type='text' onChange={InputChange}/>
         <Boton onClick={()=> props.onSearch(id)} >Agregar</Boton>
         <Boton onClick={() => handleRandom (id)}>Random</Boton>
         </div>
         <img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png" alt="Rick" width="450px" align-self= "center" /> 
      </div>
   );
}
