export default interface IEmailService {
    sendEmail(serviceOrderId: number): Promise<void>;
}