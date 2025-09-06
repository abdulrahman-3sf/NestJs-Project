import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1757168340809 implements MigrationInterface {
    name = 'Migration1757168340809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "second_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "second_name" character varying NOT NULL`);
    }

}
