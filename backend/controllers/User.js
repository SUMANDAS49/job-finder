import User from "../models/User.js";
import { generateToken } from "../Utils/getToken.js";

export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const userFromDb = await newUser.save();
    return res.status(200).json({ userFromDb, error: false });
  } catch (err) {
    throw new Error('sorry');
  }
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email});
    if(user && await user.matchPassword(password)) {
      res.status(200).json({ user, token : generateToken(user._id) });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
};
