import { User } from "../models/userModel";
import bcrypt from "bcrypt";
export const create = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(401).json({ message: "All fields are required!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return res.status(401).json({ message: "Failed to create user!" });
    }
    return res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!", error });
  }
};