import { IServiceOrderService } from "../Service/ServiceOrder/IServiceOrderService";
import { RequestHandler } from "express";
import ServiceOrder from "../Domain/entities/ServiceOrder";

export default class ServiceOrderController {
  private serviceOrderService: IServiceOrderService;

  constructor(serviceOrderService: IServiceOrderService) {
    this.serviceOrderService = serviceOrderService;
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

      return response.status(200).json({ serviceOrders });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };
}