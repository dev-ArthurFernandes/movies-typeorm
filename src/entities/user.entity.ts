import {
    Entity, 
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('movies')
class Movies{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50, unique: true })
    name: string

    @Column({ type: 'text', nullable: true })
    description?: string | undefined |  null

    @Column()
    duration: number

    @Column()
    price: number

}

export {
    Movies
}

