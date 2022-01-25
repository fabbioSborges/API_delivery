"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmAuthenticateDeliveryman = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function confirmAuthenticateDeliveryman(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Token não informado" });
        }
        const [bearer, token] = authHeader.split(" ");
        try {
            const tokenMatch = (0, jsonwebtoken_1.verify)(token, "chavesecretadeliveryman");
            req.id_deliveryman = tokenMatch.sub;
            return next();
        }
        catch (err) {
            return res.status(401).json({ message: "Token invalido" });
        }
    });
}
exports.confirmAuthenticateDeliveryman = confirmAuthenticateDeliveryman;
//# sourceMappingURL=confirmAuthenticateDeliveryman.js.map