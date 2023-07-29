import request from "supertest"
import app from "../../src/app";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { createAccessToken } from "../../src/utils/jwt/createToken";
import IUser from "../../src/modules/user/interface/user.interface";


let mongod:MongoMemoryServer;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});
afterAll(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});


describe('Authentication API endpoints', () => {

  // Test Case for Sign Up Endpoint
  describe('POST /sign-up', () => {
    it('should return 200 when signing up with valid credentials', async () => {
      const response = await request(app).post('/auth/sign-up').send({
        username: 'testuser',
        password: 'testpassword!D2',
      });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should return 400 when missing username or password', async () => {
      const response = await request(app).post('/auth/sign-up').send({});

      expect(response.status).toBe(400);
    });

    it('should return 400 when username already exists', async () => {
      const response = await request(app).post('/auth/sign-up').send({
        username: 'testuser',
        password: 'testpassword',
      });

      expect(response.status).toBe(400);
    });
  });

  // Test Case for Sign In Endpoint
  describe('POST /sign-in', () => {
    it('should return 200 when signing in with valid credentials', async () => {
      const response = await request(app).post('/auth/sign-in').send({
        username: 'testuser',
        password: 'testpassword!D2',
      });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('accessToken');
    });

    it('should return 400 when missing username or password', async () => {
      const response = await request(app).post('/auth/sign-in').send({});

      expect(response.status).toBe(400);
    });

    it('should return 401 when incorrect password for a valid username', async () => {
      const response = await request(app).post('/auth/sign-in').send({
        username: 'testuser',
        password: 'wrongpassword',
      });

      expect(response.status).toBe(401);
    });
  });

  // Test case for dashboard endpoint
  describe('GET /dashboard', () => {
    it('should return 200 and a welcome message for authenticated users', async () => {
      const accessToken = createAccessToken({ username: 'testuser', id: 'user-id' } as IUser);

      const response = await request(app).get('/auth/dashboard').set('Authorization', `Bearer ${accessToken}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should return 401 when missing or invalid access token', async () => {
      const response1 = await request(app).get('/auth/dashboard');
      const response2 = await request(app).get('/auth/dashboard').set('Authorization', 'Bearer invalidtoken');

      expect(response1.status).toBe(401);
      expect(response2.status).toBe(401);
    });
  });
});
