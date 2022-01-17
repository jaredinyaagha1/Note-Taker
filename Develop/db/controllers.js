const utils = require('util');
const fs = require('fs');
const {
    parse
} = require('path');
const uuid = require('uuid/v1');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

class DataStorage {

    read() {
        return readFromFile('db/db.json', 'utf8')
    }

    write(n) {
        return writeToFile('db/db.json', JSON.stringify(n))
    }

    getNotes() {
        return this.read().then((notes) => {
            var holdNotes;

            try {
                holdNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                holdNotes = []
            }
            return holdNotes
        })
    }

    addNote(n) {
        const {
            title,
            text
        } = n;

        const newNote = {
            title,
            text,
            id: uuid()
        }
        return this.getNotes()
            .then((notes) => {
                [...notes, newNote]
            })
            .then((updated) => {
                this.write(updated)
            })
            .then(() => {
                newNote
            })
    }
}

module.exports = new DataStorage()