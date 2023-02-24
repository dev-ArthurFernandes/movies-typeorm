import {
    Entity, 
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('movies')
class Movies{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    duration: number

    @Column()
    price: number

}

export {
    Movies
}

