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
exports.FindAllDeliveriesClientController = void 0;
const findAllDeliveriesClientUseCase_1 = require("./findAllDeliveriesClientUseCase");
class FindAllDeliveriesClientController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_client } = req;
            const findAllDeliveriesClientUseCase = new findAllDeliveriesClientUseCase_1.FindAllDeliveriesClientUseCase();
            console.log(id_client);
            const result = yield findAllDeliveriesClientUseCase.execute(id_client);
            return res.json(result);
        });
    }
}
exports.FindAllDeliveriesClientController = FindAllDeliveriesClientController;
//# sourceMappingURL=findAllDeliveriesClientController.js.map