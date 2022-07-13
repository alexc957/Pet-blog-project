"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
router.get("/:id", function (req, res) {
    res.json({ message: "get /id" });
});
router.get("/", function (req, res) {
    res.json([]);
});
router.post("/", function (req, res) {
    res.json({});
});
router.put("/:id", function (req, res) {
    res.json({});
});
exports["default"] = router;
//# sourceMappingURL=index.js.map