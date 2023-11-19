"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const router_1 = require("./router");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer((req, res) => {
    (0, router_1.handleRoutes)(req, res);
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
