const express = require("express");
const mongoose = require("mongoose");
const Signin = require("../models/signinModel");

const router = express.Router();

//create

router.post("/create", async (req, res) => {
  const { email, password } = req.body;

  try {
    const signinAdded = await Signin.create({
      email: email,
      password: password,
    });
    res.status(201).json(signinAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//get

router.get("/", async (req, res) => {
  try {
    const showAll = await Signin.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
});

//get single user

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await Signin.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await Signin.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
});

//put patch

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const updateUser = await Signin.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
});

module.exports = router;
