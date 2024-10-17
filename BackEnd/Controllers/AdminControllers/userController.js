import * as UserService from "../../Services/AdminServices/userService.js";
import { login } from "../../Services/authService.js";


export const registerAdmin = async (req, res) => {
    const {name, familyName, age, gender, image, email, password} = req.body;

    if (!name || !familyName || !age || !gender || !image || !email || !password) return res.status(400).json({message : 'All Fields must be filled...'});
    
    const userData = {
        name        : name,
        familyName  : familyName,
        age         : age,
        gender      : gender,
        image       : image,
        email       : email,
        password    : password,
        role        : 'admin'
    }; 
    try {
        const user  = await UserService.registerAdmin(userData);
        const { token } = await login(user.email, password);

        return res.header('Authorization', `Bearer ${token}`)
                  .status(201)
                  .json({ message: 'Admin registered and logged in', user });
    } catch (error) {

        const statusCode = error.message.includes('Admin already exists') ? 400 : 500;
        return res.status(statusCode).json({ message: error.message });
    }
}

export const updateAdmin = async (req, res) => {
    const {id} = req.params
    const {name, familyName, age, gender, image, email, password, createdBy} = req.body;

    if (!name || !familyName || !age || !gender || !image || !email || !password) return res.status(400).json({message : 'All Fields must be filled...'});
    
    const userData = {
        name        : name,
        familyName  : familyName,
        age         : age,
        gender      : gender,
        image       : image,
        email       : email,
        password    : password,
        role        : 'admin',
        createdBy   : createdBy
    }; 
    try {
        const user = await UserService.updateAdmin(id, userData);
        return res.status(200).json({ message: 'Admin updated successfully', user });
        
    } catch (error) {
        
    }
}