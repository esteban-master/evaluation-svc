/*
  Warnings:

  - You are about to drop the column `studentId` on the `Evaluation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_studentId_fkey";

-- AlterTable
ALTER TABLE "Evaluation" DROP COLUMN "studentId";
