import { IServiceOrderService } from "../Service/ServiceOrder/IServiceOrderService";
import ServiceOrderServiceFactory from "./ServiceOrderServiceFactory";
import ServiceOrderController from "../Controller/ServiceOrderController";

export default class ServiceOrderControllerFactory {
  static make(serviceOrderService?: IServiceOrderService) {
    const serviceInstance = serviceOrderService || ServiceOrderServiceFactory.make();
    return new ServiceOrderController(serviceInstance);
  }
}