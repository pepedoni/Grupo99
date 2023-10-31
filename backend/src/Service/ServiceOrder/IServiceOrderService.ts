import ServiceOrder from "../../Domain/entities/ServiceOrder";

export interface IServiceOrderService {
  createServiceOrder(serviceOrder: ServiceOrder): Promise<ServiceOrder>;
  listServiceOrder(serviceOrderFilter: Partial<ServiceOrder>): Promise<ServiceOrder[]>;
}