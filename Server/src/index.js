// const PORT = 3001;
// const server = require("./app");
// const { conn } = require("./DB_connection");

// conn
//   .sync({ force: true })
//   .then(() => {
//     server.listen(PORT, () => {
//       console.log("Server raised in port: " + PORT);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });



const express = require("express"); 
const morgan = require("morgan");
const server = express();
const {getCharById} = require("./controllers/getCharById")

const router = require("./routes/index")

const PORT = 3001;

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//server.use("/", router);
server.use("/rickandmorty", router);
server.use(morgan("dev"));

        


server.listen(PORT, ()=>{
    console.log('Server raised in port: ' + PORT);
});


// module.exports = {server};











/*--------------------web server---------------- */

// const http = require("http");
// //const data = require("./utils/data")
// const getCharById = require("./controllers/getCharById.js")

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const { url } = req;

//     // if(url.includes("/rickandmorty/character")){
//     //     const id = Number(url.split("/").at(-1));
//     //     const character = data.find((char)=> char.id === id);
//     //     if(character){
//     //     res.writeHead(200, {"Content-type": "application/json"})
//     //     res.end(JSON.stringify(character))
//     //     } else {
//     //         res.writeHead(404, { "Content-type": "application/json" });
//     //     return res.end(JSON.stringify({ error: "Character not found" }));

//     //     }
//     //}  

//     if(url.includes("/rickandmorty/character")){
//         const id = url.split("/").at(-1);
//         //const character = getCharById.find((char)=> char.id === id);
//         getCharById(res, id)//{
//         // res.writeHead(200, {"Content-type": "application/json"})
//         // res.end(JSON.stringify(character))
//         // } else {
//         //     res.writeHead(404, { "Content-type": "application/json" });
//         // return res.end(JSON.stringify({ error: "Character not found" }));

//         //}
//     }
// }).listen(3001, "localhost")