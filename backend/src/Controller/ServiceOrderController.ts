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
      const serviceOrder = await this.serviceOrderService.createServiceOrder(request.body as ServiceOrder);

      return response.status(201).json({ serviceOrder });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

  listServiceOrder: RequestHandler = async (request, response) => {
    try {
      const clientId = response.locals.user.userId;
      const serviceOrderFilter = request.body as Partial<ServiceOrder>
      const serviceOrders = await this.serviceOrderService.listServiceOrder({ ...serviceOrderFilter, clientId });

      return response.status(200).json({ serviceOrders });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };
}