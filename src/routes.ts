import { Router } from "express";

import { confirmAuthenticateCLient } from "./middleware/confirmAuthenticateClient";
import { confirmAuthenticateDeliveryman } from "./middleware/confirmAuthenticateDeliveryman";

import { CreateClientController } from "./modules/clients/useCases/createClients/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { AuthenticateClientController } from "./modules/accounts/useCases/authenticateClient/authenticateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCase/createDelivery/createDeliveryController";
import { AuthenticateDeliverymanController } from "./modules/accounts/useCases/authenticateDeliveryman/authenticateDeliverymanController";
import { FindAllWithoutDeliverymanController } from "./modules/deliveries/useCase/findAllWithoutDeliveryman/findAllWithoutDeliverymanController";
import { UpdateDeliveryController } from "./modules/deliveries/useCase/updateDelivery/updateDeliveryController";
import { FindAllDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveryman/findAllDeliverymanController";
import { FindAllDeliveriesClientController } from "./modules/clients/useCases/findAllDeliveriesClient/findAllDeliveriesClientController";
import { UpdateEndDateController } from "./modules/deliveries/useCase/updateEndDate/updateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryController = new CreateDeliveryController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findAllWithoutDeliverymanController =
  new FindAllWithoutDeliverymanController();
const updateDeliveryController = new UpdateDeliveryController();
const findAllDeliverymanController = new FindAllDeliverymanController();
const findAllDeliveriesClientController =
  new FindAllDeliveriesClientController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/clients", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/clients/authenticate", authenticateClientController.handle);

routes.post(
  "/deliveries",
  confirmAuthenticateCLient,
  createDeliveryController.handle
);

routes.get(
  "/deliveries/available",
  confirmAuthenticateDeliveryman,
  findAllWithoutDeliverymanController.handle
);

routes.put(
  "/deliveries/updateDelivery/:id_delivery",
  confirmAuthenticateDeliveryman,
  updateDeliveryController.handle
);

routes.get(
  "/deliveryman/deliveries",
  confirmAuthenticateDeliveryman,
  findAllDeliverymanController.handle
);

routes.get(
  "/clients/deliveries",
  confirmAuthenticateCLient,
  findAllDeliveriesClientController.handle
);

routes.put(
  "/deliveries/updateEndAt/:id_delivery",
  confirmAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { routes };
