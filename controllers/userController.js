import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { fileDeleteFromCloud, fileUploadToCloud } from "../utils/cloudinary.js";
import { findPublicId, isEmail, isMobile } from "../helpers/helpers.js";

/**
 * @description Get all users data
 * @method GET
 * @route /api/v1/user/
 * @access public
 */
export const getAllUser = asyncHandler(async (req, res) => {
  // get all user
  const users = await User.find();

  // check user data
  if (users.length === 0) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.status(200).json({ users, message: "Users data loaded" });
});

/**
 * @description Get Single users data
 * @method GET
 * @route /api/v1/user/:id
 * @access public
 */
export const getSingleUser = asyncHandler(async (req, res) => {
  // get user id
  const { id } = req.params;

  // get single user data
  const user = await User.findById(id);

  // check user
  if (!user) {
    return res.status(404).json({ message: "User data not found" });
  }

  // response
  res.status(200).json(user);
});

/**
 * @description Create new user
 * @method POST
 * @route /api/v1/user/
 * @access public
 */
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  // validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check valid email
  if (!isEmail(email)) {
    return res.status(400).json({ message: "Invalid Email Address" });
  }

  // check valid Phone number
  if (!isMobile(phone)) {
    return res.status(400).json({ message: "Invalid Mobile number" });
  }

  // check email existance
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // check email
  const checkPhone = await User.findOne({ phone });
  if (checkPhone) {
    return res.status(400).json({ message: "Phone number already exists" });
  }

  // check files
  let fileData = null;
  if (req.file) {
    const data = await fileUploadToCloud(req.file.path);

    fileData = data.secure_url;
  }

  // hash password
  const hashPass = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email,
    phone,
    password: hashPass,
    photo: fileData,
  });

  // response
  res.status(201).json({ user: user, message: "User data created successful" });
});

/**
 * @description delete user data
 * @method DELETE
 * @route /api/v1/user/:id
 * @access public
 */
export const deleteUser = asyncHandler(async (req, res) => {
  // get delete user  id
  const { id } = req.params;

  // delete data form db
  const user = await User.findByIdAndDelete(id);

  // delete cloud file
  await fileDeleteFromCloud(findPublicId(user.photo));

  // response
  res.status(200).json({ user, message: "User data deleted successfull" });
});

/**
 * @description update user
 * @method PUT/PATCH
 * @route /api/v1/user/:id
 * @access public
 */
export const updateUser = asyncHandler(async (req, res) => {
  // get update user id
  const { id } = req.params;

  // get update data
  const { name, email, phone } = req.body;

  // check valid email
  if (!isEmail(email)) {
    return res.status(400).json({ message: "Invalid Email Address" });
  }

  // check valid Phone number
  if (!isMobile(phone)) {
    return res.status(400).json({ message: "Invalid Mobile number" });
  }

  // update data
  const user = await User.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true }
  );

  // response
  res.status(200).json({ user, message: "User data updated successful" });
});
