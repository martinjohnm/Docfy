/*
  Warnings:

  - A unique constraint covering the columns `[city]` on the table `Location` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Location_city_key" ON "Location"("city");
