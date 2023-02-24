import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';

const dataSourceConfig = (): DataSourceOptions => {

    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}') 

    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}') 

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl){
        throw new Error("Env var DATABASE_URL does not exists!")
    }

    return{
        type: 'postgres',
        url: process.env.DATABASE_URL!,
        synchronize: false,
        logging: true,
        migrations: [entitiesPath],
        entities: [migrationsPath]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export {
    AppDataSource
}