/*
  Warnings:

  - The primary key for the `Booking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Hospital` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_HospitalCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_hospitalId_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_specializationId_fkey";

-- DropForeignKey
ALTER TABLE "Hospital" DROP CONSTRAINT "Hospital_locationId_fkey";

-- DropForeignKey
ALTER TABLE "_HospitalCategories" DROP CONSTRAINT "_HospitalCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "_HospitalCategories" DROP CONSTRAINT "_HospitalCategories_B_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "doctorId" SET DATA TYPE TEXT,
ALTER COLUMN "patientId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Booking_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Booking_id_seq";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Category_id_seq";

-- AlterTable
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "specializationId" SET DATA TYPE TEXT,
ALTER COLUMN "hospitalId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Doctor_id_seq";

-- AlterTable
ALTER TABLE "Hospital" DROP CONSTRAINT "Hospital_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "locationId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hospital_id_seq";

-- AlterTable
ALTER TABLE "Location" DROP CONSTRAINT "Location_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Location_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "_HospitalCategories" DROP CONSTRAINT "_HospitalCategories_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_HospitalCategories_AB_pkey" PRIMARY KEY ("A", "B");

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HospitalCategories" ADD CONSTRAINT "_HospitalCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HospitalCategories" ADD CONSTRAINT "_HospitalCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Hospital"("id") ON DELETE CASCADE ON UPDATE CASCADE;
