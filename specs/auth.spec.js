import supertest from 'supertest';
import { expect } from 'chai';
import 'dotenv/config';

describe('Auth', function() {
    const request = supertest(process.env.BASE_URL);

    it('Successful log in', function() {
        request
            .post('/auth')
            .send({login: process.env.LOGIN, password: process.env.PASSWORD})
            .end(function(err, res) {
            expect(res.statusCode).to.eq(200);
            expect(res.body.token).not.to.be.undefined;
        })
    })

    it('Log in with ivalid credentials', function() {
        request
            .post('/auth')
            .send({login: 'invalid', password: 'invalid'})
            .end(function(err, res) {
                expect(res.statusCode).to.eq(404);
                expect(res.body.message).to.eq('Wrong login or password.');
        })
    })
})