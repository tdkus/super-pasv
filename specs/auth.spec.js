import supertest from 'supertest'
import { expect } from 'chai'


describe('Auth', function() {
    const request = supertest(process.env.BASE_URL)

    describe('Successful log in', function() {
        let result

        before(async function() {
            await request
                .post('/auth')
                .send({login: process.env.LOGIN, password: process.env.PASSWORD})
                .then(res => {
                    result = res
                })
        })

        it('responce status code is 200', function() {
            expect(result.statusCode).to.eq(200)
        })

        it('response body contains authorization token', function() {
            expect(result.body.token).not.to.be.undefined;
        })
    })

    describe('Log in with invalid credentials', function() {
        let result

        before(async function() {
            await request
                .post('/auth')
                .send({login: 'invalid', password: 'invalid'})
                .then(res => {
                    result = res
                })
        })

        it('responce status code is 404', function () {
           expect(result.statusCode).to.eq(404)
        })

        it('response body does not contains authorization token', function () {
            expect(result.body.message).to.eq('Wrong login or password.')
        })
    })
})
//.end(function(err, res) {
// expect(res.body.message).to.eq('Wrong login or password.')