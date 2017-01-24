const expect = require("chai").expect;

isPrime = require("../js/CheckPrime");

describe("A series of test for CheckPrime", function(err) {
    it("should not accept floating point values", function(done) {
        var result = isPrime(2.3);
        expect(result).to.be.false;
        done();
    });
    it("should accept negative primes", function(done) {
        var result = isPrime(-2);
        expect(result).to.be.true;
        done();
    });
    it("should accept only integers", function(done) {
        var result = isPrime();
        expect(result).to.be.false;
        done();
    });
    it("should accept even larger integers", function(done) {
        var result = isPrime(1111111111111111111);
        expect(result).to.be.true;
        done();
    });
    it("should accept hexadecimal input", function(done) {
        var result = isPrime(0x21D);
        expect(result).to.be.true;
        done();
    });
});
