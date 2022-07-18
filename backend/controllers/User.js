import User from "../models/User.js";

export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const userFromDb = await newUser.save();
    return res.status(200).json({ userFromDb, error: false });
  } catch (err) {
    throw new Error(err);
  }
};
