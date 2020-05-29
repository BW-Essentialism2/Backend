const request = require('supertest');
const server = require('../server.js');

describe('server.js', () => {

    describe('test api/values endpoint', () => {
        it('should return values array length', () => {
            return request(server).get('/api/values')
                .then(res => {
                    // console.log('res.body: ', res.body.length)
                    expect(res.body.length).toBe(14);
                })
        })
        it('should check to see if first value is "athletic"', () => {
            return request(server).get('/api/values')
                .then(res => {
                    expect(res.body[0].name).toEqual("athletic");
                })
        })
    })
    
})