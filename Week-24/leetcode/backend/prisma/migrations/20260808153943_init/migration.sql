-- AlterTable
ALTER TABLE "Submission" ALTER COLUMN "status" SET DEFAULT 'Processing',
ALTER COLUMN "Output" DROP NOT NULL;
