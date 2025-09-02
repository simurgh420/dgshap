-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "productid" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_productid_fkey" FOREIGN KEY ("productid") REFERENCES "public"."Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
