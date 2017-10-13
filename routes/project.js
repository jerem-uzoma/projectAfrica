module.exports = app => {
    const Project = app.db.models.Project;

    app.route("/project")
        .all(app.auth.authenticate())
        /**
         * @api {get} /project List the user's project
         * @apiGroup project
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiSuccess {Object[]} project Project's list
         * @apiSuccess {Number} project.id Project id
         * @apiSuccess {String} project.title Project title
         * @apiSuccess {String} project.content Project content
         * @apiSuccess {Boolean} project.solved Project is solved?
         * @apiSuccess {Number} project.pay Project pay
         * @apiSuccess {Number} project.upvotes Project upvotes
         * @apiSuccess {Number} project.downvotes Project downvotes
         * @apiSuccess {Date} project.updated_at Update's date
         * @apiSuccess {Date} project.created_at Register's date
         * @apiSuccess {Number} project.user_id User id
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 200 OK
         *    [{
         *      "id": 1,
         *      "title": "Study",
         *      "solved": false,
         *      "content": "Nice project"
         *      "pay": "70000"
         *      "updated_at": "2016-02-10T15:46:51.778Z",
         *      "created_at": "2016-02-10T15:46:51.778Z",
         *      "user_id": 1
         *    }]
         * @apiErrorExample {json} List error
         *    HTTP/1.1 412 Precondition Failed
         */
        .get((req, res) => {
            Project.findAll({
                    where: { user_id: req.user.id }
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        /**
         * @api {post} /project Register a new Project
         * @apiGroup project
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiParam {String} title Project title
         * @apiParamExample {json} Input
         *    {"title": "Study"}
         * @apiSuccess {Number} id Project id
         * @apiSuccess {String} title Project title
         * @apiSuccess {Boolean} solved false Project is solved?
         * @apiSuccess {String} content Project content
         * @apiSuccess {Number} pay Project pay
         * @apiSuccess {Number} upvotes Project upvotes
         * @apiSuccess {Number} downvotes Project downvotes
         * @apiSuccess {Date} updated_at Update's date
         * @apiSuccess {Date} created_at Register's date
         * @apiSuccess {Number} user_id User id
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 200 OK
         *    {
         *      "id": 1,
         *      "title": "Study",
         *      "solved": false,
         *      "content": "Nice project"
         *      "pay": "70000"
         *      "updated_at": "2016-02-10T15:46:51.778Z",
         *      "created_at": "2016-02-10T15:46:51.778Z",
         *      "user_id": 1
         *    }
         * @apiErrorExample {json} Register error
         *    HTTP/1.1 412 Precondition Failed
         */
        .post((req, res) => {
            req.body.user_id = req.user.id;
            project.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    app.route("/project/:id")
        .all(app.auth.authenticate())
        /**
         * @api {get} /project/:id Get a Project
         * @apiGroup project
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiSuccess {Number} id Project id
         * @apiSuccess {String} title Project title
         * @apiSuccess {String} content Project content
         * @apiSuccess {Boolean} solved Project is solved?
         * @apiSuccess {Number} pay Project pay
         * @apiSuccess {Number} upvotes Project upvotes
         * @apiSuccess {Number} downvotes Project downvotes
         * @apiSuccess {Date} updated_at Update's date
         * @apiSuccess {Date} created_at Register's date
         * @apiSuccess {Number} user_id User id
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 200 OK
         *    {
         *      "id": 1,
         *      "title": "Study",
         *      "solved": false,
         *      "content": "Nice project"
         *      "pay": "70000"
         *      "updated_at": "2016-02-10T15:46:51.778Z",
         *      "created_at": "2016-02-10T15:46:51.778Z",
         *      "user_id": 1
         *    }
         * @apiErrorExample {json} Project not found error
         *    HTTP/1.1 404 Not Found
         * @apiErrorExample {json} Find error
         *    HTTP/1.1 412 Precondition Failed
         */
        .get((req, res) => {
            Project.findOne({
                    where: {
                        id: req.params.id,
                        //user_id: req.user.id
                    }
                })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        /**
         * @api {put} /project/:id Update a Project
         * @apiGroup project
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiParam {id} id Project id
         * @apiParam {String} title Project title
         * @apiParam {Boolean} solved Project is solved?
         * @apiParamExample {json} Input
         *    {
         *      "title": "Work",
         *      "solved": true
         *    }
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 204 No Content
         * @apiErrorExample {json} Update error
         *    HTTP/1.1 412 Precondition Failed
         */
        .put((req, res) => {
            project.update(req.body, {
                    where: {
                        id: req.params.id,
                        user_id: req.user.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        /**
         * @api {delete} /project/:id Remove a Project
         * @apiGroup project
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiParam {id} id Project id
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 204 No Content
         * @apiErrorExample {json} Delete error
         *    HTTP/1.1 412 Precondition Failed
         */
        .delete((req, res) => {
            project.destroy({
                    where: {
                        id: req.params.id,
                        user_id: req.user.id
                    }
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
};