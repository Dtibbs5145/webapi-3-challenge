const db = require('./postDb');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const posts = await db.get();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error getting the posts' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const posts = await db.getById(req.params.id);
        if (posts) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: 'Posts could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error trying the get the posts for this user' });
    }
});

router.post('/:id/posts', async (req, res) => {
    try {
        const posts = await db.insert(req.body);
        if (posts) {
            res.status(201).json({ message: 'Posted successfully!' });
        } else {
            res.status(400).json({ messge: 'Could not post' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error trying to post' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await db.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: 'Post was deleted' });
        } else {
            res.status(404).json({ message: 'No posts found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error removing post' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const posts = await db.update(req.params.id, req.body);
        if (!req.params.id) {
            res.status(404).json({ message: 'Post could not be found' });
        } if (posts) {
            res.status(201).json({message: 'Post was updated' });
        } else {
            res.status(400).json({ message: 'Fill in required content' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error trying to update post' });
    }
});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;