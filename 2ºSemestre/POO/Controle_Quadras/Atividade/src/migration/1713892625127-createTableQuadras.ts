import { table } from "console";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableQuadras1713892625127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"quadras",
            columns:[
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false, 
                },
                {
                    name: "type",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "isLocate",
                    type: "binary",
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
