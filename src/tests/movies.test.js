
const request = require('supertest')
const app = require('../app');
const Actors = require('../models/Actor');
const Genres = require('../models/Genre');
const Dirctors = require('../models/Director');
require('../models');

let id;

test("GET /movies return = 200", async () => {
    const res = await request(app).get('/movies')
    expect(res.status).toBe(200)
})

test("POST /movies return = 201", async () => {
    const body = {
        name: "wewrwerwerwrwre",
        image: "wewrwerwerwrwre",
        synopsis:"wewrwerwerwrwre",
        releaseYear: "2000-01-01"
    }
    const res = await request(app).post('/movies').send(body)
    id = res.body.id
    expect(res.status).toBe(201)
})

test("PUT /movies return = 200", async () => {
    const body = {
        name: "awqwqw"
    }
    const res = await request(app).put(`/movies/${id}`).send(body)
    expect(res.status).toBe(200)
})

test("POST /movies/:id/actors return = 200", async () => {
    const actor = await Actors.create(
    {
        firstName: "wewrwerwerwrwre",
        lastName: "wewrwerwerwrwre",
        nationality: "wewrwerwerwrwre",
        image: "wewrwerwerwrwre",
        birthday: "2000-01-01"
    })
    const res = await request(app).post(`/movies/${id}/actors`).send([actor.id])
    await actor.destroy()
    expect(res.status).toBe(200)
})

test("POST /movies/:id/genres return = 200", async () => {
    const genre = await Genres.create(
    {
        name: "zfkdjsfl"
    })
    const res = await request(app).post(`/movies/${id}/genres`).send([genre.id])
    await genre.destroy()
    expect(res.status).toBe(200)
})

test("POST /movies/:id/directors return = 200", async () => {
    const director = await Dirctors.create(
    {
        firstName: "wewrwerwerwrwre",
        lastName: "wewrwerwerwrwre",
        nationality: "wewrwerwerwrwre",
        image: "wewrwerwerwrwre",
        birthday: "2000-01-01"
    })
    const res = await request(app).post(`/movies/${id}/directors`).send([director.id])
    await director.destroy()
    expect(res.status).toBe(200)
})

test("DELETE /movies return = 204", async () => {
    const res = await request(app).delete(`/movies/${id}`)
    expect(res.status).toBe(204)
})
