"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorial_controller_1 = __importDefault(require("../controllers/tutorial.controller"));
const library_controller_1 = __importDefault(require("../controllers/library.controller"));
const router = (0, express_1.Router)();
router.post("/tutorial", tutorial_controller_1.default);
router.post("/codelibrary", library_controller_1.default);
exports.default = router;
