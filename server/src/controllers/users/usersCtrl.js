const User = require('../../model/User');

const registerUser = async(req,res) =>{
    const { email, firstname, lastname, password } = req?.body;
    try {
        //checking if user exists
        const userExists = await User.findOne({email});

        if(userExists) {
            res.json("User already exists");
        }
        const user = await User.create({email, firstname, lastname, password});
        res.status(200).json(user);
    
    }
    catch(error)
    {
        res.json(error);
    }

};

module.exports = { registerUser };