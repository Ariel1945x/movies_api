
const request = require('supertest')
const app = require('../app');
require('../models');

let id;

test("GET /directors return = 200", async () => {
    const res = await request(app).get('/directors')
    expect(res.status).toBe(200)
})

test("POST /directors return = 201", async () => {
    const body = {
        firstName: "wewrwerwerwrwre",
        lastName: "wewrwerwerwrwre",
        nationality: "wewrwerwerwrwre",
        image: "wewrwerwerwrwre",
        birthday: "2000-01-01"
    }
    const res = await request(app).post('/directors').send(body)
    id = res.body.id
    expect(res.status).toBe(201)
})

test("PUT /directors return = 200", async () => {
    const body = {
        firstName: "awqwqw"
    }
    const res = await request(app).put(`/directors/${id}`).send(body)
    expect(res.status).toBe(200)
})

test("DELETE /directors return = 204", async () => {
    const res = await request(app).delete(`/directors/${id}`)
    expect(res.status).toBe(204)
})