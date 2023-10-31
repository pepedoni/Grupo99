import { IQuoteService } from "../Service/Quote/IQuoteServiceService";
import QuoteServiceFactory from "./QuoteServiceFactory";
import QuoteController from "../Controller/QuoteController";

export default class QuoteControllerFactory {
  static make(quoteService?: IQuoteService) {
    const serviceInstance = quoteService || QuoteServiceFactory.make();
    return new QuoteController(serviceInstance);
  }
}