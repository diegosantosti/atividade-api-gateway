/*
  Warnings:

  - You are about to drop the `ordem_servico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ordem_servico`;

-- CreateTable
CREATE TABLE `ordem_servicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ordem_servicos_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `indice` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `problema` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `equipamentos_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
