import jwt from "jwt-simple";

describe("Routes: Project", () => {
    const Users = app.db.models.Users;
    const Project = app.db.models.Project;
    const jwtSecret = app.libs.config.jwtSecret;
    let token;
    let fakeproject;
    beforeEach(done => {
        Users
            .destroy({ where: {} })
            .then(() => Users.create({
                firstname: "John",
                lastname: "Connor",
                username: "jconnor",
                email: "john@mail.net",
                password: "12345"
            }))
            .then(user => {
                Project
                    .destroy({ where: {} })
                    .then(() => Project.bulkCreate([{
                        id: 1,
                        title: "Work",
                        content: "Good work",
                        user_id: user.id
                    }, {
                        id: 2,
                        title: "Study",
                        content: "Good Studying",
                        user_id: user.id
                    }]))
                    .then(project => {
                        fakeproject = project[0];
                        token = jwt.encode({ id: user.id }, jwtSecret);
                        done();
                    });
            });
    });
    describe("GET /project", () => {
        describe("status 200", () => {
            it("returns a list of project", done => {
                request.get("/project")
                    .set("Authorization", `JWT ${token}`)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body).to.have.length(2);
                        expect(res.body[0].title).to.eql("Work");
                        expect(res.body[1].title).to.eql("Study");
                        done(err);
                    });
            });
        });
    });
    describe("POST /project", () => {
        describe("status 200", () => {
            it("creates a new project", done => {
                request.post("/project")
                    .set("Authorization", `JWT ${token}`)
                    .send({
                        title: "Run",
                        content: "Good Run"
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.title).to.eql("Run");
                        expect(res.body.content).to.eql("Good Run")
                        expect(res.body.solved).to.be.false;
                        done(err);
                    });
            });
        });
    });
    describe("GET /project/:id", () => {
        describe("status 200", () => {
            it("returns one project", done => {
                request.get(`/project/${fakeproject.id}`)
                    .set("Authorization", `JWT ${token}`)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.title).to.eql("Work");
                        done(err);
                    });
            });
        });
        describe("status 404", () => {
            it("throws error when project not exist", done => {
                request.get("/project/0")
                    .set("Authorization", `JWT ${token}`)
                    .expect(404)
                    .end((err, res) => done(err));
            });
        });
    });
    describe("PUT /project/:id", () => {
        describe("status 204", () => {
            it("updates a project", done => {
                request.put(`/project/${fakeproject.id}`)
                    .set("Authorization", `JWT ${token}`)
                    .send({
                        title: "Travel",
                        done: true
                    })
                    .expect(204)
                    .end((err, res) => done(err));
            });
        });
    });
    describe("DELETE /project/:id", () => {
        describe("status 204", () => {
            it("removes a project", done => {
                request.delete(`/project/${fakeproject.id}`)
                    .set("Authorization", `JWT ${token}`)
                    .expect(204)
                    .end((err, res) => done(err));
            });
        });
    });
});