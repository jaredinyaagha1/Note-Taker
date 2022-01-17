const controllers = require('../db/controllers');

router.get('/notes', (req, res) => {
    controllers.getNotes().then(notes => {
        return res.json(notes)
    })
})