import request from "supertest";
import { app } from "../app";

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Green tea" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green tea",
  });
});

test("GET /tea without param should return correct object", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green tea",
  });
});

test("GET /tea with a different param should return correct object", async () => {
  const res = await request(app)
    .get("/tea")
    .query({ teaName: "Afternoon tea" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Afternoon tea",
  });
});
