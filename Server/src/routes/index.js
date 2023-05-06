const express = require("express");
const {
  getCharById,
  login,
  postFav,
  deleteFav,
  postUser
} = require("../controllers/index");
const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.post("/login", postUser );

module.exports = router;


// const express = require("express");
// const router = express.Router();

// const { getCharById } = require("../controllers/getCharById");
// const { login } = require("../controllers/login");
// const { postFav, deleteFav } = require("../controllers/handleFavorites")

 
// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);





// module.exports =  router ;