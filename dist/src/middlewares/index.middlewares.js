"use strict";
exports.__esModule = true;
var indexMiddlewares = {
    logRequests: function (req, res, next) {
        var message = "".concat(req.method, " ").concat(req.path, " - ").concat(req.ip);
        console.log(message);
        next();
    }
};
exports["default"] = indexMiddlewares;
//# sourceMappingURL=index.middlewares.js.map