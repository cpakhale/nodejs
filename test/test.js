var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://52.37.26.38:8080");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page
  it("should return home page",function(done){
    // calling home page
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});


describe("SAMPLE  next unit test part 2",function(){

  // #1 should return home page
  it("should return home page",function(done){
    // calling home page
    server
    .get("/")
   .expect("Content-type",/text/) 
	.expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});
