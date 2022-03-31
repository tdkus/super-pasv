import { expect } from 'chai'

describe('Math functions', function() {
    const a = 4;
    const b = 5;
    const c = 9;
    const d = -1;
    const e = 36;

    it.skip('A + B = C', function() {
        expect(a + b).to.eq(c)
    })

    it.only('A - B = D', function() {
        expect(a - b).to.eq(d)
    })

    describe('Math function 2', function() {
        it('A * C = E', function() {
            expect(a * c).to.eq(e)
        })
    })
})