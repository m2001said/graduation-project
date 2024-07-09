import request from "supertest";
const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

test("should not delete user data if the token is expired or there is no token or unAuthorized", async () => {
    await request(API_BASE_URL).delete("/user/send-alert").send().expect(401); 
  });