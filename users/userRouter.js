// const express = 'express';
const db = require('./userDb');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const users = await db.insert(req.body);
        if (users) {
            res.status(200).json({ message: 'User added!' });
        } else {
            res.status(400).json({ message: 'missing required content' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error adding the user' });
    }
});

router.post('/:id/posts', async (req, res) => {
});

router.get('/', async (req, res) => {
    try {
        const users = await db.get();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error getting the users' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const users = await db.getById(req.params.id);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'This user could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error getting this user' });
    }
});

router.get('/:id/posts', async (req, res) => {
    try {
        const users = await db.getUserPosts(req.params.id);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'Posts for this user could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error getting the posts for this user' });
    }
});

router.delete('/:id', async (req, res) => {

});

router.put('/:id', async (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
