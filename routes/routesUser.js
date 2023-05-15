const express = require('express');
const router = express.Router();
const Model = require('../model/modelUser');
module.exports = router;
const jwt = require('jsonwebtoken');

//Get all method
router.get('/get', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);

    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})

router.post('/login', async (req, res) => {

    const users = await Model.find({});
    const secretKey = process.env.SECRET_KEY;
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).send('Invalid credentials!!!');
    }

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '7d' });

    res.send({ token });

});

//get by id
router.get('/get/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);

    }
    catch (error) {
        res.status(500), json({
            message: error.message
        })

    }
})

//update by id
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )
        res.send(result);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })

    }
})

//update product by id
router.patch('/updateProduct/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };
/*
        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )
        */
        const result = await Model.findOneAndUpdate(id,updateData,options);
        res.send(result);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })

    }
})
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        email: req.body.email,
        password: req.body.password,
        foto: req.body.foto,
        nombreCompleto:req.body.nombreCompleto,
        numeroTelefonico:req.body.numeroTelefonico,
        cargo:req.body.cargo,
        fcm: req.body.fcm 
    })
/*
    const listItem = new ListItem({
        fcm: req.body.fcm,
      });
      */

    try {
        const dataToSave = await data.save();
        //const fcmSave = await listItem.save();
        res.status(200).json(dataToSave);
        //res.status(200).json(fcmSave);

    }
    catch (error) {
        res.status(400).json({ message: error.message });

    }
})


//Delete method by id
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id);
        res.send('Eliminado');
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })

    }
})