/*
  Warnings:

  - You are about to drop the column `appointmentDate` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "appointmentDate",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
