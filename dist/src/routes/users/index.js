"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var users_controllers_1 = __importDefault(require("./users.controllers"));
var router = express_1["default"].Router();
router.get("/:id", users_controllers_1["default"].getOne);
router.get("/", users_controllers_1["default"].getAll);
router.post("/", users_controllers_1["default"].addOne);
router.put("/:id", users_controllers_1["default"].updateOne);
exports["default"] = router;
//# sourceMappingURL=index.js.map