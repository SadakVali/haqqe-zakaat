/*
  Warnings:

  - The `latitude` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `longitude` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "latitude",
ADD COLUMN     "latitude" BIGINT,
DROP COLUMN "longitude",
ADD COLUMN     "longitude" BIGINT;
