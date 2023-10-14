-- CreateTable
CREATE TABLE `ordem_servico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ordem_servico_numero_key`(`numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
