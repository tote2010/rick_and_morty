

let myFavorites = [];

function postFav (req, res){

    const favorito = req.body;
    try {
        myFavorites.push(favorito);

        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};

function deleteFav (req, res){
    const { id } = req.params;

    try {
        myFavorites = myFavorites.filter(fav => fav.id !== Number(id));
        return res.status(200).json(myFavorites);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};



module.exports = {
    postFav,
    deleteFav
}