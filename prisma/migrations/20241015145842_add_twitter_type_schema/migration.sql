/*
  Warnings:

  - A unique constraint covering the columns `[phoneNum]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[photo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNum` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('CREATED', 'HIDDEN', 'ACCEPTED', 'DELETE');

-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('DONOR', 'ACCEPTOR');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "latitude" TEXT,
ADD COLUMN     "longitude" TEXT,
ADD COLUMN     "phoneNum" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "role" "ROLE" NOT NULL;

-- CreateTable
CREATE TABLE "Donor" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acceptor" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Acceptor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tweet" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "donorId" TEXT NOT NULL,
    "tweetId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("donorId","tweetId")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "authorId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "status" "STATUS" NOT NULL,
    "acceptedDonorId" TEXT,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("authorId")
);

-- CreateTable
CREATE TABLE "_Followers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Donor_id_key" ON "Donor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Acceptor_id_key" ON "Acceptor"("id");

-- CreateIndex
CREATE INDEX "Tweet_donorId_idx" ON "Tweet"("donorId");

-- CreateIndex
CREATE UNIQUE INDEX "Tweet_id_createdAt_key" ON "Tweet"("id", "createdAt");

-- CreateIndex
CREATE INDEX "Like_donorId_idx" ON "Like"("donorId");

-- CreateIndex
CREATE INDEX "Like_tweetId_idx" ON "Like"("tweetId");

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_authorId_key" ON "Proposal"("authorId");

-- CreateIndex
CREATE INDEX "Proposal_acceptedDonorId_idx" ON "Proposal"("acceptedDonorId");

-- CreateIndex
CREATE UNIQUE INDEX "_Followers_AB_unique" ON "_Followers"("A", "B");

-- CreateIndex
CREATE INDEX "_Followers_B_index" ON "_Followers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNum_key" ON "User"("phoneNum");

-- CreateIndex
CREATE UNIQUE INDEX "User_photo_key" ON "User"("photo");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");

-- CreateIndex
CREATE INDEX "User_phoneNum_idx" ON "User"("phoneNum");

-- AddForeignKey
ALTER TABLE "Donor" ADD CONSTRAINT "Donor_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acceptor" ADD CONSTRAINT "Acceptor_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Acceptor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_acceptedDonorId_fkey" FOREIGN KEY ("acceptedDonorId") REFERENCES "Donor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_A_fkey" FOREIGN KEY ("A") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_B_fkey" FOREIGN KEY ("B") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
