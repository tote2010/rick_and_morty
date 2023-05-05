const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}`);
    if (response.data) {
    const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        origin: data.origin?.name,
        image: data.image,
      };
      res.status(200).json(character);
    } else {
      res.status(404).json("Not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
}

// const getCharById = (req, res)=> {
// const { id } = req.params;
// try{
// axios.get(`${URL}${id}`)
// .then(({data}) => {
// if(data){
// const character = {
// id: data.id,
// name: data.name,
// status: data.status,
// species: data.species,
// gender: data.gender,
// origin: data.origin?.name,
// image: data.image,
// };
// res.status(200).json(character);
// } else {
// res.status(404).json("Not found")
// }
// });
// } catch (error){
// // res.status(500).json( {error: "Error en el servidor"})
// }
// };

module.exports = { getCharById };

/* ------------------ web server con axios ---------------- */

// const axios = require("axios");

// function getCharById (res, id){
//         axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 status: data.status,
//                 species: data.species,
//                 gender: data.gender,
//                 origin: data.origin?.name,
//                 image: data.image,
//             }
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.end(JSON.stringify(character))
//         })
//         .catch((error) => res.writeHead(500, {"Content-Type": "text/plain"}).end({error:`Personaje con ese id ${id} no encontrado`}))
// };

// module.exports = {
//     getCharById
// }
