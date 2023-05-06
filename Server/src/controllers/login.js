const users = require("../utils/users")

const login = (req, res)=>{
    const { username, password } = req.query;
        const inf = users.find(user => user.username === username && user.password === password);
        if(inf){
            res.status(200).json({access: true})
        } else {
            res.status(400).json({access: false})
        }
    
};

module.exports = { login };

// const users = require("../utils/users")

// const login = (req, res)=>{
//     const { username, password } = req.query;
//         const inf = users.find(user => user.username === username && user.password === password);
//         if(inf){
//             res.status(200).json({access: true})
//         } else {
//             res.status(400).json({access: false})
//         }
    
// };

// module.exports = { login };