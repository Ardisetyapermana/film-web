-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "sutradara" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);
