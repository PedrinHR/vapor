<?php

require('./modulos/top-menu.php');


$titulo_pagina = "DashBoard";


$error = $_GET['error'] ?? null;

$id_plataform = $_GET['id'] ?? null;

$consultar_plataform = "SELECT nome FROM plataforma WHERE id = '{$id_plataform}'";
$plataform = mysqli_fetch_assoc(mysqli_query($conn, $consultar_plataform));
?>



<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/global.css">
    <link rel="stylesheet" href="assets/normalize.css">
    <link rel="stylesheet" href="assets/styles.css">
    <title> DashBoard </title>


<body onclick="removerElementoPorId('error-nova-plataforma')">
    <div  id="atualizar_plataforma">
        <form action="./atualizar-plataforma.php" method="post">

            <div id="atualize_plataforma">
                <div id="atualize_plataforma">


                    <label  for="Plataforma"> Plataforma </label>
                    <input value="<?= $plataform['nome'] ?>" name="plataforma" id="plataforma" class="input_plataforma" type="text">
                    <input value="<?= $id_plataform ?>" name="id" type="hidden">

                </div>


                <?php if ($error != null) { ?>
                    <div id="error-nova-plataforma" class="error_message"><?= $error ?></div>

                <?php } ?>

                <div id="botao_salvar_editação" title="Atualizar">
                    <button type="submit" id="atualizar"> Atualizar </button>
                </div>







            </div>

        </form>
    </div>



</body>



</head>






</html>