-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PRIVATE', 'UNLISTED');

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "visibility" "Visibility" NOT NULL DEFAULT 'PRIVATE';
