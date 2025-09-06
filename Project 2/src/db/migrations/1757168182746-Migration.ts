import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1757168182746 implements MigrationInterface {
    name = 'Migration1757168182746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "second_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "second_name"`);
    }

}
