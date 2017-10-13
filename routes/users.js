module.exports = app => {
    const Users = app.db.models.Users;

    app.route("/user")
        .all(app.auth.authenticate())
        /**
         * @api {get} /user Return the authenticated user's data
         * @apiGroup User
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiSuccess {Number} id User id
         * @apiSuccess {String} fistname User first name
         * @apiSuccess {String} lastname User last name
         * @apiSuccess {String} username User username
         * @apiSuccess {String} profession User profession
         * @apiSuccess {String} email User email
         * @apiSuccess {Number} phoneNumber User phoneNumber
         * @apiSuccess {Number} stars User stars
         * @apiSuccess {String} dob User date of birth
         * @apiSuccess {String} facebookId User facebook Id
         * @apiSuccess {String} linkedInId User linkedIn Id
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 200 OK
         *    {
         *      "id": 1,
         *      "firstname": "John"
         *      "lastname": "Connor",
         *      "profession": "Carpenter"
         *      "email": "JohnConnor@mail.net"
         *      "stars": "2"
         *      "phoneNumber": "+0000000000000"
         *      "dob":"2005-07-02"
         *      "facebookId":"johnConnor"
         *      "linkedInId":"johnconnor"
         *    }         
         * @apiErrorExample {json} Find error
         *    HTTP/1.1 412 Precondition Failed
         */
        .get((req, res) => {
            Users.findById(req.user.id, {
                    attributes: [
                        "id", "firstname", "lastname", "email", "profession",
                        "stars", "phoneNumber", "dob", "facebookId", "linkedInId"
                    ]
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        /**
         * @api {delete} /user Deletes an authenticated user
         * @apiGroup User
         * @apiHeader {String} Authorization Token of authenticated user
         * @apiHeaderExample {json} Header
         *    {"Authorization": "JWT xyz.abc.123.hgf"}
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 204 No Content
         * @apiErrorExample {json} Delete error
         *    HTTP/1.1 412 Precondition Failed
         */
        .delete((req, res) => {
            Users.destroy({ where: { id: req.user.id } })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    /**
     * @api {post} /users Register a new user
     * @apiGroup User
     * @apiParam {Number} id User id
     * @apiParam {String} fistname User first name
     * @apiParam {String} lastname User last name
     * @apiParam {String} username User username
     * @apiParam {String} profession User profession
     * @apiParam {String} email User email
     * @apiParam {Number} phoneNumber User phoneNumber
     * @apiParam {Number} stars User stars
     * @apiParam {String} dob User date of birth
     * @apiParam {String} facebookId User facebook Id
     * @apiParam {String} linkedInId User linkedIn Id
     * @apiParamExample {json} Input
     *     {
     *      "id": 1,
     *      "firstname": "John"
     *      "lastname": "Connor",
     *      "profession": "Carpenter"
     *      "email": "JohnConnor@mail.net"
     *      "stars": "2"
     *      "password": "ProjectA",
     *      "phoneNumber": "+0000000000000"
     *      "dob":"2005-07-02"
     *      "facebookId":"johnConnor"
     *      "linkedInId":"johnconnor"
     *    }
     * @apiSuccess {Number} id User id
     * @apiSuccess {String} fistname User first name
     * @apiSuccess {String} lastname User last name
     * @apiSuccess {String} username User username
     * @apiSuccess {String} profession User profession
     * @apiSuccess {String} email User email
     * @apiSuccess {Number} phoneNumber User phoneNumber
     * @apiSuccess {Number} stars User stars
     * @apiSuccess {String} dob User date of birth
     * @apiSuccess {String} facebookId User facebook Id
     * @apiSuccess {String} linkedInId User linkedIn Id
     * @apiSuccess {String} password User encrypted password
     * @apiSuccess {Date} updated_at Update's date
     * @apiSuccess {Date} created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     * {
     *      "id": 1,
     *      "firstname": "John"
     *      "lastname": "Connor",
     *      "profession": "Carpenter"
     *      "email": "JohnConnor@mail.net"
     *      "stars": "2"
     *      "password": "$2a$10$SK1B1",
     *      "phoneNumber": "+0000000000000"
     *      "dob":"2005-07-02"
     *      "facebookId":"johnConnor"
     *      "linkedInId":"johnconnor"
     *    }
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 412 Precondition Failed
     */
    app.post("/users", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });
};