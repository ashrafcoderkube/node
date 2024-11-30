"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const tutorial_route_1 = __importDefault(require("./routes/tutorial.route"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", tutorial_route_1.default);
app.get("/health", (req, res) => {
    res.send("server started");
    return;
});
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
