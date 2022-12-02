const jwt = require("jsonwebtoken");

const config = process.env;


module.exports = {
    isAuth: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (!decoded) {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isAgent: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        console.log(req.user);
        if (req.user.role != 'Agent') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isSuperagent: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'Super Agent') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isMaster: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'Master') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isAdmin: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'admin') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isClient: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'client') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isSubadmin: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'Subadmin') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isSuperAdmin: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'Super Admin') {
            return res.status(401).send("Invalid Token");
        } else {
            next();
        }
    },
    isOwner: function (req, res, next) {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        if (req.user.role != 'owner') {
            res.redirect('/power-login');
        } else {
            next();
        }
    }
}