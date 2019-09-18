<?php include 'connect.php';

// le $get permet de récupèrer une valeur dans l'url, voir comment affiner l'utilisation de ce paramètre

$db = connect();

$id = $_GET['id_region'];


$sql = "SELECT dep_nom from departements where dep_reg_id =".$id;


$requete = $db->prepare($sql);

$requete->execute();


$row = $requete->fetchAll(PDO::FETCH_OBJ);
echo json_encode($row);

$requete->closeCursor();


?>