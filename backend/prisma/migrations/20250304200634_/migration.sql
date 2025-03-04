/*
  Warnings:

  - A unique constraint covering the columns `[doctorId,startTime,endTime,status,id]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Booking_doctorId_startTime_endTime_status_key";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_doctorId_startTime_endTime_status_id_key" ON "Booking"("doctorId", "startTime", "endTime", "status", "id");
