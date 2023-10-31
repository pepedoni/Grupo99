import ServiceOrderService from "../Service/ServiceOrder/ServiceOrderService";
import ServiceOrder from "../Domain/entities/ServiceOrder";
import { AppDataSource } from "../infrastructure/persistence/Database";
import { Repository } from "typeorm";

export default class ServiceOrderServiceFactory {
  static make(serviceOrderRepository?: Repository<ServiceOrder>) {
    const serviceOrderRepositoryInstance = serviceOrderRepository || AppDataSource.getRepository(ServiceOrder);
    return new ServiceOrderService(serviceOrderRepositoryInstance);
  }
}