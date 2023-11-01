import ServiceOrder from "Domain/entities/ServiceOrder";
import User from "Domain/entities/User";
import { IServiceOrderService } from "./IServiceOrderService";
import { Repository } from "typeorm";
import EmailService from "../Email/EmailService";

export default class ServiceOrderService implements IServiceOrderService {
  private serviceOrderRepository: Repository<ServiceOrder>;
  private emailService: EmailService = new EmailService();
  private userRepository: Repository<User>;
  constructor(serviceOrderRepository: Repository<ServiceOrder>, userRepository: Repository<User>) {
    this.serviceOrderRepository = serviceOrderRepository;
    this.userRepository = userRepository;
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
    const updateServiceOrder = await this.serviceOrderRepository.findOneBy({ id: serviceOrderId });
    const user = await this.userRepository.findOneBy({ id: updateServiceOrder?.clientId });
    await this.emailService.sendEmail(serviceOrderId, user?.email || '');
    return updateServiceOrder
  }

}