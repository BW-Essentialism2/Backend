const request = require('supertest');
const server = require('../server.js');

describe('server.js', () => {
    //these tests are just to see if im correctly testing the server
    describe('register and login user', () => {
        it('should register user', () => {
            return request(server).post('/register')
                .then(res => {
                    
                })
        })
        it.todo('should login user')        
    })
})