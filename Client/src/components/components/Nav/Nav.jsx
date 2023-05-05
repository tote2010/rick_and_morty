import React from "react";
import { Link } from "react-router-dom";
import About from "../About/about";
import SearchBar from "../SearchBar";
import styles from "./Nav.module.css"
import Favorites from "../Favorites/Favorites";
import styled from "styled-components";

const Boton = styled.button`
   display: inline-block;
    margin: 15px 32px;
    color: #4805ff;
    background-color:  #d7ee82;
    justify-content: space-between;
    border-radius: 10px;
    font-weight: bold;
    padding: 10px; 
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
   `
   export default function Nav (props){
    //console.log(props)
      const handleLogOut = (event) => {
         event.preventDefault()
            props.logout()
      }
      
      return (
         <div>
            <Link to="/" element={<SearchBar/>}/> 
            <Link to="/home" className={styles.linkAbout}>Home</Link>
            <Link to="/about" element={<About/>} className={styles.linkAbout}>About</Link>
            <Link to="/favorites" element={<Favorites/>} className={styles.linkAbout}>Favoritos</Link>
            <Boton type="submit" onClick={handleLogOut}>Logout</Boton>

      <SearchBar
         onSearch={(characterID)=>props.onSearch(characterID)}
      />
      </div>
   )
}