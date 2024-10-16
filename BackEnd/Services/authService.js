import {findByEmail, create} from "../Repositories/userRepository.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs"


export const register = async (userData) => {

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

export const login = async (email, password) => {
    try {
        const user = await findByEmail(email);
        const verified = await bcrypt.compare(password, user.password);
        

        if (!user) {
            throw new Error('User not found');
        }

        if (!verified) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ 
                                id: user._id,
                                role: user.role 
                                }, 
                                process.env.JWT_ACCESS, 
                                { expiresIn: '1h' });
        return { token, user };

    } catch (error) {
        console.error('Error login user:', error);
        throw new Error('Error login user:' +  error.message);
    }
    
}
