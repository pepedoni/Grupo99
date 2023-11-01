import { RequestHandler } from "express";
import { IQuoteService } from "../Service/Quote/IQuoteServiceService";
import Quote from "../Domain/entities/Quote";

export default class QuoteController {
  private quoteService: IQuoteService;

  constructor(quoteService: IQuoteService) {
    this.quoteService = quoteService;
  }

  createQuote: RequestHandler = async (request, response) => {
    try {
      const quoteData = request.body as Quote;

      const quote = await this.quoteService.createQuote(quoteData, response.locals.user.userId)

      return response.status(201).json(quote);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

  listQuote: RequestHandler = async (request, response) => {
    try {
      const quoteFilter = request.query as Partial<Quote>

      const quotes = await this.quoteService.listQuote(quoteFilter);

      return response.status(200).json({ quotes });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };
}