/*
  Warnings:

  - You are about to drop the column `owner_id` on the `Board` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_owner_id_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "owner_id",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Project" (
    "project_id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Untitled Project',
    "description" TEXT,
    "guest" BOOLEAN NOT NULL,
    "guest_id" TEXT,
    "userId" TEXT,
    "priority" TEXT NOT NULL,
    "members" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Board_projectId_key" ON "Board"("projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;
