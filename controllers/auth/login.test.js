require("dotenv").config();

const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../app");

const { DB_HOST_TEST } = process.env;

const loginData = {
  email: "lola@gmail.com",
  password: "123456",
};

describe("testing login controller", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("response should have a status code of 200", async () => {
    const { statusCode } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(statusCode).toBe(200);
  });

  test("response should return a token", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(body.token).toBeTruthy();
  });

  test("user object with 2 fields email and subscription with the String data type should be returned in response", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(body.user).toBeTruthy();
    expect(typeof body.user).toBe("object");
    expect(body.user.email).toBeTruthy();
    expect(body.user.subscription).toBeTruthy();
    expect(typeof body.user.email).toBe("string");
    expect(typeof body.user.subscription).toBe("string");
  });
});
