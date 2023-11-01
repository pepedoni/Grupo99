import ServiceOrderService from "../Service/ServiceOrder/ServiceOrderService";
import ServiceOrder from "../Domain/entities/ServiceOrder";
import User from "../Domain/entities/User";
import { AppDataSource } from "../infrastructure/persistence/Database";
import { Repository } from "typeorm";

export default class ServiceOrderServiceFactory {
  static make(serviceOrderRepository?: Repository<ServiceOrder>, userRepository?: Repository<User>) {
    const serviceOrderRepositoryInstance = serviceOrderRepository || AppDataSource.getRepository(ServiceOrder);
    const userRepositoryInstance = userRepository || AppDataSource.getRepository(User);
    return new ServiceOrderService(serviceOrderRepositoryInstance, userRepositoryInstance);
  }
}