
const request = require('supertest')
const app = require('../app');
require('../models');

let id;

test("GET /genres return = 200", async () => {
    const res = await request(app).get('/genres')
    expect(res.status).toBe(200)
})

test("POST /genres return = 201", async () => {
    const body = {
        name: "zfkdjsfl"
    }
    const res = await request(app).post('/genres').send(body)
    id = res.body.id
    expect(res.status).toBe(201)
})

test("PUT /genres return = 200", async () => {
    const body = {
        name: "awqwqw"
    }
    const res = await request(app).put(`/genres/${id}`).send(body)
    expect(res.status).toBe(200)
})

test("DELETE /genres return = 204", async () => {
    const res = await request(app).delete(`/genres/${id}`)
    expect(res.status).toBe(204)
})