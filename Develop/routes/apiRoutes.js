const controllers = require('../db/controllers');
const router = require('./htmlRoutes');

router.get('/notes', (req, res) => {
    controllers.getNotes().then(notes => {
        return res.json(notes)
    })
})

router.post('/notes', (req, res) => {
    controllers.addNote().then(notes => {
        return res.json(notes)
    })
})