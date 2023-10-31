import Quote from "../../Domain/entities/Quote";

export interface IQuoteService {
  createQuote(quote: Quote): Promise<Quote>;
  listQuote(quote: Partial<Quote>): Promise<Quote[]>;
}