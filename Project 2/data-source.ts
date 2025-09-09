import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'mydb',
    entities: ['dist/src/**/*.entity{.ts,.js}'],
    // migrations: ['dist/src/db/migrations/*{.ts,.js}'],
    synchronize: true,
});

export default appDataSource;