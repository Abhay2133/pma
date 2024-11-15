/*
  Warnings:

  - A unique constraint covering the columns `[position]` on the table `List` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "List_position_key" ON "List"("position");
