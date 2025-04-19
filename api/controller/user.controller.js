const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
    const { name, email, dateOfBirth, password } = req.body;

    if (!name || !email || !dateOfBirth || !password) {
        return res.status(400).json({
            message: "All fields (name, email, dateOfBirth, password) are required.",
        });
    }

    try {
        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already registered",
            });
        }
// Hashing the password for security purpose
        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashPassword,
            dateOfBirth,
        });

        return res.status(201).json({
            message: "User registered successfully",
        });
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({
            message: "Server issue",
            error: error.message,
        });
    }
};
// user login with email and password
const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required",
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not registered",
            });
        }
// check the password is correct or not 
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect password",
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.status(200).json({
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({
            message: "Server issue",
            error: error.message,
        });
    }
};

module.exports = { Register, Login };
