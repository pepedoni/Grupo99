export default interface IEmailService {
    sendEmail(serviceOrderId: number, clientEmail: string): Promise<void>;
}