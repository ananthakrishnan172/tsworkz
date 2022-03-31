import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity() 
export class Aapl{
    @PrimaryColumn()
    date:string;

    @Column()
    open:string;

    @Column()
    high:string;

    @Column()
    low:string;

    @Column()
    close: string;

    @Column()
    adjclose:string;
    
    @Column()
    volume:string;
}