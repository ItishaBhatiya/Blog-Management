const User = require('../models/User');

exports.signup = async (req, res) => {
  let { username, email, password } = req.body;
  try {
    if(email.length > 0 &&
        password.length > 0 &&
        username.length > 0){
            res.status(201).json({ message: 'User created successfully' });
        }
  } catch (error) {
    res.status(400).json({ message: 'User already exists' });
  }
};


