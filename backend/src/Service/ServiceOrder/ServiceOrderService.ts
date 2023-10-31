import ServiceOrder from "Domain/entities/ServiceOrder";
import { IServiceOrderService } from "./IServiceOrderService";
import { Repository } from "typeorm";

export default class ServiceOrderService implements IServiceOrderService {
  private serviceOrderRepository: Repository<ServiceOrder>;
  constructor(serviceOrderRepository: Repository<ServiceOrder>) {
    this.serviceOrderRepository = serviceOrderRepository;
  }

  async createServiceOrder(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    serviceOrder.status = 'waitingQuote'
    const createdServiceOrder = this.serviceOrderRepository.create(serviceOrder);
    await this.serviceOrderRepository.save(createdServiceOrder);
    return createdServiceOrder;
  }

  async listServiceOrder(serviceOrderFilter: Partial<ServiceOrder>): Promise<ServiceOrder[]> {
    const createdServiceOrders = this.serviceOrderRepository.findBy(serviceOrderFilter)
    return createdServiceOrders;
  }

}