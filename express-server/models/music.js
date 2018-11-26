const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = Schema({
    title: {
        type: String,
        default: 'Untitled'
    },
    artist: {
        type: String,
        default: 'Unknown'
    },
    pic: {
        type: String
    },
    lrc: {
        type: String
    },
    category: {
        type: String,
        default: 'Unknown'
    },
    src: {
        type: String,
        required: true
    }
})

module.exports = Music = mongoose.model('music', musicSchema)