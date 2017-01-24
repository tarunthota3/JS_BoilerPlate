const should = require("chai").should();

const expect = require("chai").expect;

revNum = require("../js/numreverse/ReversingNumber");

describe("A series of test to check reverse number", function(err){
  it("should be in uppercase", function(done){
  	   var result=revNum(987);
       result.should.be.equal("SEVEN EIGHT NINE");
       done();
    });

  it("should only accept numerical value", function(done){
  	var result=revNum();
    expect(result).to.be.NaN;
    done();
    });

  it("should only accept numbers upto 17732", function(done){
    var result=revNum(17734);
    result.should.be.equal("NUMBER EXCEEDED");
    done();
    });


  it("should accept negative numbers also", function(done){
    var result=revNum(-654);
    result.should.be.equal("MINUS FOUR FIVE SIX");
    done();
    });

  it("should not contain trailing or leading spaces", function(done){
    var result=revNum(123);
    result.should.be.equal("THREE TWO ONE");
    done();
    });

  });
