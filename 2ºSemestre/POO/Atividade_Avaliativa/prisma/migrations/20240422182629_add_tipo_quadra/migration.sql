/*
  Warnings:

  - Added the required column `tipo` to the `Quadra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quadra` ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
