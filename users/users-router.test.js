const request = require('supertest');
const server = require('../server.js');

describe('server.js', () => {
    //these tests are just to see if im correctly testing the server
    describe('testing test setup', () => {
        it('should return json object eqauling "hello world test"', async () => {
            const expectedBody = {message: "hello world test"};
            const respone = await request(server).get('/helloWorld');
            expect(respone.body).toEqual(expectedBody);
        })
        //test response being a 200
        it('should return 200 status code', async() => {
            const expectedStatusCode = 200;
            const response = await request(server).get('/helloWorld');
            expect(response.status).toEqual(expectedStatusCode);
        })
    })
    describe('test api/users endpoint', () => {//only works without authentication middleware
        it('should return users array length', () => {
            return request(server).get('/api/users')
                .then(res => {
                    // console.log('res.body: ', res.body.length)
                    expect(res.body.length).toBe(7);
                })
        })
    })
})