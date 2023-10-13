const request = require('supertest');
const express = require('express');
const contactRoutes = require('../routes/contactRoutes');
const sequelize = require('../database');

const app = express();
app.use(express.json());
app.use(contactRoutes);

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Contact routes', () => {
    test('Create a contact', async () => {
        const response = await request(app)
            .post('/create')
            .send({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' });

        expect(response.status).toBe(201);
        expect(response.body.firstName).toBe('John');
    });
});

afterAll(async () => {
    await sequelize.close();
});
