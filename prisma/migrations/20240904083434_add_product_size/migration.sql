-- CreateTable
CREATE TABLE "productSize" (
    "id" SERIAL NOT NULL,
    "sizeId" INTEGER,
    "productId" INTEGER,

    CONSTRAINT "productSize_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "productSize_sizeId_productId_key" ON "productSize"("sizeId", "productId");

-- AddForeignKey
ALTER TABLE "productSize" ADD CONSTRAINT "productSize_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "size"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSize" ADD CONSTRAINT "productSize_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
