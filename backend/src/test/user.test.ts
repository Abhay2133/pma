import { expect } from "chai";
import sinon from "sinon";
import prismaClient from "../lib/db.js";
import { createUserHandler } from "../controllers/user.js";
import { v4 as uuidv4 } from "uuid";

const MockRequest = (body: any) => ({ body }) as any;
const MockResponse = () => {
  const res: any = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  return res;
};

describe("createUserHandler", () => {
  it("should create a new user successfully", async () => {
    const body = {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    };
    const req = MockRequest(body);
    const res = MockResponse();

    sinon.stub(prismaClient.user, "findFirst").resolves(null);
    sinon.stub(prismaClient.user, "create").resolves({
      id: uuidv4(), // Simulate UUID for the id field
      username: "testuser",
      email: "test@example.com",
      password: "hashed_password", // You can mock a hashed password here
      salt: "random_salt",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await createUserHandler(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith({ msg: "User created successfully" })).to.be.true;
  });
});
