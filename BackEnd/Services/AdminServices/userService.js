import {findByEmail, create} from "../Repositories/userRepository.js";
import bcrypt from "bcryptjs";


export const registerAdmin = async (userData) => {

    try {
        const exists = await findByEmail(userData.email);

        if (!exists){
            const salt = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(userData.password, salt);
            return create(userData);
        }
        throw new Error('email already exists!')

    } catch (error) {
        console.error('Error registring user:', error);
        throw new Error('Error registring user');
    }
}