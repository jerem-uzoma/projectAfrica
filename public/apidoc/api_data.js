define({
    "api": [{
            "type": "post",
            "url": "/token",
            "title": "Authentication Token",
            "group": "Credentials",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "email",
                            "description": "<p>User email</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "password",
                            "description": "<p>User password</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Input",
                    "content": "{\n  \"email\": \"john@connor.net\",\n  \"password\": \"123456\"\n}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "String",
                        "optional": false,
                        "field": "token",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\"token\": \"xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Authentication error",
                    "content": "HTTP/1.1 401 Unauthorized",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/token.js",
            "groupTitle": "Credentials",
            "name": "PostToken"
        },
        {
            "type": "get",
            "url": "/",
            "title": "API Status",
            "group": "Status",
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "String",
                        "optional": false,
                        "field": "status",
                        "description": "<p>API Status' message</p>"
                    }]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\"status\": \"ProjectAfrica API\"}",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/index.js",
            "groupTitle": "Status",
            "name": "Get"
        },
        {
            "type": "delete",
            "url": "/tasks/:id",
            "title": "Remove a task",
            "group": "Tasks",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "id",
                        "optional": false,
                        "field": "id",
                        "description": "<p>Task id</p>"
                    }]
                }
            },
            "success": {
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 204 No Content",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Delete error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/tasks.js",
            "groupTitle": "Tasks",
            "name": "DeleteTasksId"
        },
        {
            "type": "get",
            "url": "/tasks",
            "title": "List the user's tasks",
            "group": "Tasks",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Object[]",
                            "optional": false,
                            "field": "tasks",
                            "description": "<p>Task's list</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "tasks.id",
                            "description": "<p>Task id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "tasks.title",
                            "description": "<p>Task title</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Boolean",
                            "optional": false,
                            "field": "tasks.done",
                            "description": "<p>Task is done?</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "tasks.updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "tasks.created_at",
                            "description": "<p>Register's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "tasks.user_id",
                            "description": "<p>User id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"done\": false,\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"user_id\": 1\n}]",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "List error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/tasks.js",
            "groupTitle": "Tasks",
            "name": "GetTasks"
        },
        {
            "type": "get",
            "url": "/tasks/:id",
            "title": "Get a task",
            "group": "Tasks",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "id",
                        "optional": false,
                        "field": "id",
                        "description": "<p>Task id</p>"
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>Task id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>Task title</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Boolean",
                            "optional": false,
                            "field": "done",
                            "description": "<p>Task is done?</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "created_at",
                            "description": "<p>Register's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "user_id",
                            "description": "<p>User id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"done\": false\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"user_id\": 1\n}",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                        "title": "Task not found error",
                        "content": "HTTP/1.1 404 Not Found",
                        "type": "json"
                    },
                    {
                        "title": "Find error",
                        "content": "HTTP/1.1 412 Precondition Failed",
                        "type": "json"
                    }
                ]
            },
            "version": "0.0.0",
            "filename": "routes/tasks.js",
            "groupTitle": "Tasks",
            "name": "GetTasksId"
        },
        {
            "type": "post",
            "url": "/tasks",
            "title": "Register a new task",
            "group": "Tasks",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "optional": false,
                        "field": "title",
                        "description": "<p>Task title</p>"
                    }]
                },
                "examples": [{
                    "title": "Input",
                    "content": "{\"title\": \"Study\"}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>Task id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>Task title</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Boolean",
                            "optional": false,
                            "field": "done",
                            "description": "<p>false Task is done?</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "created_at",
                            "description": "<p>Register's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "user_id",
                            "description": "<p>User id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"done\": false,\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"user_id\": 1\n}",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Register error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/tasks.js",
            "groupTitle": "Tasks",
            "name": "PostTasks"
        },
        {
            "type": "put",
            "url": "/tasks/:id",
            "title": "Update a task",
            "group": "Tasks",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "id",
                            "optional": false,
                            "field": "id",
                            "description": "<p>Task id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>Task title</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Boolean",
                            "optional": false,
                            "field": "done",
                            "description": "<p>Task is done?</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Input",
                    "content": "{\n  \"title\": \"Work\",\n  \"done\": true\n}",
                    "type": "json"
                }]
            },
            "success": {
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 204 No Content",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Update error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/tasks.js",
            "groupTitle": "Tasks",
            "name": "PutTasksId"
        },
        {
            "type": "delete",
            "url": "/user",
            "title": "Deletes an authenticated user",
            "group": "User",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "success": {
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 204 No Content",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Delete error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/users.js",
            "groupTitle": "User",
            "name": "DeleteUser"
        },
        {
            "type": "get",
            "url": "/user",
            "title": "Return the authenticated user's data",
            "group": "User",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>User id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "fistname",
                            "description": "<p>User first name</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "lastname",
                            "description": "<p>User last name</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "username",
                            "description": "<p>User username</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "profession",
                            "description": "<p>User profession</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "email",
                            "description": "<p>User email</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "phoneNumber",
                            "description": "<p>User phoneNumber</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "stars",
                            "description": "<p>User stars</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "dob",
                            "description": "<p>User date of birth</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "facebookId",
                            "description": "<p>User facebook Id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "linkedInId",
                            "description": "<p>User linkedIn Id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"firstname\": \"John\"\n  \"lastname\": \"Connor\",\n  \"profession\": \"Carpenter\"\n  \"email\": \"JohnConnor@mail.net\"\n  \"stars\": \"2\"\n  \"phoneNumber\": \"+0000000000000\"\n  \"dob\":\"2005-07-02\"\n  \"facebookId\":\"johnConnor\"\n  \"linkedInId\":\"johnconnor\"\n}",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Find error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/users.js",
            "groupTitle": "User",
            "name": "GetUser"
        },
        {
            "type": "post",
            "url": "/users",
            "title": "Register a new user",
            "group": "User",
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>User id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "fistname",
                            "description": "<p>User first name</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "lastname",
                            "description": "<p>User last name</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "username",
                            "description": "<p>User username</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "profession",
                            "description": "<p>User profession</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "email",
                            "description": "<p>User email</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "phoneNumber",
                            "description": "<p>User phoneNumber</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "stars",
                            "description": "<p>User stars</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "dob",
                            "description": "<p>User date of birth</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "facebookId",
                            "description": "<p>User facebook Id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "linkedInId",
                            "description": "<p>User linkedIn Id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Input",
                    "content": " {\n  \"id\": 1,\n  \"firstname\": \"John\"\n  \"lastname\": \"Connor\",\n  \"profession\": \"Carpenter\"\n  \"email\": \"JohnConnor@mail.net\"\n  \"stars\": \"2\"\n  \"password\": \"ProjectA\",\n  \"phoneNumber\": \"+0000000000000\"\n  \"dob\":\"2005-07-02\"\n  \"facebookId\":\"johnConnor\"\n  \"linkedInId\":\"johnconnor\"\n}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>User id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "fistname",
                            "description": "<p>User first name</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "lastname",
                            "description": "<p>User last name</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "username",
                            "description": "<p>User username</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "profession",
                            "description": "<p>User profession</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "email",
                            "description": "<p>User email</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "phoneNumber",
                            "description": "<p>User phoneNumber</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "stars",
                            "description": "<p>User stars</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "dob",
                            "description": "<p>User date of birth</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "facebookId",
                            "description": "<p>User facebook Id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "linkedInId",
                            "description": "<p>User linkedIn Id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "password",
                            "description": "<p>User encrypted password</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "created_at",
                            "description": "<p>Register's date</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "   HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"firstname\": \"John\"\n     \"lastname\": \"Connor\",\n     \"profession\": \"Carpenter\"\n     \"email\": \"JohnConnor@mail.net\"\n     \"stars\": \"2\"\n     \"password\": \"$2a$10$SK1B1\",\n     \"phoneNumber\": \"+0000000000000\"\n     \"dob\":\"2005-07-02\"\n     \"facebookId\":\"johnConnor\"\n     \"linkedInId\":\"johnconnor\"\n   }",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Register error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/users.js",
            "groupTitle": "User",
            "name": "PostUsers"
        },
        {
            "type": "delete",
            "url": "/project/:id",
            "title": "Remove a Project",
            "group": "project",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "id",
                        "optional": false,
                        "field": "id",
                        "description": "<p>Project id</p>"
                    }]
                }
            },
            "success": {
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 204 No Content",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Delete error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/project.js",
            "groupTitle": "project",
            "name": "DeleteProjectId"
        },
        {
            "type": "get",
            "url": "/project",
            "title": "List the user's project",
            "group": "project",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Object[]",
                            "optional": false,
                            "field": "project",
                            "description": "<p>Project's list</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "project.id",
                            "description": "<p>Project id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "project.title",
                            "description": "<p>Project title</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "project.content",
                            "description": "<p>Project content</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Boolean",
                            "optional": false,
                            "field": "project.solved",
                            "description": "<p>Project is solved?</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "project.pay",
                            "description": "<p>Project pay</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "project.upvotes",
                            "description": "<p>Project upvotes</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "project.downvotes",
                            "description": "<p>Project downvotes</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "project.updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "project.created_at",
                            "description": "<p>Register's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "project.user_id",
                            "description": "<p>User id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"solved\": false,\n  \"content\": \"Nice project\"\n  \"pay\": \"70000\"\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"user_id\": 1\n}]",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "List error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/project.js",
            "groupTitle": "project",
            "name": "GetProject"
        },
        {
            "type": "get",
            "url": "/project/:id",
            "title": "Get a Project",
            "group": "project",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>Project id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>Project title</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "content",
                            "description": "<p>Project content</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Boolean",
                            "optional": false,
                            "field": "solved",
                            "description": "<p>Project is solved?</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "pay",
                            "description": "<p>Project pay</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "upvotes",
                            "description": "<p>Project upvotes</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "downvotes",
                            "description": "<p>Project downvotes</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "created_at",
                            "description": "<p>Register's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "user_id",
                            "description": "<p>User id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"solved\": false,\n  \"content\": \"Nice project\"\n  \"pay\": \"70000\"\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"user_id\": 1\n}",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                        "title": "Project not found error",
                        "content": "HTTP/1.1 404 Not Found",
                        "type": "json"
                    },
                    {
                        "title": "Find error",
                        "content": "HTTP/1.1 412 Precondition Failed",
                        "type": "json"
                    }
                ]
            },
            "version": "0.0.0",
            "filename": "routes/project.js",
            "groupTitle": "project",
            "name": "GetProjectId"
        },
        {
            "type": "post",
            "url": "/project",
            "title": "Register a new Project",
            "group": "project",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "optional": false,
                        "field": "title",
                        "description": "<p>Project title</p>"
                    }]
                },
                "examples": [{
                    "title": "Input",
                    "content": "{\"title\": \"Study\"}",
                    "type": "json"
                }]
            },
            "success": {
                "fields": {
                    "Success 200": [{
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "id",
                            "description": "<p>Project id</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>Project title</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Boolean",
                            "optional": false,
                            "field": "solved",
                            "description": "<p>false Project is solved?</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "content",
                            "description": "<p>Project content</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "pay",
                            "description": "<p>Project pay</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "upvotes",
                            "description": "<p>Project upvotes</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "downvotes",
                            "description": "<p>Project downvotes</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "updated_at",
                            "description": "<p>Update's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Date",
                            "optional": false,
                            "field": "created_at",
                            "description": "<p>Register's date</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "user_id",
                            "description": "<p>User id</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"solved\": false,\n  \"content\": \"Nice project\"\n  \"pay\": \"70000\"\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\",\n  \"user_id\": 1\n}",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Register error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/project.js",
            "groupTitle": "project",
            "name": "PostProject"
        },
        {
            "type": "put",
            "url": "/project/:id",
            "title": "Update a Project",
            "group": "project",
            "header": {
                "fields": {
                    "Header": [{
                        "group": "Header",
                        "type": "String",
                        "optional": false,
                        "field": "Authorization",
                        "description": "<p>Token of authenticated user</p>"
                    }]
                },
                "examples": [{
                    "title": "Header",
                    "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
                    "type": "json"
                }]
            },
            "parameter": {
                "fields": {
                    "Parameter": [{
                            "group": "Parameter",
                            "type": "id",
                            "optional": false,
                            "field": "id",
                            "description": "<p>Project id</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "title",
                            "description": "<p>Project title</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Boolean",
                            "optional": false,
                            "field": "solved",
                            "description": "<p>Project is solved?</p>"
                        }
                    ]
                },
                "examples": [{
                    "title": "Input",
                    "content": "{\n  \"title\": \"Work\",\n  \"solved\": true\n}",
                    "type": "json"
                }]
            },
            "success": {
                "examples": [{
                    "title": "Success",
                    "content": "HTTP/1.1 204 No Content",
                    "type": "json"
                }]
            },
            "error": {
                "examples": [{
                    "title": "Update error",
                    "content": "HTTP/1.1 412 Precondition Failed",
                    "type": "json"
                }]
            },
            "version": "0.0.0",
            "filename": "routes/project.js",
            "groupTitle": "project",
            "name": "PutProjectId"
        }
    ]
});