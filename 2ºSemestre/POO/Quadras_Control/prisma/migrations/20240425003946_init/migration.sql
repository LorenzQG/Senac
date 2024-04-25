-- CreateTable
CREATE TABLE `client` (
    `cpf` VARCHAR(11) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tel` INTEGER NOT NULL,

    UNIQUE INDEX `Client_cpf_key`(`cpf`),
    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quadra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isLocate` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserva` (
    `client_id` VARCHAR(191) NOT NULL,
    `quadra_id` INTEGER NOT NULL,
    `dataHora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Reserva_client_id_key`(`client_id`),
    UNIQUE INDEX `Reserva_quadra_id_key`(`quadra_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
