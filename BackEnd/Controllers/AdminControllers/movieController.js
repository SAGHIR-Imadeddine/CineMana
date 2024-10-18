import * as MovieService from "../../Services/AdminServices/movieService.js";

const addMovie = async (req, res) =>{
    const {title, description, release, duration, imdb, genre, ageLimit, media} = req.body;

    if(!title || !description || !release || !duration || !imdb || !genre || !ageLimit || !media) return res.status(400).json({message : 'All Fields must be filled...'});
    
    

}

const updateMovie = async (req, res) =>{

}

const deleteMovie = async (req, res) =>{

}
