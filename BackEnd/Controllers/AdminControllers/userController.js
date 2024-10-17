import { registerAdmin } from "../../Services/AdminServices/userService";
import { login } from "../../Services/authService.js";


export const registerAdmin = async (req, res) => {
    const {name, familyName, age, gender, image, email, password} = req.body;

    if (!name || !familyName || !age || !gender || !image || !email || !password) return res.status(400).json({message : 'All Fields must be filled...'});
    
    const userData = {
        name        : name,
        familyName  : familyName,
        age         : age,
        image       : image,
        email       : email,
        password    : password,
        role        : 'admin'
    }; 
    try {
        const user  = await registerAdmin(userData);
        const { token } = await login(user.email, password);

        return res.header('Authorization', `Bearer ${token}`)
                  .status(201)
                  .json({ message: 'User registered and logged in', user });
    } catch (error) {

        const statusCode = error.message.includes('User already exists') ? 400 : 500;
        return res.status(statusCode).json({ message: error.message });
    }
}