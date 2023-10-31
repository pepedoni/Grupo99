import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Quote')
export default class Quote {
  constructor(id: number,
    value: number,
    hoursExpected: number,
    serviceOrderId: number,
  ) {
    this.id = id;
    this.value = value;
    this.hoursExpected = hoursExpected;
    this.serviceOrderId = serviceOrderId;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  value: number;

  @Column({ type: 'int' })
  hoursExpected: number;

  @Column({ type: 'int' })
  serviceOrderId: number;

}