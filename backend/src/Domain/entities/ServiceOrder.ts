import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ServiceOrder')
export default class ServiceOrder {
  constructor(id: number,
    device: string,
    problemDescription: string,
    status: "waitingQuote" | "waitingApproval" | "refused" | "repairing" | "finished" | "delivered",
    clientId: number,
    employeeId?: number
  ) {
    this.id = id;
    this.device = device;
    this.problemDescription = problemDescription;
    this.status = status;
    this.clientId = clientId;
    this.employeeId = employeeId;
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

  @Column({ type: 'int', nullable: true })
  employeeId?: number
}