import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/components/Cards/Cards.jsx";
import Nav from "./components/components/Nav/Nav.jsx";
import About from "./components/components/About/about.jsx";
import Detail from "./components/components/Detail/Detail.jsx";
import Favorites from "./components/components/Favorites/Favorites";
import Error404 from "./components/components/Error404/error404.jsx";
import Form from "./components/components/Form/Form.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  // const email = "lunisj15@gmail.com";
  // const password = "romeo2013";
  // const username = "lunisj15@gmail.com";
  // const password = "romeo2013";

  // const login =(userData) =>{
  //   //console.log(userData)
  //   if(userData.username === username && userData.password === password) {
  //     console.log('si son')
  //     setAccess(true);
  //     navigate('/home');
  //   }
  // };

  async function login(userData) {
    const { username, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login";
    try {
      await axios
        .get(URL + `?username=${username}&password=${password}`)
        .then(({ data }) => {
          const { access } = data;
          setAccess(data);
          access && navigate("/home");
        });
    } catch (error) {
      return error.message;
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const logout = () => {
    if (access === true) {
      setAccess(false);
      navigate("/");
    }
  };

  async function onSearch(id) {
    //console.log(id)
    //fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    try {
     const response = (await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)).data
        //.then((response) => response.json())
       // .then(({ data }) => {
          //console.log(response)
          if (response.name) {
            characters.find((chart) => chart.id === response.id) === undefined
              ? setCharacters((oldChars) => [...oldChars, response])
              : alert("No se puede mostrar personajes repetidos");
          } else {
            window.alert("No hay personajes con ese ID");
          }
       // });
    } catch (error) {
      return error.message;
    }
  }

  const onClose = (id) => {
    //console.log(character)
    const filtrado = characters.filter((char) => char.id !== id);
    setCharacters(filtrado);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
