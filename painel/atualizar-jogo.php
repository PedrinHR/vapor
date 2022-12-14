<?php 

require('./modulos/conexao.php');

$id_game = $_POST['id_jogo'] ?? null;
$name = $_POST['nome'] ?? null;
$price = $_POST['valor'] ?? null;
$image_url = $_POST['imagem_url'] ?? null;
$video_url = $_POST['video_url'] ?? null;
$release_date = $_POST['data_lancamento'] ?? null;
$developer = $_POST['desenvolvedora'] ?? null;
$category = $_POST['categoria'] ?? null;
$description = $_POST['descricao'] ?? null;

if($video_url == "" || $video_url == null) {

    $query_delete_video_url = "UPDATE jogo SET video_url = null WHERE id = {$id_game}";
    mysqli_query($conn, $query_delete_video_url);

    $query_atualizar_jogo_sem_video = "UPDATE jogo SET nome = '{$name}', valor = {$price}, descricao = '{$description}', imagem_url = '{$image_url}', data_lancamento = '{$release_date}', desenvolvedora = '{$developer}', id_categoria = {$category} WHERE id = {$id_game}";

    mysqli_query($conn, $query_atualizar_jogo_sem_video);

} else {
    
    $query_atualizar_jogo_com_video = "UPDATE jogo SET nome = '{$name}', valor = {$price}, descricao = '{$description}', imagem_url = '{$image_url}', video_url = '{$video_url}', data_lancamento = '{$release_date}', desenvolvedora = '{$developer}', id_categoria = {$category} WHERE id = {$id_game}";

    mysqli_query($conn, $query_atualizar_jogo_com_video);

}

header("location: editar-jogo.php?id={$id_game}&message=Jogo atualizado com sucesso!");