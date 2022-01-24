const controllers = require('../db/controllers');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    controllers.getNotes().then(notes => {
        return res.json(notes)
    })
})

router.post('/notes', (req, res) => {
    controllers.addNote(req.body).then(notes => {
        return res.json(notes)
    })
})

module.exports = router;