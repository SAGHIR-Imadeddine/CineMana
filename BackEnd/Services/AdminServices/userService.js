import * as UserRepo from "../../Repositories/userRepository.js";
import bcrypt from "bcryptjs";


export const registerAdmin = async (userData) => {

    try {
        const exists = await UserRepo.findByEmail(userData.email);

        if (!exists){
            const salt = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(userData.password, salt);
            return UserRepo.create(userData);
        }
        throw new Error('email already exists!')

    } catch (error) {
        console.error('Error registring admin:', error);
        throw new Error('Error registring admin');
    }
}

export const updateAdmin = async (id, userData) => {

    try {
        const user = await UserRepo.findById(id);
        if (!user) throw new Error('Admin not found!');
        if (user.role !== 'admin') throw new Error('User is not an Admin'); 

        return UserRepo.update(id, userData);

    } catch (error) {
        console.error('Error updating admin:', error);
        throw new Error('Error updating admin');
    }
}

export const deleteAdmin = async (id) => {
    try {
        const user = await UserRepo.findById(id);
        if(!user) throw new Error('Admin not found!');
        user.deletedAt = new Date();
        return user;
    } catch (error) {
        console.error('Error updating admin:', error);
        throw new Error('Error updating admin');
    }
}

export const getUserById = async (id) => {
    try {
        const user = await UserRepo.findById(id);
        if(!user) throw new Error('User not found!');
        return user;
    } catch (error) {
        console.error('Error finding user:', error);
        throw new Error('Error finding user');
    }
}