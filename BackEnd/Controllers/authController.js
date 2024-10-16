import * as AuthService from "../Services/authService.js";

export const register = async (req, res) => {
    const {name, familyName, age, gender, image, email, password} = req.body;

    if (!name || !familyName || !age || !gender || !image || !email || !password) return res.status(400).json({message : 'All Fields must be filled...'});
    
    const userData = {
        name        : name,
        familyName  : familyName,
        age         : age,
        image       : image,
        email       : email,
        password    : password,
        role        : 'user'
    }; 
    try {
        const user  = await AuthService.register(userData);
        const { token } = await AuthService.login(user.email, password);

        return res.header('Authorization', `Bearer ${token}`)
                  .status(201)
                  .json({ message: 'User registered and logged in', user });
    } catch (error) {

        const statusCode = error.message.includes('User already exists') ? 400 : 500;
        return res.status(statusCode).json({ message: error.message });
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error('all fields must be filled');
    }

    try {
        const { token, user } = await AuthService.login(email, password);

        return   res.header('Authorization', `Bearer ${token}`)
                    .status(200)
                    .json({ message: 'Login successful', user });
    } catch (error) {

        const statusCode =  error.message.includes('User not found') ? 404 : 
                            error.message.includes('all fields must be filled') ? 400 : 
                            error.message.includes('Invalid password') ? 401 : 500;

    return res.status(statusCode).json({ message: error.message });

    }
}