/*
  Warnings:

  - You are about to drop the column `productoId` on the `categoria` table. All the data in the column will be lost.
  - Made the column `imagen` on table `producto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `categoria` DROP COLUMN `productoId`;

-- AlterTable
ALTER TABLE `producto` MODIFY `imagen` VARCHAR(191) NOT NULL;
