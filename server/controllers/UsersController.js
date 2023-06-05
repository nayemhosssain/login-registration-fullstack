const UsersModel = require('../models/UsersModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');





// Registration 
exports.registration = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Hash and salt the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user with the hashed password
        const user = new UsersModel({
          name,
          email,
          password: hashedPassword
        });
    
        // Save the user to the database
        await user.save();
    
        res.status(200).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
      }
}

//Login
exports.login = async (req, res) => {
   
    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await UsersModel.findOne({ email });
  
      if (!user) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
      }
  
      // Compare the hashed password with the entered password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
      }
  
      // Generate a JWT token
      if(user){
            let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:user.email}
            let token = jwt.sign( Payload, process.env.JWT_SECRET);
            res.status(200).json({status:"successfully login",token:token,data:user.email})
        }
        else {
            res.status(401).json({status:"unsuccess"})
        }
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
};
