import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Quote')
export default class Orcamento {
  constructor(id: number,
    value: number,
    hoursExpected: number,
    status: "waiting" | "approved" | "disapproved",
    idOrderOfService: number,
  ) {
    this.id = id;
    this.value = value;
    this.hoursExpected = hoursExpected;
    this.status = status;
    this.idOrderOfService = idOrderOfService;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) 
  value: number;

  @Column({ type: 'int' })
  hoursExpected: number;

  @Column({ type: 'varchar', length: '30' })
  status: "waiting" | "approved" | "disapproved";

  @Column({ type: 'int' })
  idOrderOfService: number;

}