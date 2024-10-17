import { MovieModel } from "../Models/movieSchema";

export const create = async (movieData) => {

    try {
        const movieInstance = new MovieModel(movieData);

        return await movieInstance.save();
    } catch (error) {
        console.error('Error creating movie:', error);
        throw new Error('Error creating movie');
    }
}

export const findById = async (id) => {

    try {
        return await MovieModel.findById(id);
    } catch (error) {
        console.error('Error finding movie:', error);
        throw new Error('Error finding movie');
    }
}

export const findAll = async () => {

    try {
        return await MovieModel.find();
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw new Error('Error fetching movies');
    }
}

export const update = async (id, movieData) => {

    try {
        return await MovieModel.findByIdAndUpdate(id, movieData, { new: true });
    } catch (error) {
        console.error('Error updating movie:', error);
        throw new Error('Error updating movie');
    }
}

export const hardDelete = async (id) => {

    try {
        return await MovieModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error deleting movie:', error);
        throw new Error('Error deleting movie');
    }   
}


