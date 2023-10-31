import { IServiceOrderService } from "../Service/ServiceOrder/IServiceOrderService";
import { RequestHandler } from "express";
import ServiceOrder from "../Domain/entities/ServiceOrder";
import { IQuoteService } from "../Service/Quote/IQuoteServiceService";

export default class ServiceOrderController {
  private serviceOrderService: IServiceOrderService;
  private quoteService: IQuoteService;

  constructor(serviceOrderService: IServiceOrderService, quoteService: IQuoteService) {
    this.serviceOrderService = serviceOrderService;
    this.quoteService = quoteService;
  }

  createServiceOrder: RequestHandler = async (request, response) => {
    try {
      const serviceOrderData = request.body as ServiceOrder;
      if (response.locals.user.type == "client") {
        serviceOrderData.clientId = response.locals.user.userId;
      }
      const serviceOrder = await this.serviceOrderService.createServiceOrder(serviceOrderData);

      return response.status(201).json(serviceOrder);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

  listServiceOrder: RequestHandler = async (request, response) => {
    try {
      const serviceOrderFilter = request.query as Partial<ServiceOrder>

      if (response.locals.user.type == "client") {
        serviceOrderFilter.clientId = response.locals.user.userId;
      }
      const serviceOrders = await this.serviceOrderService.listServiceOrder(serviceOrderFilter);
      const hidratedServiceOrders = await Promise.all(serviceOrders.map(async (OS) => {
        const quotes = await this.quoteService.listQuote({ serviceOrderId: OS.id });
        return { ...OS, quote: quotes[0] }
      }))

      return response.status(200).json({ serviceOrders: hidratedServiceOrders });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };
}