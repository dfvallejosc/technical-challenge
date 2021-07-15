
const supertest = require("supertest");
const chai = require('chai');
const assert = chai.assert;
const app = require("../index.js");

describe("GET /iecho", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .get("/iecho?text=test")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });

  it("it should has status code 400", function(done) {
    supertest(app)
      .get("/iecho")
      .expect(400)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });

  it("it should respond with the text tset", function(done) {
    supertest(app)
      .get("/iecho?text=test")
      .expect({text: "tset"})
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });

  it("it should respond with an object having 'palindrome' flag equal to true", function(done) {
    supertest(app)
      .get("/iecho?text=atar a la rata")
      .expect({text: "atar al a rata", palindrome: true})
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});