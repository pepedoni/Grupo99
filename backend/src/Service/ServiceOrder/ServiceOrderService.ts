import ServiceOrder from "Domain/entities/ServiceOrder";
import { IServiceOrderService } from "./IServiceOrderService";
import { Repository } from "typeorm";

export default class ServiceOrderService implements IServiceOrderService {
  private serviceOrderRepository: Repository<ServiceOrder>;
  constructor(serviceOrderRepository: Repository<ServiceOrder>) {
    this.serviceOrderRepository = serviceOrderRepository;
  }

  async createServiceOrder(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    const createdServiceOrder = this.serviceOrderRepository.create(serviceOrder);
    await this.serviceOrderRepository.save(createdServiceOrder);
    return createdServiceOrder;
  }
}