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
exports.UpdateDeliveryController = void 0;
const updateDeliveryUseCase_1 = require("./updateDeliveryUseCase");
class UpdateDeliveryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_delivery } = req.params;
            const { id_deliveryman } = req;
            const updateDeliveryUseCase = new updateDeliveryUseCase_1.UpdateDeliveryUseCase();
            const result = yield updateDeliveryUseCase.execute({
                id_delivery,
                id_deliveryman,
            });
            return res.json(result);
        });
    }
}
exports.UpdateDeliveryController = UpdateDeliveryController;
//# sourceMappingURL=updateDeliveryController.js.map