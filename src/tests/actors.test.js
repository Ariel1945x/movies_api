
const request = require('supertest');
const app = require('../app');
require('../models');

let id;

test("Get /actors debe retornar status = 200", async () => {
    const res = await request(app).get('/actors')
    expect(res.status).toBe(200)
})

test("POST /actors debe retornar status = 201", async () => {
    const body = {
        firstName: "wewrwerwerwrwre",
        lastName: "wewrwerwerwrwre",
        nationality: "wewrwerwerwrwre",
        image: "wewrwerwerwrwre",
        birthday: "2000-01-01"
    }
    const res = await request(app).post('/actors').send(body)
    id = res.body.id
    expect(res.status).toBe(201)
})

test("PUT /actors debe retornar status = 200", async () => {
    const body = {
        firstName: "rewrewrewrewrew"
    }
    const res = await request(app).put(`/actors/${id}`).send(body)
    expect(res.status).toBe(200)
})

test("DELETE /actors debe retornar status = 204", async () => {
    const res = await request(app).delete(`/actors/${id}`)
    expect(res.status).toBe(204)
})