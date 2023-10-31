import Quote from "../../Domain/entities/Quote";

export interface IQuoteService {
  createQuote(quote: Quote, orderId: number): Promise<Quote>
}