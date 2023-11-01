import ServiceOrder from "Domain/entities/ServiceOrder";
import { IServiceOrderService } from "./IServiceOrderService";
import { Repository } from "typeorm";
import EmailService from "../Email/EmailService";

export default class ServiceOrderService implements IServiceOrderService {
  private serviceOrderRepository: Repository<ServiceOrder>;
  private emailService: EmailService = new EmailService();
  constructor(serviceOrderRepository: Repository<ServiceOrder>) {
    this.serviceOrderRepository = serviceOrderRepository;
  }

  async createServiceOrder(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    serviceOrder.status = 'waitingQuote';
    const createdServiceOrder = this.serviceOrderRepository.create(serviceOrder);
    await this.serviceOrderRepository.save(createdServiceOrder);
    return createdServiceOrder;
  }

  async listServiceOrder(serviceOrderFilter: Partial<ServiceOrder>): Promise<ServiceOrder[]> {
    const serviceOrders = await this.serviceOrderRepository.findBy(serviceOrderFilter);
    return serviceOrders;
  }

  async updateServiceOrder(serviceOrderId: number, serviceOrderData: Partial<ServiceOrder>): Promise<ServiceOrder | null> {
    await this.serviceOrderRepository.update({ id: serviceOrderId }, serviceOrderData);
    await this.emailService.sendEmail(serviceOrderId);
    return await this.serviceOrderRepository.findOneBy({ id: serviceOrderId });
  }

}