-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_hospitalId_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_specializationId_fkey";

-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "specializationId" DROP NOT NULL,
ALTER COLUMN "hospitalId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;
