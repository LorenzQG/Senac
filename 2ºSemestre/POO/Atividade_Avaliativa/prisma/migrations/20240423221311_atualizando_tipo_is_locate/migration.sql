/*
  Warnings:

  - You are about to alter the column `isLocate` on the `quadra` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `quadra` MODIFY `isLocate` VARCHAR(191) NOT NULL;
