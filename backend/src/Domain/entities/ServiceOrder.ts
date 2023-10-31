import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ServiceOrder')
export default class ServiceOrder {
  constructor(id: number,
    device: string,
    problemDescription: string,
    status: "waitingApproval" | "refused" | "repairing" | "finished",
  ) {
    this.id = id;
    this.device = device;
    this.problemDescription = problemDescription;
    this.status = status;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '255' })
  device: string;

  @Column({ type: 'varchar', length: '255' })
  problemDescription: string;

  @Column({ type: 'varchar', length: '15' })
  status: "waitingApproval" | "refused" | "repairing" | "finished";
}