"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "Olá Turma" });
});
app.use(routes_1.routes);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ message: "Erro interno" });
});
app.listen(process.env.PORT || "3331", () => console.log("Servidor"));
//# sourceMappingURL=server.js.map