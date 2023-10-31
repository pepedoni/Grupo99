import { IServiceOrderService } from "../Service/ServiceOrder/IServiceOrderService";
import ServiceOrderServiceFactory from "./ServiceOrderServiceFactory";
import ServiceOrderController from "../Controller/ServiceOrderController";
import { IQuoteService } from "../Service/Quote/IQuoteServiceService";
import QuoteServiceFactory from "./QuoteServiceFactory";

export default class ServiceOrderControllerFactory {
  static make(serviceOrderService?: IServiceOrderService, quoteService?: IQuoteService) {
    const serviceInstance = serviceOrderService || ServiceOrderServiceFactory.make();
    const quoteServiceInstance = quoteService || QuoteServiceFactory.make();
    return new ServiceOrderController(serviceInstance, quoteServiceInstance);
  }
}