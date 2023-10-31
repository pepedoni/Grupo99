import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import Quote from "./Quote";

@Entity('ServiceOrder')
export default class ServiceOrder {
  constructor(id: number,
    device: string,
    problemDescription: string,
    status: "waitingQuote" | "waitingApproval" | "refused" | "repairing" | "finished" | "delivered",
    clientId: number,
  ) {
    this.id = id;
    this.device = device;
    this.problemDescription = problemDescription;
    this.status = status;
    this.clientId = clientId;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '255' })
  device: string;

  @Column({ type: 'varchar', length: '255' })
  problemDescription: string;

  @Column({ type: 'varchar', length: '15' })
  status: "waitingQuote" | "waitingApproval" | "refused" | "repairing" | "finished" | "delivered";

  @Column({ type: 'int' })
  clientId: number

  @OneToOne(() => Quote, (quote) => quote.serviceOrder)
  quote: Quote | undefined
}