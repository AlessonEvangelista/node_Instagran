const Post = require('../models/Post');

module.exports = {
    async index(request, response) {

    },

    async store(request, response) {
        return response.json({ok: true })
    }

};