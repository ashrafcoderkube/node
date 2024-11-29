"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const tutorial_route_1 = __importDefault(require("./routes/tutorial.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", tutorial_route_1.default);
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
