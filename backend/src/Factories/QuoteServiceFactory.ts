import ServiceOrder from "../Domain/entities/ServiceOrder";
import { AppDataSource } from "../infrastructure/persistence/Database";
import { Repository } from "typeorm";
import Quote from "../Domain/entities/Quote";
import QuoteService from "../Service/Quote/QuoteService";

export default class QuoteServiceFactory {
  static make(quoteRepository?: Repository<Quote>, serviceOrderRepository?: Repository<ServiceOrder>) {
    const serviceOrderRepositoryInstance = serviceOrderRepository || AppDataSource.getRepository(ServiceOrder);
    const quoteRepositoryInstance = quoteRepository || AppDataSource.getRepository(Quote);
    return new QuoteService(quoteRepositoryInstance, serviceOrderRepositoryInstance);
  }
}