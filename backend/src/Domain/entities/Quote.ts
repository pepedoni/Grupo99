import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import ServiceOrder from "./ServiceOrder";

@Entity('Quote')
export default class Quote {
  constructor(id: number,
    value: number,
    hoursExpected: number,
    status: "waiting" | "approved" | "disapproved",
    serviceOrder: ServiceOrder,
  ) {
    this.id = id;
    this.value = value;
    this.hoursExpected = hoursExpected;
    this.status = status;
    this.serviceOrder = serviceOrder;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) 
  value: number;

  @Column({ type: 'int' })
  hoursExpected: number;

  @Column({ type: 'varchar', length: '30' })
  status: "waiting" | "approved" | "disapproved";

  @OneToOne(() => ServiceOrder)
  @JoinColumn()
  serviceOrder: ServiceOrder;

}