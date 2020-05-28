const request = require('supertest');
const server = require('../server.js');

describe('server.js', () => {

    describe('test api/values endpoint', () => {
        it('should return values', () => {
            return request(server).get('/api/values')
                .then(res => {
                    console.log('res.body: ', res.body)
                })
        })
    })
    
})