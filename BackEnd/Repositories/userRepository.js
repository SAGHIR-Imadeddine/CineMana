import { UserModel } from "../Models/userSchema.js";

export const create = async (userData) => {

    try {
        const userInstance = new UserModel(userData);

        return await userInstance.save();
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
    }
}

export const findById = async (id) => {

    try {
        return await UserModel.findById(id);
    } catch (error) {
        console.error('Error finding user:', error);
        throw new Error('Error finding user');
    }
}

export const findByEmail = async (email) => {
    
    try {
        return await UserModel.findOne({email : email});
    } catch (error) {
        console.error('Error finding user:', error);
        throw new Error('Error finding user');
    }
}

export const findAll = async () => {

    try {
        return await UserModel.find();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users');
    }
}

export const update = async (id, userData) => {

    try {
        return await UserModel.findByIdAndUpdate(id, userData, { new: true });
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Error updating user');
    }
}

export const hardDelete = async (id) => {

    try {
        return await UserModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Error deleting user');
    }   
}
