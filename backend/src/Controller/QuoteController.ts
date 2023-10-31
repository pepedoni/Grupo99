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
      const serviceOrderId = Number(request.params.serviceOrderId);

      const quote = await this.quoteService.createQuote(quoteData, serviceOrderId)

      return response.status(201).json(quote);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

  // listServiceOrder: RequestHandler = async (request, response) => {
  //   try {
  //     const serviceOrderFilter = request.query as Partial<ServiceOrder>

  //     if (response.locals.user.type == "client") {
  //       serviceOrderFilter.clientId = response.locals.user.userId;
  //     }
  //     const serviceOrders = await this.serviceOrderService.listServiceOrder(serviceOrderFilter);

  //     return response.status(200).json({ serviceOrders });
  //   } catch (error: any) {
  //     return response.status(400).json({ error: error.message });
  //   }
  // };
}