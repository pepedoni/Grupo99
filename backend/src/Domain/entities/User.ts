import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export default class User {
  constructor(id: number,
    name: string,
    email: string,
    type: "client" | "employee" | "admin",
    password: string,
    phoneNumber?: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: '255' })
  name: string;

  @Column({ type: 'varchar', length: '255', unique: true })
  email: string;

  @Column({ type: 'varchar', length: '15' })
  type: "client" | "employee" | "admin";

  @Column({ type: 'varchar', length: '30' })
  phoneNumber?: string;

  @Column({ type: 'text' })
  password: string;

}