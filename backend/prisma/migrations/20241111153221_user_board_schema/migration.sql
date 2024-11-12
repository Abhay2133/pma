/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Board` table. All the data in the column will be lost.
  - The primary key for the `List` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `List` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - The required column `board_id` was added to the `Board` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `board_name` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Board` table without a default value. This is not possible if the table is not empty.
  - The required column `list_id` was added to the `List` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `list_name` to the `List` table without a default value. This is not possible if the table is not empty.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_boardId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignedToId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_listId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "id",
DROP COLUMN "ownerId",
DROP COLUMN "title",
ADD COLUMN     "board_id" TEXT NOT NULL,
ADD COLUMN     "board_name" TEXT NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("board_id");

-- AlterTable
ALTER TABLE "List" DROP CONSTRAINT "List_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "list_id" TEXT NOT NULL,
ADD COLUMN     "list_name" TEXT NOT NULL,
ADD CONSTRAINT "List_pkey" PRIMARY KEY ("list_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- DropTable
DROP TABLE "Task";

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("board_id") ON DELETE RESTRICT ON UPDATE CASCADE;
