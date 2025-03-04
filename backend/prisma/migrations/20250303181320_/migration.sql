/*
  Warnings:

  - A unique constraint covering the columns `[doctorId,startTime,endTime]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booking_doctorId_startTime_endTime_key" ON "Booking"("doctorId", "startTime", "endTime");
