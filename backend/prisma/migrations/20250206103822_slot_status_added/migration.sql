-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('BOOKED', 'AVAILABLE');

-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "status" "SlotStatus" NOT NULL DEFAULT 'AVAILABLE';
