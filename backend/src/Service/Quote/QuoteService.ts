import ServiceOrder from "Domain/entities/ServiceOrder";
import { IQuoteService } from "./IQuoteServiceService";
import { Repository } from "typeorm";
import Quote from "Domain/entities/Quote";

export default class QuoteService implements IQuoteService {
  private quoteRepository: Repository<Quote>;
  private serviceOrderRepository: Repository<ServiceOrder>
  constructor(quoteRepository: Repository<Quote>, serviceOrderRepository: Repository<ServiceOrder>) {
    this.quoteRepository = quoteRepository;
    this.serviceOrderRepository = serviceOrderRepository;
  }
  public async createQuote(quote: Quote, employeeId: number): Promise<Quote> {
    const createdQuote = await this.quoteRepository.create(quote);

    await this.serviceOrderRepository.update({ id: quote.serviceOrderId }, { status: "waitingApproval", employeeId });

    return await this.quoteRepository.save(createdQuote);
  }

  public async listQuote(listQuote: Partial<Quote>): Promise<Quote[]> {
    const quotes = await this.quoteRepository.findBy(listQuote)
    return quotes;
  }

}