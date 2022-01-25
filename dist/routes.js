"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const confirmAuthenticateClient_1 = require("./middleware/confirmAuthenticateClient");
const confirmAuthenticateDeliveryman_1 = require("./middleware/confirmAuthenticateDeliveryman");
const createClientController_1 = require("./modules/clients/useCases/createClients/createClientController");
const createDeliverymanController_1 = require("./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController");
const authenticateClientController_1 = require("./modules/accounts/useCases/authenticateClient/authenticateClientController");
const createDeliveryController_1 = require("./modules/deliveries/useCase/createDelivery/createDeliveryController");
const authenticateDeliverymanController_1 = require("./modules/accounts/useCases/authenticateDeliveryman/authenticateDeliverymanController");
const findAllWithoutDeliverymanController_1 = require("./modules/deliveries/useCase/findAllWithoutDeliveryman/findAllWithoutDeliverymanController");
const updateDeliveryController_1 = require("./modules/deliveries/useCase/updateDelivery/updateDeliveryController");
const findAllDeliverymanController_1 = require("./modules/deliveryman/useCases/findAllDeliveryman/findAllDeliverymanController");
const findAllDeliveriesClientController_1 = require("./modules/clients/useCases/findAllDeliveriesClient/findAllDeliveriesClientController");
const updateEndDateController_1 = require("./modules/deliveries/useCase/updateEndDate/updateEndDateController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const createClientController = new createClientController_1.CreateClientController();
const authenticateClientController = new authenticateClientController_1.AuthenticateClientController();
const createDeliveryController = new createDeliveryController_1.CreateDeliveryController();
const createDeliverymanController = new createDeliverymanController_1.CreateDeliverymanController();
const authenticateDeliverymanController = new authenticateDeliverymanController_1.AuthenticateDeliverymanController();
const findAllWithoutDeliverymanController = new findAllWithoutDeliverymanController_1.FindAllWithoutDeliverymanController();
const updateDeliveryController = new updateDeliveryController_1.UpdateDeliveryController();
const findAllDeliverymanController = new findAllDeliverymanController_1.FindAllDeliverymanController();
const findAllDeliveriesClientController = new findAllDeliveriesClientController_1.FindAllDeliveriesClientController();
const updateEndDateController = new updateEndDateController_1.UpdateEndDateController();
routes.post("/clients", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.post("/clients/authenticate", authenticateClientController.handle);
routes.post("/deliveries", confirmAuthenticateClient_1.confirmAuthenticateCLient, createDeliveryController.handle);
routes.get("/deliveries/available", confirmAuthenticateDeliveryman_1.confirmAuthenticateDeliveryman, findAllWithoutDeliverymanController.handle);
routes.put("/deliveries/updateDelivery/:id_delivery", confirmAuthenticateDeliveryman_1.confirmAuthenticateDeliveryman, updateDeliveryController.handle);
routes.get("/deliveryman/deliveries", confirmAuthenticateDeliveryman_1.confirmAuthenticateDeliveryman, findAllDeliverymanController.handle);
routes.get("/clients/deliveries", confirmAuthenticateClient_1.confirmAuthenticateCLient, findAllDeliveriesClientController.handle);
routes.put("/deliveries/updateEndAt/:id_delivery", confirmAuthenticateDeliveryman_1.confirmAuthenticateDeliveryman, updateEndDateController.handle);
//# sourceMappingURL=routes.js.map