/*
  Warnings:

  - Changed the type of `category` on the `Products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."ProductsCategoryP" AS ENUM ('MOBILE', 'LAPTAP', 'WATCH', 'OTHER');

-- AlterTable
ALTER TABLE "public"."Products" DROP COLUMN "category",
ADD COLUMN     "category" "public"."ProductsCategoryP" NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
