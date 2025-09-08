-- CreateTable
CREATE TABLE "public"."CartItem" (
    "id" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "productid" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."CartItem" ADD CONSTRAINT "CartItem_productid_fkey" FOREIGN KEY ("productid") REFERENCES "public"."Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
