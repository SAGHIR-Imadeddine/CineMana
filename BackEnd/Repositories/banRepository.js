import { BanModel } from "../Models/banSchema.js";

export const create = async (banData) => {

    try {
        const banInstance = new BanModel(banData);

        return await banInstance.save();
    } catch (error) {
        console.error('Error creating ban:', error);
        throw new Error('Error creating ban');
    }
}

export const findById = async (id) => {

    try {
        return await BanModel.findById(id);
    } catch (error) {
        console.error('Error finding ban:', error);
        throw new Error('Error finding ban');
    }
}

export const findAll = async () => {

    try {
        return await BanModel.find();
    } catch (error) {
        console.error('Error fetching bans:', error);
        throw new Error('Error fetching bans');
    }
}

export const update = async (id, banData) => {

    try {
        return await BanModel.findByIdAndUpdate(id, banData, { new: true });
    } catch (error) {
        console.error('Error updating ban:', error);
        throw new Error('Error updating ban');
    }
}

export const hardDelete = async (id) => {

    try {
        return await BanModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error deleting ban:', error);
        throw new Error('Error deleting ban');
    }   
}

export const countUserBans = async (userId) => {
    try {
        return await BanModel.find({user : userId}).count();
    } catch (error) {
        console.error('Error finding user:', error);
        throw new Error('Error finding user');
    }
}
